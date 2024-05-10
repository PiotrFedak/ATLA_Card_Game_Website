import React, { useState } from 'react';
import { RxDotFilled } from 'react-icons/rx';
import { images } from '../assets/images';
import Slide from './Slide';
import SlideNavigation from './SlideNavigation';

function Screens() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <div>
            <p className='md:text-5xl sm:text-4xl text-xl font-bold py-8 text-center bg-gradient-to-r dark:from-phone dark:to-[#FF5C00] bg-clip-text text-transparent from-phoneDark to-neutral-500'>
                Screenshots from game
            </p>
            <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
                <Slide currentIndex={currentIndex} images={images} />
                <SlideNavigation
                    prevSlide={prevSlide}
                    nextSlide={nextSlide}
                />
                <div className='flex top-4 justify-center py-2'>
                    {images.map((slideIndex) => (
                        <div
                            key={slideIndex}
                            onClick={() => goToSlide(slideIndex)}
                            className='text-2xl cursor-pointer'
                        >
                            <RxDotFilled />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Screens;
