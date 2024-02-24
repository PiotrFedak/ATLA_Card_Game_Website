import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div className=" items-center h-screen" >
            <div className='text-custom-dark dark:text-white '>
                <div className='max-w-[800px] mt-[-42px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                    <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className='text-[#FF5C00] font-bold p-1 md:text-2xl sm:text-1xl text-xl'
                    >
                        Are you tired of hearthstone ?
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'
                    >
                        ATLA CARD GAME.
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.9 }}
                        className='flex justify-center items-center'
                    >
                        <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
                            Game inside the world of Avatar the last airbender
                        </p>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.1 }}
                        className='md:text-2xl text-xl font-bold text-phoneDark dark:text-phone'
                    >
                        both phone and desktop devices!
                    </motion.p>
                    <motion.button
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.3 }}
                        className='bg-[#FF5C00] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-custom-dark'
                    >
                        Get Started
                    </motion.button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
