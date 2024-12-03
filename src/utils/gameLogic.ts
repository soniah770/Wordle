import { GuessResult } from '../types/game';

export function checkGuess(guess: string, answer: string): GuessResult[] {
  const result: GuessResult[] = Array(5).fill({ letter: '', state: 'empty' });
  const answerLetters = answer.split('');
  const remainingLetters = [...answerLetters];

  // First pass: mark correct letters
  guess.split('').forEach((letter, i) => {
    if (letter === answerLetters[i]) {
      result[i] = { letter, state: 'correct' };
      remainingLetters[i] = '';
    }
  });

  // Second pass: mark present letters
  guess.split('').forEach((letter, i) => {
    if (result[i].state === 'empty') {
      const letterIndex = remainingLetters.indexOf(letter);
      if (letterIndex !== -1) {
        result[i] = { letter, state: 'present' };
        remainingLetters[letterIndex] = '';
      } else {
        result[i] = { letter, state: 'absent' };
      }
    }
  });

  return result;
}