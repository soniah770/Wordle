import React from 'react';
import { GuessResult } from '../types/game';

interface GameTileProps {
  result: GuessResult;
  index: number;
}

export function GameTile({ result, index }: GameTileProps) {
  return (
    <div
      className={`
        w-14 h-14 border-2 flex items-center justify-center text-2xl font-bold uppercase
        transform transition-all duration-500 ease-in-out
        ${result.letter ? 'scale-100' : 'scale-95'}
        ${
          result.state === 'correct'
            ? 'bg-green-500 text-white border-green-600 animate-flip-in'
            : result.state === 'present'
            ? 'bg-yellow-500 text-white border-yellow-600 animate-flip-in'
            : result.state === 'absent'
            ? 'bg-gray-500 text-white border-gray-600 animate-flip-in'
            : 'border-gray-300 hover:border-gray-400'
        }
      `}
      style={{
        animationDelay: `${index * 100}ms`
      }}
    >
      {result.letter}
    </div>
  );
}