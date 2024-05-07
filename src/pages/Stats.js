import React from 'react'
import Navbar from '../components/Navbar';
import WinRatio from '../components/WinRatio';
const Stats = () => {
    return (
        <div className='w-full h-screen bg-white dark:bg-custom-black relative overflow-hidden'>
            <Navbar />
            <WinRatio />
        </div>
    );
};

export default Stats;