import React from 'react';
import PropTypes from 'prop-types';

const Slide = ({ currentIndex, images }) => {
    return (
        <div
            style={{ backgroundImage: `url(${images[currentIndex]})` }}
            className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
        ></div>
    );
};

Slide.propTypes = {
    currentIndex: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Slide;