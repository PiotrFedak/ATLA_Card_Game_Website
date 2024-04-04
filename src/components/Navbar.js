import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Switcher from "../Switcher";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className="border-b-[2px] border-oraange bg-white dark:bg-custom-black min-h-[114px] max-sm:min-h-[89px] fixed top-0 left-0 w-full z-50 rounded-b-2xl ">
            <div className='flex justify-between items-center h-28 max-w-[1240px] mx-auto px-4 text-custom-dark dark:text-white'>
                <Link to="/" className='w-full text-5xl font-bold text-[#FF5C00] hover:scale-105 transition-all duration-300'>ATLA.</Link>
                <ul className='hidden md:flex h-14'>
                    <li className='p-4 transition-all duration-300 ease-in-out hover:scale-110 text-xl'>
                        <Link to="/Profile">Profile</Link>
                    </li>
                    <li className='p-4 transition-all duration-300 ease-in-out hover:scale-110 text-xl'>
                        <Link to="/Stats">Stats</Link>
                    </li>
                    <li className='p-4 transition-all duration-300 ease-in-out hover:scale-110 text-xl'>
                        <Link to="/">Home</Link></li>
                    <div className="p-4">
                        <Switcher />
                    </div>
                </ul>
                <div onClick={handleNav} className='block md:hidden'>
                    {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
                </div>
                <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900  bg-hamburger dark:bg-nav-black ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
                    <h1 className='w-full text-3xl font-bold text-[#FF5C00] m-4'>ATLA.</h1>
                    <li className='p-4 border-b border-gray-600'>
                        <Link to="/Profile">Profile</Link>
                    </li>
                    <li className='p-4 border-b border-gray-600'>
                        <Link to="/Stats">Stats</Link>
                    </li>
                    <li className='p-4 border-b border-gray-600'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='p-4'><Switcher /></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
