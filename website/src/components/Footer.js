import React from 'react';
import {
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-custom-dark dark:text-white'>
            <div>
                <h1 className='w-full text-5xl font-bold text-[#FF5C00]'>ATLA.</h1>
                <p className='py-4'>here there will be something about the game, the creators or copyrights behind it, something like that </p>
                <div className='flex justify-between md:w-[75%] my-6'>
                    <FaFacebookSquare size={30} />
                    <FaInstagram size={30} />
                    <FaTwitterSquare size={30} />
                    <FaGithubSquare size={30} />
                </div>
            </div>
            <div className='lg:col-span-2 flex justify-between mt-6'>
                <div>
                    <h6 className='font-medium text-phoneDark dark:text-phone'>Solutions</h6>
                    <ul>
                        <li className='py-2 text-sm'>I run out of ideas what to write here</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-phoneDark dark:text-phone'>Support</h6>
                    <ul>
                        <li className='py-2 text-sm'>Pricing</li>
                        <li className='py-2 text-sm'>Documentation</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-phoneDark dark:text-phone'>About us</h6>
                    <ul>
                        <li className='py-2 text-sm'>Team behind</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-phoneDark dark:text-phone'>Legal</h6>
                    <ul>
                        <li className='py-2 text-sm'>Terms of service</li>
                        <li className='py-2 text-sm'>Privacy Policy</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;