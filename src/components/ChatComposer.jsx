/** @jsxImportSource @emotion/react */
import { useEffect, useRef } from "react";
import { css } from "@emotion/react";
import { Send } from "react-feather";

export default function ChatComposer({ onSend }) {
  const menuBarStyle = (theme) => css`
    height: auto;
    grid-area: "composer";
    padding: 10px 20px;
    background-color: white;
    box-shadow: ${theme.shadow.menuBar};
  `;

  const contentStyle = css`
    display: flex;
    align-items: center;
    max-width: 700px;
    margin: auto;
    width: 100%;
  `;

  const txtFieldStyle = (theme) => css`
    width: 100%;
    height: 100%;
    font-size: 15px;
    padding: 10px 20px;
    background-color: #ebebeb;
    border-radius: 30px;
    max-height: 100px;
    overflow-y: scroll;
    border: 1px solid rgba(34, 34, 34, 0.2);
  `;

  const sendButtonStyle = (theme) => css`
    display: flex;
    align-items: center;
    color: ${theme.color.primary};
    background-color: ${theme.color.accent};
    margin-left: 20px;
    padding: 10px 15px;
    border-radius: 30px;
    border: none;
    cursor: pointer;
  `;

  const buttonTextStyle = css`
    font-size: 15px;
    font-weight: 600;
    padding: 0;
    margin: 0;
    margin-left: 10px;
  `;

  let textFieldRef = useRef(null);

  // Takes the message from the content editable field and sends it out
  function sendMessage() {
    const emptyField = /^\s*$/g;
    if (
      !textFieldRef.current ||
      emptyField.test(textFieldRef.current.innerText)
    )
      return;
    let message = textFieldRef.current.innerText.trim();
    textFieldRef.current.innerText = "";
    onSend(message);
  }

  // Send Message on Enter Pressed
  useEffect(() => {
    const textField = textFieldRef.current;
    if (!textField) return;
    const onEnter = (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        sendMessage();
      }
    };
    textField.addEventListener("keypress", onEnter);
    return () => textField.removeEventListener("keypress", onEnter);
  });

  return (
    <div css={menuBarStyle} className="ChatComposer">
      <div css={contentStyle}>
        <div
          css={txtFieldStyle}
          ref={textFieldRef}
          contentEditable="true"
        ></div>
        <button css={sendButtonStyle} onClick={() => sendMessage()}>
          <Send size={20} />
          <p css={buttonTextStyle}>Send</p>
        </button>
      </div>
    </div>
  );
}
