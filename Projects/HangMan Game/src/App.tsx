import React, { useState } from 'react';
import HangManDrawing from './components/HangManDrawing';
import HangManWordGuess from './components/HangManWordGuess';
import HangManKeyboard from './components/HangManKeyboard';

const App = () => {
  return (
    <div className='w-full h-screen flex flex-col  mx-0 my-auto items-center'>
      <div className='w-full h-8 bg-purple-300 text-center font-bold'>
        <h1>Hangman Game</h1>
      </div>
      <HangManDrawing />
      <HangManWordGuess />
      <HangManKeyboard />
    </div>
  )
}

export default App
