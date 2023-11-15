/** @jsxImportSource @emotion/react */
"use client";
import { css } from "@emotion/react";
import KingInPlace from "../../components/draggable-piece-in-place";

export default function ChessStarter() {
  return (
    <main>
      <a href="/">Back</a>
      <div css={pageStyles}>
        <div css={titleStyles}>Draggable piece</div>
        <KingInPlace />
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
  height: "92vh",
});
