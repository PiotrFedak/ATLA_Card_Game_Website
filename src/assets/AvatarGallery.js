import React from 'react';
import PropTypes from 'prop-types';
import P1 from '../img/P1.jpg';
import P2 from '../img/P2.jpg';
import P3 from '../img/P3.jpg';
import P7 from '../img/P7.jpg';
import P5 from '../img/P5.jpg';
import P6 from '../img/P6.jpg';

const AvatarGallery = ({ handleAvatarSelect, avatar }) => {
    return (
        <div className="block font-bold text-lg text-left">
            <label>Profile Pictures:</label>
            <div className="flex justify-items-center space-x-6">
                <img
                    src={P1}
                    alt="Avatar 1"
                    className={`w-16 h-16 rounded-full cursor-pointer transform hover:scale-125 transition duration-300 ${avatar === P1 ? 'border-2 border-oraange' : ''}`}
                    onClick={() => handleAvatarSelect(P1)}
                />
                <img
                    src={P2}
                    alt="Avatar 2"
                    className={`w-16 h-16 rounded-full cursor-pointer transform hover:scale-125 transition duration-300 ${avatar === P2 ? 'border-2 border-oraange' : ''}`}
                    onClick={() => handleAvatarSelect(P2)}
                />
                <img
                    src={P3}
                    alt="Avatar 3"
                    className={`w-16 h-16 rounded-full cursor-pointer transform hover:scale-125 transition duration-300 ${avatar === P3 ? 'border-2 border-oraange' : ''}`}
                    onClick={() => handleAvatarSelect(P3)}
                />
                <img
                    src={P7}
                    alt="Avatar 4"
                    className={`w-16 h-16 rounded-full cursor-pointer transform hover:scale-125 transition duration-300 ${avatar === P7 ? 'border-2 border-oraange' : ''}`}
                    onClick={() => handleAvatarSelect(P7)}
                />
                <img
                    src={P5}
                    alt="Avatar 5"
                    className={`w-16 h-16 rounded-full cursor-pointer transform hover:scale-125 transition duration-300 ${avatar === P5 ? 'border-2 border-oraange' : ''}`}
                    onClick={() => handleAvatarSelect(P5)}
                />
                <img
                    src={P6}
                    alt="Avatar 6"
                    className={`w-16 h-16 rounded-full cursor-pointer transform hover:scale-125 transition duration-300 ${avatar === P6 ? 'border-2 border-oraange' : ''}`}
                    onClick={() => handleAvatarSelect(P6)}
                />
            </div>
        </div>
    );
};

AvatarGallery.propTypes = {
    handleAvatarSelect: PropTypes.func.isRequired,
    avatar: PropTypes.string
};

export default AvatarGallery;