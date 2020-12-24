/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export default function MessageBubble({ text, alignLeft }) {
  const messageStyle = (theme) =>
    css`
      color: ${alignLeft ? theme.color.primary : theme.color.secondary};
      width: max-content;
      max-width: 70%;
      padding: 20px 14px;
      text-align: left;
      padding: 20px 14px;
      background: ${alignLeft ? theme.color.secondary : theme.color.primary};
      box-shadow: ${theme.shadow.message};
      border-radius: 37px 37px ${alignLeft ? "37px 7px" : "7px 37px"};
      border: 1px solid rgba(34, 34, 34, 0.2);
      border-color: ${alignLeft && "transparent"};
      margin: 20px 0;
      align-self: ${!alignLeft && "flex-end"};
    `;
  return <p css={messageStyle}>{text}</p>;
}
