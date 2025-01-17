import React from 'react';

const Keys: string[] = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

type HangManKeyboardProps = {
    activeLetters?: string[];
    inactiveLetters?: string[];
    addGuessedLetters: (letter: string) => void;
    disabled?: boolean;
};

const HangManKeyboard = ({ activeLetters = [], inactiveLetters = [], addGuessedLetters, disabled = false }: HangManKeyboardProps) => {
    return (
        <div className='grid grid-cols-[repeat(auto-fit,minmax(50px,1fr))] gap-4 m-4'>
            {Keys.map((letter) => {
                const isActive = activeLetters.includes(letter);
                const isInactive = inactiveLetters.includes(letter);
                return (
                    <button
                        key={letter}
                        onClick={() => {
                            if (!isActive && !isInactive) {
                                addGuessedLetters(letter);
                            }
                        }}
                        disabled={isActive || isInactive || disabled}
                        className={`${isActive ? "bg-slate-700 text-white" : ""}
                                    ${isInactive ? "opacity-30" : ""}
                                    aspect-square border-2 border-black bg-slate-300 hover:bg-slate-400 focus:bg-slate-500 drop-shadow-md hover:drop-shadow-xl uppercase font-bold text-3xl select-none`}
                    >
                        {letter}
                    </button>
                );
            })}
        </div>
    );
};

export default HangManKeyboard;