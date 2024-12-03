import React from 'react';
import { Trophy } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <Trophy className="h-8 w-8 text-yellow-400" />
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Wordle</h1>
              <p className="text-xs text-blue-200">Word Guessing Game</p>
            </div>
          </div>

          {/* Game Stats Link */}
          <a 
            href="#" 
            className="px-4 py-2 bg-blue-700 hover:bg-blue-600 rounded-lg transition-colors"
          >
            Statistics
          </a>
        </div>
      </div>
    </header>
  );
}