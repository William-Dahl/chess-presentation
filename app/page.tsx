/** @jsxImportSource @emotion/react */
"use client";

export default function Home() {
  return (
    <main>
      <div
        css={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "95vh",
          display: "flex",
          gap: 10,
        }}
      >
        <div
          css={{
            fontSize: 30,
            fontWeight: "bold",
            marginBottom: 10,
          }}
        >
          How to drag: Chess
          <div
            css={{
              fontSize: 20,
              fontWeight: "bold",
              marginTop: 20,
            }}
          >
            Steps:
            <ol>
              <li key="chess-starter">
                <a href="chess-starter">Chessboard starting point</a>
              </li>
              <li key="draggable-piece">
                <a href="draggable-piece">Draggable piece</a>
              </li>
              <li key="draggable-piece-with-state">
                <a href="draggable-piece-with-state">
                  Draggable piece with state
                </a>
              </li>
              <li key="chess-draggable-pieces">
                <a href="chess-draggable-pieces">
                  Chessboard with draggable pieces
                </a>
              </li>
              <li key="chess-hovering-behaviour">
                <a href="chess-hovering-behaviour">
                  Chessboard with hovering behaviour
                </a>
              </li>
              <li key="chess-validation-highlighting">
                <a href="chess-validation-highlighting">
                  Chessboard with validation highlighting
                </a>
              </li>
              <li key="chess-drop-prevention">
                <a href="chess-drop-prevention">
                  Chessboard with drop prevention
                </a>
              </li>
              <li key="chess-moving-pieces">
                <a href="chess-moving-pieces">Chessboard with moving pieces</a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </main>
  );
}
