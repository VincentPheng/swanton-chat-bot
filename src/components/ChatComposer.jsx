/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

export default function ChatComposer() {
  const menuBarStyle = (theme) => css`
    height: 60px;
    grid-area: "composer";
    padding: 20px;
    background-color: white;
    box-shadow: ${theme.shadow.menuBar};
  `;
  const textBoxStyle = css``;
  return (
    <div css={menuBarStyle} className="ChatComposer">
      {" "}
    </div>
  );
}
