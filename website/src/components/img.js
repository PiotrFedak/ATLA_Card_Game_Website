import React from 'react';
import { useMediaQuery } from '@react-hook/media-query';
import aang2 from '../img/aang2.png';

const Img = () => {
    const isMobile = useMediaQuery('(max-width: 1000px)');

    if (isMobile) {
        return null;
    }

    return (
        <div>
            <img
                src={aang2}
                alt="Logo"
                className="absolute rounded-xl max-w-full h-auto max-h-[100px] sm:max-w-[320px] sm:max-h-[200px] left-[70%] top-[40%] transform -translate-x-1/2 -translate-y-1/2"
                style={{ transform: 'scale(3)' }}
            />
        </div>
    );
}

export default Img;
