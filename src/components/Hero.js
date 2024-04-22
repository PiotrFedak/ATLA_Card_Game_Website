import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div id="about" className="items-center h-screen">
            <div className='text-custom-dark dark:text-white'>
                <div className='max-w-[800px] mt-[-42px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                    <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className='text-[#FF5C00] font-bold p-1 md:text-2xl sm:text-1xl text-xl '
                    >
                        Are you tired of Hearthstone?
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 bg-gradient-to-r dark:from-phone dark:to-[#FF5C00] bg-clip-text text-transparent from-phoneDark to-neutral-500'
                    >
                        ATLA CARD GAME.
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.9 }}
                        className='flex justify-center items-center'
                    >
                        <p className='md:text-5xl sm:text-4xl text-xl font-bold py-8'>
                            Game inside the World of Avatar The Last Airbender
                        </p>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.1 }}
                        className='md:text-2xl text-xl font-bold text-phoneDark dark:text-phone'
                    >
                        Available on both mobile and desktop devices!
                    </motion.p>
                    <div className="flex justify-center">
                        <motion.a
                            data-testid='button-test'
                            href="/AtlaTheGame.rar"
                            download
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1.3 }}
                            className='bg-[#FF5C00] w-[200px] rounded-md font-medium my-6 mx-2 py-3 text-white text-2xl'
                            style={{ flexGrow: 1 }}
                        >
                            Download for Desktop
                        </motion.a>
                        <motion.a
                            href=""
                            download
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1.3 }}
                            className='bg-[#FF5C00] w-[200px] rounded-md font-medium my-6 mx-2 py-3 text-white text-2xl'
                            style={{ flexGrow: 1 }}
                        >
                            Download for Mobile
                        </motion.a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
