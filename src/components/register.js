import React, { useRef } from 'react';
import axiosClient from '../axiosClient';
import PropTypes from 'prop-types';

const Register = ({ toggleForm }) => {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmationRef = useRef();


    const handleRegister = async (e) => {
        e.preventDefault();
        const payload = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: passwordConfirmationRef.current.value,
        };

        axiosClient.post('/register', payload)
            .then(({ data }) => {
                console.log(data);
            })
            .catch((err) => {
                console.error(err);
            });
    };


    return (
        <form onSubmit={handleRegister} className='max-w-[400px] w-full mx-auto bg-white dark:bg-gray-800 p-8 rounded-3xl dark:text-white'>
            <h2 className='text-4xl font-bold text-center py-4'>ATLA.</h2>
            <div className='flex justify-between py-8'>
            </div>
            <div className='flex flex-col mb-4 '>
                <label>Username</label>
                <input
                    className='border relative dark:text-black bg-gray-100 p-2'
                    type="text"
                    ref={nameRef}
                    required
                />
            </div>
            <div className='flex flex-col mb-4'>
                <label>Email</label>
                <input
                    className='border relative dark:text-black bg-gray-100 p-2'
                    type="email"
                    ref={emailRef}
                    required
                />
            </div>
            <div className='flex flex-col mb-4'>
                <label>Password</label>
                <input
                    className='border relative dark:text-black bg-gray-100 p-2'
                    type="password"
                    ref={passwordRef}
                    required
                />
            </div>
            <div className='flex flex-col mb-4'>
                <label>Confirm Password</label>
                <input
                    className='border relative dark:text-black bg-gray-100 p-2'
                    type="password"
                    ref={passwordConfirmationRef}
                    required
                />
            </div>
            <button type="submit" className='w-full py-3 mt-8 bg-oraange hover:bg-orange-800 relative text-white'>Sign Up</button>
            <p className='flex items-center mt-2'><input className='mr-2' type="checkbox" />Remember Me</p>
            <p className='text-center mt-8'>Already have an account? <button className="text-custom-brown font-semibold bg-transparent border-none" onClick={toggleForm}>Sign in here</button></p>
        </form>
    );
};

Register.propTypes = {
    toggleForm: PropTypes.func.isRequired,
};

export default Register;
