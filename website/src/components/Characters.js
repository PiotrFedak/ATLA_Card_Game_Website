import React from 'react';
import Toph from '../img/Toph.png';
import q4 from '../img/q4.png';
import azula from '../img/azula.png';

const Characters = () => {
    return (
        <div className='w-full py-[10rem] px-4 bg-white dark:bg-custom-black text-custom-dark dark:text-white'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 border border-green-500'>
                    <img className='w-220 mx-auto mt-[-3rem]' src={Toph} alt="/" />
                    <h2 className='text-2xl font-bold text-center text-green-500 py-8'>Toph</h2>
                    <p className='text-center text-4xl font-bold'>EarthBender</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>DEF STRUCTURE</p>
                        <p className='py-2 border-b mx-8'>...</p>
                        <p className='py-2 border-b mx-8'>...</p>
                    </div>
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 border border-red-500 '>
                    <img className='w-220 mx-auto mt-[-3rem] ' src={azula} alt="/" />
                    <h2 className='text-2xl font-bold text-center text-red-500 py-8'>Azula</h2>
                    <p className='text-center text-4xl font-bold'>FireBender</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>BONUS CRIT CHANCE</p>
                        <p className='py-2 border-b mx-8'>Lighting Attack</p>
                        <p className='py-2 border-b mx-8'>...</p>
                    </div>

                </div>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 border border-blue-500'>
                    <img className='w-220 mx-auto mt-[-3rem] ' src={q4} alt="/" />
                    <h2 className='text-2xl font-bold text-center text-blue-500 py-8'>Katara</h2>
                    <p className='text-center text-4xl font-bold'>WaterBender</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>HEALS HERSELF EVERY ROUND</p>
                        <p className='py-2 border-b mx-8'>...</p>
                        <p className='py-2 border-b mx-8'>....</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Characters;