import React from 'react';
import { GuessResult } from '../types/game';
import { KeyboardKey } from './KeyboardKey';

const KEYBOARD_ROWS = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['Enter', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Backspace']
];

interface KeyboardProps {
  onKey: (key: string) => void;
  guesses: GuessResult[][];
}

export function Keyboard({ onKey, guesses }: KeyboardProps) {
  const getKeyState = (key: string) => {
    const allGuesses = guesses.flat();
    const keyGuesses = allGuesses.filter(g => g.letter.toLowerCase() === key);
    if (keyGuesses.some(g => g.state === 'correct')) return 'correct';
    if (keyGuesses.some(g => g.state === 'present')) return 'present';
    if (keyGuesses.some(g => g.state === 'absent')) return 'absent';
    return '';
  };

  return (
    <div className="grid gap-2">
      {KEYBOARD_ROWS.map((row, i) => (
        <div key={i} className="flex justify-center gap-1">
          {row.map(key => (
            <KeyboardKey
              key={key}
              letter={key}
              state={getKeyState(key)}
              onClick={() => onKey(key)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}