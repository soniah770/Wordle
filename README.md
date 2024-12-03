# Wordle Game Clone

A modern implementation of the popular word-guessing game Wordle built with React, TypeScript, and Tailwind CSS.


## Features

- 🎮 Interactive word guessing gameplay
- 🎨 Beautiful UI with animations
- ⌨️ Virtual keyboard support
- 🖱️ Physical keyboard support
- 🎯 Real-time feedback with color-coded tiles
- 📱 Fully responsive design
- ✨ Smooth animations and transitions

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Vitest for testing
- Lucide React for icons

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <https://github.com/soniah770/Wordle.git>
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Creates a production build
- `npm run preview` - Previews the production build locally
- `npm run test` - Runs the test suite
- `npm run lint` - Runs ESLint for code quality

## Game Rules

1. Try to guess the 5-letter word in 5 attempts
2. After each guess, the color of the tiles will change:
   - 🟩 Green: Letter is correct and in the right position
   - 🟨 Yellow: Letter is in the word but in the wrong position
   - ⬜ Gray: Letter is not in the word

## Project Structure

```
src/
├── components/     # React components
├── data/          # Game data and word list
├── types/         # TypeScript type definitions
├── utils/         # Utility functions
└── tests/         # Test files
```