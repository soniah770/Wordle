import React from 'react';
import { GuessResult } from '../types/game';
import { GameTile } from './GameTile';

interface GameBoardProps {
  guesses: GuessResult[][];
  maxGuesses: number;
}

export function GameBoard({ guesses, maxGuesses }: GameBoardProps) {
  const emptyRows = Array.from({ length: maxGuesses - guesses.length }, () =>
    Array.from({ length: 5 }, () => ({ letter: '', state: 'empty' as const }))
  );
  const allRows = [...guesses, ...emptyRows];

  return (
    <div className="grid gap-2">
      {allRows.map((row, i) => (
        <div key={i} className="flex gap-2 justify-center">
          {row.map((result, j) => (
            <GameTile key={`${i}-${j}`} result={result} index={j} />
          ))}
        </div>
      ))}
    </div>
  );
}