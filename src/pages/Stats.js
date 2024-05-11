import React from 'react'
import Navbar from '../layouts/Navbar';
import WinRatio from '../components/WinRatio';
import Block from '../layouts/Block';
const Stats = () => {
    return (
        <div className='w-full h-screen bg-white dark:bg-custom-black relative overflow-hidden'>
            <Navbar />
            <Block />
            <WinRatio />
        </div>
    );
};

export default Stats;