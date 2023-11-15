/** @jsxImportSource @emotion/react */
import { useEffect, useRef } from "react";

import { css, jsx } from "@emotion/react";
import invariant from "tiny-invariant";

import { draggable } from "@atlaskit/pragmatic-drag-and-drop/adapter/element";

import king from "../public/king.png";
import pawn from "../public/pawn.png";

export type PieceType = "king" | "pawn";

type PieceProps = {
  image: string;
  alt: string;
};

function Piece({ image, alt }: PieceProps) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    invariant(el);

    return draggable({
      element: el,
    });
  }, []);

  return <img css={imageStyles} src={image} alt={alt} ref={ref} />;
}

export function King() {
  return <Piece image={king.src} alt="King" />;
}

export function Pawn() {
  return <Piece image={pawn.src} alt="Pawn" />;
}

const imageStyles = css({
  width: 30,
  height: 30,
  padding: 4,
  borderRadius: 6,
  boxShadow:
    "1px 3px 3px rgba(9, 30, 66, 0.25),0px 0px 1px rgba(9, 30, 66, 0.31)",
  "&:hover": {
    backgroundColor: "rgba(168, 168, 168, 0.25)",
  },
});

export default King;
