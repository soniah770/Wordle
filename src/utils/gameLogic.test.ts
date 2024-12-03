import { describe, it, expect } from 'vitest';
import { checkGuess } from './gameLogic';

describe('checkGuess', () => {
  it('correctly identifies letters in right position', () => {
    const result = checkGuess('water', 'water');
    expect(result.every(r => r.state === 'correct')).toBe(true);
  });

  it('correctly handles duplicate letters when one is in correct position', () => {
    const result = checkGuess('otter', 'water');
    expect(result[1].state).toBe('correct'); // First 't' is correct
    expect(result[2].state).toBe('absent'); // Second 't' should be absent
  });

  it('correctly handles letters in wrong position', () => {
    const result = checkGuess('earth', 'heart');
    expect(result.some(r => r.state === 'present')).toBe(true);
  });

  it('correctly handles completely wrong guess', () => {
    const result = checkGuess('pizza', 'water');
    expect(result.every(r => r.state === 'absent')).toBe(true);
  });
});