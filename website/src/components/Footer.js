import React from 'react'
import Logo from '../img/Logo.png';

const Footer = () => {
    return (
        <div className="bg-footer border-t-[4px] border-oraange py-4 text-center fixed bottom-0 left-0 w-full">
            <img src={Logo}
                alt="Logo"
                className="absolute rounded-xl max-w-full h-auto max-h-[100px] sm:max-w-[320px] sm:max-h-[200px] left-1/2 transform -translate-x-1/2 -translate-y-full" />
            <div className='text-white'>
                Footer
            </div>
        </div>
    )
}

export default Footer