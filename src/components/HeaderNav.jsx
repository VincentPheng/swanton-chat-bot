/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { HelpCircle, XCircle } from "react-feather";
import useEscape from "../hooks/useEscape";

export default function HeaderNav({ onSuggestionClick, suggestionsOpen }) {
  const headerStyles = (theme) => css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    grid-template-areas: "left-nav center-nav right-nav";
    align-items:center;
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

  const suggestionsToggle = suggestionsOpen ? <XCircle key="closeCircle" size={30} css={iconStyles} onClick={() => onSuggestionClick()}/>: <HelpCircle
  key="helpCircle"
  css={iconStyles}
  size={30}
  onClick={() => onSuggestionClick()}
/>

  return (
    <header css={headerStyles}>
      <h1 key="title" css={theme => css`
        grid-area: "nav-left";
        ${titleStyles(theme)};
      `}>
        Swanton
      </h1>

        <h2 key="subtitle" css={theme => css`
          ${titleStyles(theme)}
          grid-area: center-nav; margin:auto; font-weight: 500;

          .fade-enter{
            opacity: 0;
        }
        .fade-exit{
          opacity: 1;
        }
        .fade-enter-active{
          opacity: 1;
        }
        .fade-exit-active{
          opacity: 0;
        }
        .fade-enter-active,
        .fade-exit-active{
          transition: opacity 500ms;
        }
          
          `
          }>
            {suggestionsOpen ? "Suggestions" : "Chat"}
          </h2>
      
      {suggestionsToggle}
    </header>
  );
}
