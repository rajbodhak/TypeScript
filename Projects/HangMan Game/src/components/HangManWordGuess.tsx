import React from 'react'

type HangManWordGuessProps = {
    guessedLetters: string[];
    wordToGuess: string;
    reveal?: boolean;
}

const HangManWordGuess = ({ guessedLetters, wordToGuess, reveal = false
}: HangManWordGuessProps) => {

    return (
        <div className='flex gap-2 text-6xl font-bold uppercase'>
            {wordToGuess.split("").map((letter, index) => (
                <span key={index} className=' border-b-6 border-solid border-black w-12'>
                    <span className={`${guessedLetters.includes(letter) || reveal ? "visible" : "invisible"} ${!guessedLetters.includes(letter) && reveal ? "text-red-600" : "text-black"}`}>{letter}</span>
                </span>
            ))
            }
        </div >
    )
}

export default HangManWordGuess
