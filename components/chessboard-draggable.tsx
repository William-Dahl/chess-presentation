/** @jsxImportSource @emotion/react */
import { ReactElement } from "react";

import { css, jsx } from "@emotion/react";

import { King, Pawn } from "./draggable-piece-with-state";

export type Coord = [number, number];

export type PieceRecord = {
  type: PieceType;
  location: Coord;
};

export type PieceType = "king" | "pawn";

export function isEqualCoord(c1: Coord, c2: Coord): boolean {
  return c1[0] === c2[0] && c1[1] === c2[1];
}

export const pieceLookup: {
  [Key in PieceType]: () => ReactElement;
} = {
  king: () => <King />,
  pawn: () => <Pawn />,
};

function renderSquares(pieces: PieceRecord[]) {
  const squares = [];
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const squareCoord: Coord = [row, col];

      const piece = pieces.find((piece) =>
        isEqualCoord(piece.location, squareCoord),
      );

      const isDark = (row + col) % 2 === 1;

      squares.push(
        <div
          css={squareStyles}
          style={{ backgroundColor: isDark ? "lightgrey" : "white" }}
        >
          {piece && pieceLookup[piece.type]()}
        </div>,
      );
    }
  }
  return squares;
}

function Chessboard() {
  const pieces: PieceRecord[] = [
    { type: "king", location: [3, 2] },
    { type: "pawn", location: [4, 5] },
  ];

  return <div css={chessboardStyles}>{renderSquares(pieces)}</div>;
}

const chessboardStyles = css({
  display: "grid",
  gridTemplateColumns: "repeat(8, 1fr)",
  gridTemplateRows: "repeat(8, 1fr)",
  width: "500px",
  height: "500px",
  border: "3px solid lightgrey",
});

const squareStyles = css({
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export default Chessboard;
