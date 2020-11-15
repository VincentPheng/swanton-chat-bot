/** @jsxRuntime classic */
/** @jsx jsx */
import { useEffect, useState } from "react";
import { css, jsx } from "@emotion/core";
import ChatComposer from "./ChatComposer";
import ChatWindow from "./ChatWindow";
import HeaderNav from "./HeaderNav";
import axios from "axios";

export default function Chatbot(props) {
  const SENDER_USER = "user";
  const SENDER_BOT = "bot";

  const [suggestionsOpen, setSuggestionsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [conversation, setConversation] = useState([]);

  /**
   * Toggles the suggestions
   */
  let onSuggestionClick = () => {
    setSuggestionsOpen((s) => !s);
  };

  /**
   * Every time the user sends a new question, get the answer from the API and
   * add it to the conversation.
   */
  useEffect(() => {
    if (query === "") return;
    let payload = { message: query };

    async function postMessage() {
      try {
        const response = await axios.post("webhooks/rest/webhook", payload);
        const answerText = response.data[0].text;
        setQuery("");
        setConversation([
          ...conversation,
          { text: answerText, sender: SENDER_BOT, timestamp: Date.now() },
        ]);
      } catch (err) {
        console.error(err);
        return;
      }
    }

    postMessage();
  }, [query, conversation]);

  /**
   * Adds the user's message to the conversation, passes message to the bot
   */
  let sendMessage = (message) => {
    setConversation([
      ...conversation,
      { text: message, sender: SENDER_USER, timestamp: Date.now() },
    ]);
    setQuery(message);
  };

  const chatbotStyles = css`
    display: grid;
    grid-template-rows: min-content auto min-content;
    grid-template-columns: 1fr;
    grid-template-areas: "header" "chat-window" "composer";
    width: 100%;
    max-width: 700px;
    margin: auto;
    height: 100%;
  `;

  return (
    <main className="Chatbot" css={chatbotStyles}>
      <HeaderNav
        key="header"
        onSuggestionClick={onSuggestionClick}
        suggestionsOpen={suggestionsOpen}
      />
      <ChatWindow
        key="chat-window"
        conversation={conversation}
        suggestionsOpen={suggestionsOpen}
        onSend={sendMessage}
        onSuggestionClick={onSuggestionClick}
      />
      {!suggestionsOpen && (
        <ChatComposer key="chat-composer" onSend={sendMessage} />
      )}
    </main>
  );
}
