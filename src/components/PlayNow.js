import React from 'react'
import map from '../img/map.png';

const PlayNow = () => {
    return (
        <div className='w-full bg-white dark:bg-custom-black py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[500px] mx-auto my-4' src={map} alt='/' />
                <div className='flex flex-col justify-center'>
                    <p className='text-[#FF5C00] font-bold '>PLAY NOW</p>
                    <h1 className='md:text-5xl sm:text-3xl text-2xl font-bold py-2 text-custom-dark dark:text-white'>Explore the world of the avatar</h1>
                    <p className='text-custom-dark dark:text-white font-body'>
                        Immerse yourself in the world of the four elements and choose your side.
                        A fascinating journey awaits you through lands inspired by the cult series,
                        where each board is a world known from the screen, and each action card contains possibilities.
                    </p>
                    <ul className="steps steps-vertical lg:steps-horizontal py-16 px-4 dark:text-white">
                        <li className="step step-neutral">Downloand game</li>
                        <li className="step ">register an account either in the game or on the website</li>
                        <li className="step">Chose your character</li>
                        <li data-content="★" className="step">Play!</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};


export default PlayNow