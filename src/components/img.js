import React from 'react';
import { useMediaQuery } from '@react-hook/media-query';
import aang from '../img/aang.png';
import appa from '../img/appa.png';

const Img = () => {
    const isMobile = useMediaQuery('(max-width: 1550px)');

    if (isMobile) {
        return null;
    }

    return (
        <>
            <img
                src={aang}
                alt="Aang"
                className="absolute max-w-full h-auto max-h-[100px] sm:max-w-[320px] sm:max-h-[200px] left-[75%] top-[35%] transform -translate-x-1/2 -translate-y-1/2"
                style={{ transform: 'scale(2)' }}
            />
            <img
                src={appa}
                alt="Appa"
                className="absolute max-w-full h-auto max-h-[100px] sm:max-w-[320px] sm:max-h-[200px] right-[75%] top-[35%] transform -translate-x-1/2 -translate-y-1/2"
                style={{ transform: 'scale(3)' }}
            />
        </>
    );
}

export default Img;
