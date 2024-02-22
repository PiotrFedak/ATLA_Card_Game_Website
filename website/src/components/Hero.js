import React from 'react';

const Hero = () => {
    return (
        <div className='text-custom-dark dark:text-white'>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='text-[#FF5C00] font-bold p-1 md:text-2xl sm:text-1xl text-xl'>
                    Are you tired of hearthstone ?
                </p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
                    ATLA CARD GAME.
                </h1>
                <div className='flex justify-center items-center'>
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
                        Game inside the world of Avatar the last airbender
                    </p>
                </div>
                <p className='md:text-2xl text-xl font-bold text-gray-500'>both phone and desktop devices!</p>
                <button className='bg-[#FF5C00] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-custom-dark'>Get Started</button>
            </div>
        </div>
    );
};

export default Hero;