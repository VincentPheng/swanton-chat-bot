/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function GreetingCard() {
  const titleText = "Welcome to Swanton Chat!";
  const descriptionText = `Ask anything you want to know about the ranch! 
  Check out some commonly asked questions by clicking the question mark above.`;

  const cardStyles = css`
    width: 70%;
    align-self: center;
    margin-top: 50px;
    padding: 50px;
    border-radius: 15px;
    background: white;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
  `;

  const titleStyle = css`
    text-align: center;
  `;

  const descriptionStyle = css`
    font-size: 16px;
  `;

  const description = descriptionText.split("\n").map((text, i) => (
    <p key={i} css={descriptionStyle}>
      {text}
    </p>
  ));

  return (
    <div css={cardStyles}>
      <h2 css={titleStyle}>{titleText}</h2>
      {description}
    </div>
  );
}
