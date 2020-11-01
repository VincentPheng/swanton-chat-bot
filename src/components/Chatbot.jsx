/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState } from "react";
import { css, jsx } from "@emotion/core";
import ChatComposer from "./ChatComposer";
import ChatWindow from "./ChatWindow";
import HeaderNav from "./HeaderNav";
import SuggestedOptions from "./SuggestedOptions";
export default function Chatbot(props) {
  const [suggestionsOpen, setSuggestionsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [questionText, setQuestionText] = useState("");
  const [conversation, setConversation] = useState([
    { text: "Who is Nimbus?", sender: "user" },
    { text: "No idea, I'm from Swanton", sender: "bot" },
  ]);

  let suggestionsClicked = () => {
    setSuggestionsOpen((s) => !s);
  };

  const chatbotStyles = css`
    display: grid;
    grid-template-rows: min-content auto min-content;
    grid-template-columns: 1fr;
    grid-template-areas: "header" "chat-window" "composer";
    width: 100%;
    height: 100%;
  `;

  return (
    <main className="Chatbot" css={chatbotStyles}>
      <HeaderNav suggestionsClicked={suggestionsClicked} />
      {suggestionsOpen && <SuggestedOptions />}
      <ChatWindow conversation={conversation} />
      <ChatComposer />
    </main>
  );
}
