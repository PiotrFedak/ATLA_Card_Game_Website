import React, { useState } from 'react';
import Header from '../layouts/Header';
import Login from '../components/Login';
import Register from '../components/Register';
import backgroundImage from '../img/background.jpg';
import { useStateContext } from "../contexts/ContextProvider";

export default function Auth() {
    const [isLoginVisible, setIsLoginVisible] = useState(true);
    const { token } = useStateContext()
    const toggleForm = () => {
        setIsLoginVisible(!isLoginVisible);
    }

    if (token == 1) {
        console.log('działa')
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
