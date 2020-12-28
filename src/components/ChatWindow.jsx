/** @jsxImportSource @emotion/react */
import { useEffect, useRef } from "react";
import { css } from "@emotion/react";
import MessageBubble from "./MessageBubble";
import SuggestedOptions from "./SuggestedOptions";
import GreetingCard from "./GreetingCard";

export default function ChatWindow({
  conversation,
  suggestionsOpen,
  onSend,
  onSuggestionClick,
  onFeedbackGiven,
}) {
  const windowStyles = css`
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 100%;
    height: 100%;
    grid-area: chat-window;
    overflow-y: scroll;
    background: whitesmoke;
  `;

  const chatWindowRef = useRef(null);

  // Scroll to the bottom of the chat window every time a new message is sent
  useEffect(() => {
    if (!chatWindowRef.current || suggestionsOpen) return;
    chatWindowRef.current.scrollTo({
      top: chatWindowRef.current.scrollHeight,
      left: 0,
      behavior: "smooth",
    });
  });

  /**
   * Create message bubbles from the current conversation
   */
  const conversationElements = conversation.length ? (
    conversation.map((m) => (
      <MessageBubble
        key={m.timestamp}
        text={m.text}
        timestamp={m.timestamp}
        showFeedback={m.responseType === "answer"}
        alignLeft={m.sender !== "user"}
        onFeedbackGiven={onFeedbackGiven}
      />
    ))
  ) : (
    <GreetingCard />
  );
  return (
    <div className="ChatWindow" css={windowStyles} ref={chatWindowRef}>
      {suggestionsOpen ? (
        <SuggestedOptions
          onSend={onSend}
          onSuggestionClick={onSuggestionClick}
        />
      ) : (
        conversationElements
      )}
    </div>
  );
}
