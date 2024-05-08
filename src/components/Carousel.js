import React, { useState, useRef } from 'react';
import { characters } from '../assets/charactersData';
import CharacterIterator from './CharacterIterator';
import CarouselButtons from './ui/CarouselButtons';


const Carousel = () => {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const characterIterator = useRef(new CharacterIterator(characters));

    const goToNextCards = () => {
        characterIterator.current.next();
        setCurrentCardIndex(characterIterator.current.currentIndex);
    };

    const goToPreviousCards = () => {
        characterIterator.current.previous();
        setCurrentCardIndex(characterIterator.current.currentIndex);
    };

    const goFastForward = () => {
        characterIterator.current.currentIndex += 5;
        setCurrentCardIndex(characterIterator.current.currentIndex);

        if (characterIterator.current.currentIndex >= characterIterator.current.characters.length) {
            characterIterator.current.currentIndex = 0;
            setCurrentCardIndex(0);
        }
    };

    return (
        <div id="carousel" className="w-full py-[10rem] px-4 bg-white dark:bg-custom-black text-custom-dark dark:text-white relative">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 relative">
                {characterIterator.current.slice(currentCardIndex, currentCardIndex + 3).map(
                    (character, index) => (
                        <div
                            key={index}
                            className={`w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 border border-oraange ${character.isNew ? "relative" : ""
                                }`}
                        >
                            <div className="image-container">
                                <img
                                    className="w-220 mx-auto mt-[-3rem] object-contain h-96 w-96"
                                    src={character.image}
                                    alt={character.name}
                                />
                            </div>
                            <h2
                                className={`text-2xl font-bold text-center text-${character.color}-500 py-8`}
                            >
                                {character.name}
                            </h2>
                            <p className={`text-center text-4xl font-bold text-${character.color}-500`}>
                                {character.type}
                            </p>
                            <div className="text-center font-medium">
                                {character.abilities.map((ability, index) => (
                                    <p key={index} className="py-2 pt-8 border-b mx-8">
                                        {ability}
                                    </p>
                                ))}
                            </div>
                            {character.isNew && (
                                <div className="absolute top-0 right-0">
                                    <div className="indicator">
                                        <span className="indicator-item badge badge-primary">new</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    )
                )}
            </div>
            <CarouselButtons
                goToPreviousCards={goToPreviousCards}
                goToNextCards={goToNextCards}
                goFastForward={goFastForward}
            />
        </div>

    );
};

export default Carousel;