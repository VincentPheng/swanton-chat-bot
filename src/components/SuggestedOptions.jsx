/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import suggestions from "./suggestions";

export default function SuggestedOptions({ onSend, onSuggestionClick }) {
  const suggestionBubbleStyle = (theme) =>
    css`
      display: block;
      padding: 10px 20px;
      margin: 20px auto;
      background-color: ${theme.color.accent};
      color: white;
      width: max-content;
      text-align: center;
      max-width: 400px;
      border-radius: 30px;
      cursor: pointer;
      transition: transform 0.5s, box-shadow 0.5s;
      box-shadow: 0 10px 20px transparent;
      @media (hover: hover) and (pointer: fine) {
        &:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 15px rgba(30, 78, 33, 0.257);
        }
      }
    `;

  const suggestionListStyle = css`
    padding: 0 0 20px; // pad the bottom to create room for list items to grow
    margin: 0;
    list-style: none;
    width: 100%;
    text-align: left;
    overflow-y: scroll;
  `;

  function sendMessage(suggestion) {
    onSuggestionClick();
    onSend(suggestion);
  }

  return (
    <ul css={suggestionListStyle}>
      {suggestions.map((suggestion) => (
        <li
          css={suggestionBubbleStyle}
          key={suggestion}
          onClick={() => sendMessage(suggestion)}
        >
          {suggestion}
        </li>
      ))}
    </ul>
  );
}
