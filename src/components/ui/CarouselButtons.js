import React from 'react';
import { FaArrowLeft, FaArrowRight, FaFastForward } from 'react-icons/fa';
import PropTypes from 'prop-types';

const CarouselButtons = ({ goToPreviousCards, goToNextCards, goFastForward }) => (
    <div>
        <div className="absolute top-1/2 -translate-y-1/2 left-8">
            <button id="Left" className="text-3xl" onClick={goToPreviousCards}>
                <FaArrowLeft />
            </button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-8">
            <button id="right" className="text-3xl" onClick={goToNextCards}>
                <FaArrowRight />
            </button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-28">
            <button id="fastForward" className="text-3xl" onClick={goFastForward}>
                <FaFastForward />
            </button>
        </div>
    </div>
);

CarouselButtons.propTypes = {
    goToPreviousCards: PropTypes.func.isRequired,
    goToNextCards: PropTypes.func.isRequired,
    goFastForward: PropTypes.func.isRequired,
};

export default CarouselButtons;
