import React from 'react';
import PropTypes from 'prop-types';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

const SlideNavigation = ({ prevSlide, nextSlide }) => {
    return (
        <>
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
        </>
    );
};

SlideNavigation.propTypes = {
    prevSlide: PropTypes.func.isRequired,
    nextSlide: PropTypes.func.isRequired,
};

export default SlideNavigation;