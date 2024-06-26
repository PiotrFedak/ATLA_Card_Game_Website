import React, { useRef } from 'react';
import axiosClient from '../lib/axiosClient';
import PropTypes from 'prop-types';
import { useStateContext } from "../contexts/ContextProvider";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from './ui/Notify';

const Register = ({ toggleForm }) => {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const { setUser, setToken } = useStateContext();

    const handleRegister = async (e) => {
        e.preventDefault();
        const payload = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
        };

        axiosClient.post('/register', payload)
            .then(({ data }) => {
                setUser(data.user);
                setToken(data.token);
                const userId = data.user.id;
                document.cookie = `user_id=${userId}; path=/;`;
            })
            .catch((err) => {
                console.error(err);
                notify('Register failed', 'error');
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
                    id="name"
                    ref={nameRef}
                    required
                />
            </div>
            <div className='flex flex-col mb-4'>
                <label>Email</label>
                <input
                    className='border relative dark:text-black bg-gray-100 p-2'
                    type="email"
                    id="email"
                    ref={emailRef}
                    required
                />
            </div>
            <div className='flex flex-col mb-4'>
                <label>Password</label>
                <input
                    className='border relative dark:text-black bg-gray-100 p-2'
                    type="password"
                    id="password"
                    ref={passwordRef}
                    required
                />
            </div>
            <button type="submit" className='w-full py-3 mt-8 bg-oraange hover:bg-orange-800 relative text-white'>Sign Up</button>
            <p className='flex items-center mt-2'><input className='mr-2' type="checkbox" />Remember Me</p>
            <p className='text-center mt-8'>Already have an account? <button className="text-custom-brown font-semibold bg-transparent border-none" onClick={toggleForm}>Sign in here</button></p>
            <ToastContainer />
        </form>
    );
};

Register.propTypes = {
    toggleForm: PropTypes.func.isRequired,
};

export default Register;
