import React, { useState } from 'react';
import axios from 'axios';

const Register = ({ toggleForm }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/register', {
                username,
                email,
                password,
                confirmPassword
            });
            console.log(response.data);
        } catch (error) {
            console.error('Error during registration:', error.response.data);
        }
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
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className='flex flex-col mb-4'>
                <label>Email</label>
                <input
                    className='border relative dark:text-black bg-gray-100 p-2'
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className='flex flex-col mb-4'>
                <label>Password</label>
                <input
                    className='border relative dark:text-black bg-gray-100 p-2'
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className='flex flex-col mb-4'>
                <label>Confirm Password</label>
                <input
                    className='border relative dark:text-black bg-gray-100 p-2'
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </div>
            <button type="submit" className='w-full py-3 mt-8 bg-oraange hover:bg-orange-800 relative text-white'>Sign Up</button>
            <p className='flex items-center mt-2'><input className='mr-2' type="checkbox" />Remember Me</p>
            <p className='text-center mt-8'>Already have an account? <button className="text-custom-brown font-semibold bg-transparent border-none" onClick={toggleForm}>Sign in here</button></p>
        </form>
    );
}

export default Register;
