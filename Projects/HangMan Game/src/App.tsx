import React, { useCallback, useEffect, useState } from 'react';
import HangManDrawing from './components/HangManDrawing';
import HangManWordGuess from './components/HangManWordGuess';
import HangManKeyboard from './components/HangManKeyboard';
import words from "./wordList.json";

const App = () => {
  function getWord() {
    return words[Math.floor(Math.random() * words.length)];
  }

  const [wordToGuess, setWordToGuess] = useState(getWord);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectGuess = guessedLetters.filter(letter => !wordToGuess.includes(letter));

  const addGuessedLetter = useCallback((letter: string) => {
    if (guessedLetters.includes(letter)) return;
    setGuessedLetters(currentLetters => [...currentLetters, letter]);
  }, [guessedLetters]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;
      e.preventDefault();
      addGuessedLetter(key);
    };
    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters]);

  useEffect(() => {
    console.log("Word to Guess:", wordToGuess);
    console.log("Guessed Letters:", guessedLetters);
    console.log("Number of Incorrect Guesses:", incorrectGuess);
  }, [wordToGuess, guessedLetters, incorrectGuess]);

  return (
    <div className='w-full h-screen flex flex-col mx-0 my-auto items-center'>
      <div className='w-full h-8 bg-purple-300 text-center font-bold'>
        <h1>Hangman Game</h1>
      </div>
      <HangManDrawing numberofGuesses={incorrectGuess.length} />
      <HangManWordGuess guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
      <div className='self-stretch'>
        <HangManKeyboard
          activeLetters={guessedLetters.filter(letter => wordToGuess.includes(letter))}
          inactiveLetters={incorrectGuess}
          addGuessedLetters={addGuessedLetter}
        />
      </div>
    </div>
  );
};

export default App;