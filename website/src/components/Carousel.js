import React, { useState } from 'react';
import { characters } from './charactersData';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Carousel = () => {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);

    const goToNextCards = () => {
        setCurrentCardIndex((prevIndex) => (prevIndex + 3) % characters.length);
    };

    const goToPreviousCards = () => {
        setCurrentCardIndex((prevIndex) => (prevIndex - 3 + characters.length) % characters.length);
    };

    return (
        <div id="carousel" className='w-full py-[10rem] px-4 bg-white dark:bg-custom-black text-custom-dark dark:text-white relative'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 relative'>
                {characters.slice(currentCardIndex, currentCardIndex + 3).map((character, index) => (
                    <div key={index} className={`w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 border border-oraange`}>
                        <img className='w-220 mx-auto mt-[-3rem]' src={character.image} alt={character.name} />
                        <h2 className={`text-2xl font-bold text-center text-${character.color}-500 py-8`}>{character.name}</h2>
                        <p className='text-center text-4xl font-bold '>{character.type}</p>
                        <div className='text-center font-medium'>
                            {character.abilities.map((ability, index) => (
                                <p key={index} className='py-2 pt-8 border-b mx-8'>{ability}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 left-8">
                <button className="text-3xl" onClick={goToPreviousCards}><FaArrowLeft /></button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-8">
                <button className="text-3xl" onClick={goToNextCards}><FaArrowRight /></button>
            </div>
        </div>
    );
};

export default Carousel;
