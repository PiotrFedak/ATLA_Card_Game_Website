import React, { useState } from 'react';
import Header from '../components/Header';
import Login from '../components/login';
import Register from '../components/register';
import backgroundImage from '../img/background.jpg';

export default function Auth() {
    const [isLoginVisible, setIsLoginVisible] = useState(true);

    const toggleForm = () => {
        setIsLoginVisible(!isLoginVisible);
    }

    return (
        <div className='relative w-full h-screen dark:bg-zinc-900/90'>
            <Header />
            <div
                className='absolute inset-0 z-0 bg-cover bg-center'
                style={{ backgroundImage: `url(${backgroundImage})`, opacity: 0.8 }}
            ></div>
            <div className='flex justify-center items-center h-full relative z-10'>
                {isLoginVisible ? <Login toggleForm={toggleForm} /> : <Register toggleForm={toggleForm} />}
            </div>
        </div>
    )
}
