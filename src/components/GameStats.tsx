import React from 'react';

interface GameStatsProps {
  guessCount: number;
  isWinner: boolean;
  answer: string;
  onPlayAgain: () => void;
}

export function GameStats({ guessCount, isWinner, answer, onPlayAgain }: GameStatsProps) {
  return (
    <div className="mt-6 text-center animate-fade-in">
      <div className="mb-4">
        {isWinner ? (
          <>
            <h2 className="text-2xl font-bold text-green-600 mb-2"> Congratulations</h2>
            <p className="text-gray-600">You won in {guessCount} {guessCount === 1 ? 'guess' : 'guesses'}!</p>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-red-600 mb-2">Game Over</h2>
            <p className="text-gray-600">The word was <span className="font-bold">{answer.toUpperCase()}</span></p>
          </>
        )}
      </div>
      <button
        onClick={onPlayAgain}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 
                 transition-colors transform hover:scale-105 active:scale-95"
      >
        Play Again
      </button>
    </div>
  );
}