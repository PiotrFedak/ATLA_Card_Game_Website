import React, { useState, useEffect } from 'react';
import { IoMdDownload } from "react-icons/io";

const DownloadButton = () => {
    const [showButton, setShowButton] = useState(false);

    const handleScroll = () => {
        if (window.pageYOffset > 600) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {showButton && (
                <a href="https://drive.google.com/uc?export=download&id=1H5wCAo5o-4eZQRCL5L1gqeQt3ZBwjd1Z" download>
                    <button
                        className='fixed top-8 right-8 bg-[#FF5C00] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all'
                        id="DownloadApp"
                    >
                        <IoMdDownload size={24} />
                    </button>
                </a>
            )}
        </>
    );
};

export default DownloadButton;
