import React from 'react'

const Keys: string[] = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
]

const HangManKeyboard = () => {
    return (
        <div className='grid grid-cols-[repeat(auto-fit,minmax(75px,1fr))] gap-4'>
            {Keys.map((letter, index) => (
                <button key={index}>{letter}</button>
            ))}
        </div>
    )
}

export default HangManKeyboard
