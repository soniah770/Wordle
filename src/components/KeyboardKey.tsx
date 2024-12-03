import React from 'react';
import { LetterState } from '../types/game';

interface KeyboardKeyProps {
  letter: string;
  state: LetterState | '';
  onClick: () => void;
}

export function KeyboardKey({ letter, state, onClick }: KeyboardKeyProps) {
  return (
    <button
      onClick={onClick}
      className={`
        px-3 py-4 rounded font-semibold text-sm uppercase
        transform transition-all duration-100
        active:scale-95 hover:scale-105
        ${letter.length > 1 ? 'px-4' : ''}
        ${
          state === 'correct'
            ? 'bg-green-500 text-white shadow-lg hover:bg-green-600'
            : state === 'present'
            ? 'bg-yellow-500 text-white shadow-lg hover:bg-yellow-600'
            : state === 'absent'
            ? 'bg-gray-500 text-white shadow-lg hover:bg-gray-600'
            : 'bg-gray-200 hover:bg-gray-300 shadow'
        }
      `}
    >
      {letter === 'Backspace' ? '←' : letter}
    </button>
  );
}