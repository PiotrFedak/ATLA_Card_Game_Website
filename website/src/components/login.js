import React, { useRef } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AiFillFacebook } from 'react-icons/ai';
import axiosClient from '../axiosClient';

const Login = ({ toggleForm }) => {
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleLogin = async (e) => {
        e.preventDefault();
        const payload = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        };

        axiosClient.post('/login', payload)
            .then(({ data }) => {
                console.log(data);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    return (
        <form onSubmit={handleLogin} className='max-w-[400px] w-full mx-auto bg-white dark:bg-gray-800 dark:text-white p-8 rounded-3xl'>
            <h2 className='text-4xl font-bold text-center  py-4'>ATLA.</h2>
            <div className='flex justify-between py-8'>
                <p className='border shadow-lg hover:shadow-xl px-6 py-2 border-black dark:border-white relative flex items-center'><AiFillFacebook className='mr-2' />Facebook</p>
                <p className='border shadow-lg hover:shadow-xl px-6 py-2 border-black dark:border-white relative flex items-center'><FcGoogle className='mr-2' />Google</p>
            </div>
            <div className='flex flex-col mb-4 '>
                <label className=''>Email</label>
                <input className='border relative bg-gray-100 p-2 dark:text-black' type="email" ref={emailRef} required />
            </div>
            <div className='flex flex-col '>
                <label className=''>Password</label>
                <input className='border relative bg-gray-100 p-2 dark:text-black' type="password" ref={passwordRef} required />
            </div>
            <button type="submit" className='w-full py-3 mt-8 bg-oraange hover:bg-orange-800 relative text-white'>Sign In</button>
            <p className='flex items-center mt-2 '><input className='mr-2 ' type="checkbox" />Remember Me</p>
            <p className='text-center mt-8 '>
                Not a member? <button className="text-custom-brown font-semibold bg-transparent border-none" onClick={toggleForm}>Sign up now</button>
            </p>
        </form>
    );
};

export default Login;
