/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import MessageBubble from "./MessageBubble";

export default function ChatWindow({ conversation }) {
  const windowStyles = css`
    padding: 20px;
    width: 100%;
    height: 100%;
    grid-area: "chat-window";
    overflow-y: scroll;
  `;
  return (
    <div className="ChatWindow" css={windowStyles}>
      {conversation.map((m) => (
        <MessageBubble text={m.text} alignLeft={m.sender !== "user"} />
      ))}
    </div>
  );
}
