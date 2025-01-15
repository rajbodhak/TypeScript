import React from 'react';

const HEAD = (
    <div className='h-10 w-10 rounded-full border-6 border-solid border-black absolute top-10 right-[-16px]'>
    </div>
);

const BODY = (
    <div className='h-16 w-2 absolute bg-black top-20 right-0'></div>
);

const LEFT_ARM = (
    <div className='h-2 w-10 bg-black right-2 top-24 absolute rotate-[30deg] origin-bottom-right'></div>
);

const RIGHT_ARM = (
    <div className='h-2 w-10 bg-black right-[-40px] top-24 absolute rotate-[-30deg] origin-bottom-left'></div>
);

const LEFT_LEG = (
    <div className='h-2 w-12 bg-black right-0 top-[136px] absolute rotate-[-60deg] origin-bottom-right'></div>
);

const RIGHT_LEG = (
    <div className='h-2 w-12 bg-black right-[-40px] top-[136px] absolute rotate-[60deg] origin-bottom-left'></div>
);

const HangManDrawing = () => {
    return (
        <div className='relative scale-75'>
            {HEAD}
            {BODY}
            {LEFT_ARM}
            {RIGHT_ARM}
            {LEFT_LEG}
            {RIGHT_LEG}
            <div className='h-10 w-2 bg-black absolute right-0 top-0'></div>
            <div className='h-2 w-44 bg-black ml-28'></div>
            <div className='w-2 h-80 bg-black ml-28'></div>
            <div className='w-60 h-2 bg-black'></div>

        </div>
    );
};

export default HangManDrawing;
