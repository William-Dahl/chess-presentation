/** @jsxImportSource @emotion/react */
"use client";
import { css } from "@emotion/react";
import Chessboard from "../../components/chessboard-drop-target";

export default function ChessStarter() {
  return (
    <main>
      <a href="/">Back</a>
      <div css={pageStyles}>
        <div css={titleStyles}>Chessboard with hovering behaviour</div>
        <Chessboard />
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
