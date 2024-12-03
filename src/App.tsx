import React, { useState, useEffect } from 'react';
import { GameBoard } from './components/GameBoard';
import { Keyboard } from './components/Keyboard';
import { Header } from './components/Header';
import { GameStats } from './components/GameStats';
import { checkGuess } from './utils/gameLogic';
import { wordList } from './data/wordList';
import { GuessResult } from './types/game';

function App() {
  const [answer] = useState(() => 
    wordList[Math.floor(Math.random() * wordList.length)]
  );
  const [guesses, setGuesses] = useState<GuessResult[][]>([]);
  const [currentGuess, setCurrentGuess] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [shake, setShake] = useState(false);

  const handleKey = (key: string) => {
    if (gameOver) return;

    if (key === 'Enter' && currentGuess.length === 5) {
      const newGuess = checkGuess(currentGuess, answer);
      setGuesses([...guesses, newGuess]);
      setCurrentGuess('');

      if (currentGuess === answer || guesses.length === 4) {
        setGameOver(true);
      }
    } else if (key === 'Enter' && currentGuess.length !== 5) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
    } else if (key === 'Backspace') {
      setCurrentGuess(prev => prev.slice(0, -1));
    } else if (currentGuess.length < 5 && /^[a-zA-Z]$/.test(key)) {
      setCurrentGuess(prev => prev + key.toLowerCase());
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      handleKey(e.key);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentGuess, gameOver]);

  const currentGuessResult: GuessResult[] = currentGuess
    .split('')
    .map(letter => ({ letter, state: 'empty' }));
  while (currentGuessResult.length < 5) {
    currentGuessResult.push({ letter: '', state: 'empty' });
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col">
      <Header />
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-xl shadow-2xl max-w-lg w-full m-4 transition-all duration-300">
          {showIntro ? (
            <div className="text-center mb-8 animate-fade-in">
              <h1 className="text-3xl font-bold mb-4 text-blue-600">Welcome to Wordle!</h1>
              <p className="mb-4 text-gray-600">
                Try to guess the 5-letter word in 5 tries. After each guess, the color of the tiles will
                change to show how close your guess was to the word.
              </p>
              <ul className="mb-6 text-left space-y-2 bg-gray-50 p-4 rounded-lg">
                <li className="flex items-center space-x-2">
                  <span className="w-6 h-6 bg-green-500 rounded"></span>
                  <span>Letter is correct and in right spot</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-6 h-6 bg-yellow-500 rounded"></span>
                  <span>Letter is in the word but wrong spot</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-6 h-6 bg-gray-500 rounded"></span>
                  <span>Letter is not in the word</span>
                </li>
              </ul>
              <button
                onClick={() => setShowIntro(false)}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 
                         transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                Start Playing
              </button>
            </div>
          ) : (
            <>
              <div className={`mb-8 ${shake ? 'animate-shake' : ''}`}>
                <GameBoard
                  guesses={[...guesses, currentGuessResult]}
                  maxGuesses={5}
                />
              </div>
              <Keyboard onKey={handleKey} guesses={guesses} />
              {gameOver && (
                <GameStats
                  guessCount={guesses.length}
                  isWinner={guesses[guesses.length - 1].every(g => g.state === 'correct')}
                  answer={answer}
                  onPlayAgain={() => window.location.reload()}
                />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;