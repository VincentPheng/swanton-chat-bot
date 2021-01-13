/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { HelpCircle, XCircle } from "react-feather";
import useEscape from "../hooks/useEscape";

export default function HeaderNav({ onSuggestionClick, suggestionsOpen }) {
  const headerStyles = (theme) => css`
    display: grid;
    grid-template-columns: repeat(1fr, 2fr, 1fr);
    grid-template-rows: auto;
    grid-template-areas: "left-nav center-nav right-nav";
    align-items: center;
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
    grid-area: right-nav;
    margin-left: auto;
    margin-right: 0;
  `;

  const suggestionsToggle = suggestionsOpen ? (
    <XCircle size={30} css={iconStyles} onClick={() => onSuggestionClick()} />
  ) : (
    <HelpCircle
      css={iconStyles}
      size={30}
      onClick={() => onSuggestionClick()}
    />
  );

  return (
    <header css={headerStyles}>

      <h2
        css={(theme) => css`
          ${titleStyles(theme)}
          grid-area: center-nav;
          margin: auto;
          font-weight: 500;

          .fade-enter {
            opacity: 0;
          }
          .fade-exit {
            opacity: 1;
          }
          .fade-enter-active {
            opacity: 1;
          }
          .fade-exit-active {
            opacity: 0;
          }
          .fade-enter-active,
          .fade-exit-active {
            transition: opacity 500ms;
          }
        `}
      >
        {suggestionsOpen ? "FAQs" : "Swanton Pacific Ranch Chat" }
      </h2>

      {suggestionsToggle}
    </header>
  );
}
