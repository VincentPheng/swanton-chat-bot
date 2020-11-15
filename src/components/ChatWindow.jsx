/** @jsxRuntime classic */
/** @jsx jsx */
import { useEffect, useRef } from "react";
import { css, jsx } from "@emotion/core";
import MessageBubble from "./MessageBubble";
import SuggestedOptions from "./SuggestedOptions";
import GreetingCard from "./GreetingCard"

export default function ChatWindow({
  conversation,
  suggestionsOpen,
  onSend,
  onSuggestionClick,
}) {
  const windowStyles = css`
    display:flex;
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
    if (!chatWindowRef.current) return;
    chatWindowRef.current.scrollTo({
      top: chatWindowRef.current.scrollHeight,
      left: 0,
      behavior: "smooth",
    });
  });

  /**
   * Create message bubbles from the current conversation
   */
  const conversationElements = conversation.length ? conversation.map((m) => (
    <MessageBubble
      key={m.timestamp}
      text={m.text}
      alignLeft={m.sender !== "user"}
    />
  )) : <GreetingCard/>;
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
