/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { HelpCircle } from "react-feather";
import useEscape from "../hooks/useEscape";

export default function HeaderNav({ onSuggestionClick, suggestionsOpen }) {
  const headerStyles = (theme) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    background-color: white;
    box-shadow: ${theme.shadow.menuBar};
    grid-area: "header";
  `;

  useEscape(() => {
    suggestionsOpen && onSuggestionClick();
  });

  const titleStyles = (theme) => css`
    color: ${theme.color.secondary};
    font-size: 25px;
  `;
  const iconStyles = (theme) => css`
    color: ${theme.color.accent};
    cursor: pointer;
  `;

  return (
    <header css={headerStyles}>
      <h1 key="title" css={titleStyles}>
        Swanton
      </h1>
      <HelpCircle
        key="helpCircle"
        css={iconStyles}
        onClick={() => onSuggestionClick()}
      />
    </header>
  );
}
