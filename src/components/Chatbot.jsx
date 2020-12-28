/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import { css } from "@emotion/react";
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
        const answerMessages = response.data.map(({ text }, i) => ({
          text,
          sender: SENDER_BOT,
          timestamp: Date.now() + i,
        }));
        setQuery("");
        setConversation([...conversation, ...answerMessages]);
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
        onSuggestionClick={onSuggestionClick}
        suggestionsOpen={suggestionsOpen}
      />
      <ChatWindow
        conversation={conversation}
        suggestionsOpen={suggestionsOpen}
        onSend={sendMessage}
        onSuggestionClick={onSuggestionClick}
      />
      {!suggestionsOpen && <ChatComposer onSend={sendMessage} />}
    </main>
  );
}
