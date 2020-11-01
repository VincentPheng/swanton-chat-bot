/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState } from "react";
import { css, jsx } from "@emotion/core";
import { HelpCircle } from "react-feather";

export default function HeaderNav({ suggestionsClicked }) {
  const headerStyles = (theme) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    background-color: white;
    box-shadow: ${theme.shadow.menuBar};
    grid-area: "header";
  `;
  const titleStyles = (theme) => css`
    color: ${theme.color.secondary};
    font-size: 25px;
  `;
  const iconStyles = (theme) => css`
    color: ${theme.color.accent};
  `;

  return (
    <header css={headerStyles}>
      <h1 css={titleStyles}>Swanton</h1>
      <HelpCircle css={iconStyles} onClick={suggestionsClicked()} />
    </header>
  );
}
