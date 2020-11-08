/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export default function MessageBubble({ text, alignLeft }) {
  const bubbleWrapperStyle = css`
    width: 100%;
    height: auto;
  `;
  const bubbleStyle = (theme) => css`
    padding: 20px 14px;
    background: ${alignLeft ? theme.color.secondary : theme.color.primary};
    box-shadow: ${theme.shadow.message};
    border-radius: 37px 37px ${alignLeft ? "37px 7px" : "7px 37px"};
    border: 1px solid rgba(34, 34, 34, 0.2);
    border-color: ${alignLeft && "transparent"};
    margin: 20px 0;
    margin-right: ${alignLeft ? "auto" : 0};
    margin-left: ${alignLeft ? 0 : "auto"};
    width: min-content;
    max-width: 70%;
  `;
  const messageStyle = (theme) =>
    css`
      color: ${alignLeft ? theme.color.primary : theme.color.secondary};
      white-space: nowrap;
      max-width: 70%;
      margin: 0;
      padding: 0;
    `;
  return (
    <div css={bubbleWrapperStyle}>
      <div className="bubble" css={bubbleStyle}>
        <p css={messageStyle}>{text}</p>
      </div>
    </div>
  );
}
