import { useCallback, useEffect, useState } from 'react';
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

  const isLoser = incorrectGuess.length >= 6;
  const isWinner = wordToGuess.split("").every(letter => guessedLetters.includes(letter));

  const addGuessedLetter = useCallback((letter: string) => {
    if (guessedLetters.includes(letter) || isWinner || isLoser) return;
    setGuessedLetters(currentLetters => [...currentLetters, letter]);
  }, [guessedLetters, isWinner, isLoser]);

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
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (key !== "Enter") return;
      e.preventDefault();
      setWordToGuess(getWord())
      setGuessedLetters([]);
    };
    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters]);

  // useEffect(() => {
  //   console.log("Word to Guess:", wordToGuess);
  //   console.log("Guessed Letters:", guessedLetters);
  //   console.log("Number of Incorrect Guesses:", incorrectGuess);
  // }, [wordToGuess, guessedLetters, incorrectGuess]);

  return (
    <div className='w-full h-screen bg-slate-200 flex flex-col mx-0 my-auto items-center'>
      <div className='w-full h-14 text-3xl bg-slate-800 text-white flex justify-center items-center font-bold'>
        <h1>Hangman Game</h1>
      </div>
      <div className={`${isWinner ? "text-green-600" : "text-red-600"} text-3xl text-center font-bold my-3`}>
        {isWinner && "You Got It! Click Enter or Refresh to Try Again!"}
        {isLoser && "Nice Try! Click Enter or Refresh to Try Again!"}
      </div>
      <HangManDrawing numberofGuesses={incorrectGuess.length} />
      <HangManWordGuess
        guessedLetters={guessedLetters}
        wordToGuess={wordToGuess}
        reveal={isLoser}
      />
      <div className='self-stretch'>
        <HangManKeyboard
          activeLetters={guessedLetters.filter(letter => wordToGuess.includes(letter))}
          inactiveLetters={incorrectGuess}
          addGuessedLetters={addGuessedLetter}
          disabled={isWinner || isLoser}
        />
      </div>
    </div>
  );
};

export default App;