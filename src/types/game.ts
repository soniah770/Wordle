export type LetterState = 'correct' | 'present' | 'absent' | 'empty';

export interface GuessResult {
  letter: string;
  state: LetterState;
}