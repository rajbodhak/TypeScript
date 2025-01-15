import React from 'react'

const HangManWordGuess = () => {
    const word: string = "Hello"
    let guessedLetters: string[] = [];
    return (
        <div className='flex gap-2 text-6xl font-bold uppercase'>
            {word.split("").map((letter, index) => (
                <span className='border-b-6 border-solid border-black'>
                    <span key={index} className={`${guessedLetters.includes(letter) ? "visible" : "invisible"}`}>{letter}</span>
                </span>
            ))}
        </div>
    )
}

export default HangManWordGuess
