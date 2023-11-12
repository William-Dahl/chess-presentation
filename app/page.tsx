/** @jsxImportSource @emotion/react */
'use client'
import Chessboard from "../components/chessboard-monitor";
import { css } from '@emotion/react';

export default function Home() {
  return (
    <main>
      <div css={{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '95vh',
        display: 'flex',
        gap: 10,
      }}>
        <div css={{
          fontWeight: 'bold',
          marginBottom: 10,
        }}>Pages:</div>
        <a href="chess-starter">Starter code</a>
        <a href="draggable-piece">Draggable piece</a>
        <a href="draggable-piece-with-state">Draggable piece with state</a>
        <a href="chess-draggable-pieces">Chessboard with draggable pieces</a>
        <a href="chess-hovering-behaviour">Chessboard with hovering behaviour</a>
        <a href="chess-validation-highlighting">Chessboard with validation highlighting</a>
        <a href="chess-drop-prevention">Chessboard with drop prevention</a>
        <a href="chess-moving-pieces">Chessboard with moving pieces</a>
      </div >
    </main >
  )
}
