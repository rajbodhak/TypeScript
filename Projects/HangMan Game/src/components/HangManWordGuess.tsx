import React from 'react'

type HangManWordGuessProps = {
    guessedLetters: string[];
    wordToGuess: string;
}

const HangManWordGuess = ({ guessedLetters, wordToGuess
}: HangManWordGuessProps) => {

    return (
        <div className='flex gap-2 text-6xl font-bold uppercase'>
            {wordToGuess.split("").map((letter, index) => (
                <span key={index} className='border-b-6 border-solid border-black'>
                    <span className={`${guessedLetters.includes(letter) ? "visible" : "invisible"}`}>{letter}</span>
                </span>
            ))}
        </div>
    )
}

export default HangManWordGuess
