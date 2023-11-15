/** @jsxImportSource @emotion/react */
"use client";
import { css } from "@emotion/react";
import KingWithState from "../../components/draggable-piece-with-state";

export default function ChessStarter() {
  return (
    <main>
      <a href="/">Back</a>
      <div css={pageStyles}>
        <div css={titleStyles}>Draggable piece with state</div>
        <KingWithState />
      </div>
    </main>
  );
}

const titleStyles = css({
  fontSize: 30,
  fontWeight: "bold",
});

const pageStyles = css({
  display: "flex",
  gap: 30,
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "85vh",
});
