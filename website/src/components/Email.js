import React from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Email = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, {
                publicKey: process.env.REACT_APP_EMAILJS_USER_ID,
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                }
            );
        e.target.reset();
    };

    return (
        <section className="h-screen flex justify-center items-center text-custom-dark dark:text-white font-body">
            <div className='container max-w-[1240px]'>
                <h2 className='text-center mb-6 md:text-5xl sm:text-4xl text-3xl font-bold py-2'>Contact us</h2>
                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className='flex flex-col gap-4 justify-between w-full p-3 shadow-sm sm:text-xl md:text-2xl'>

                    <div>
                        <label htmlFor="subject" className="block font-medium text-gray-900 dark:text-gray-300">Name</label>
                        <input type='text'
                            className='block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                            placeholder='Full Name'
                            name='user_name' required />
                    </div>
                    <div>
                        <label htmlFor="email" className="block font-medium text-gray-900 dark:text-gray-300">Your email</label>
                        <input type='email'
                            className='block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                            placeholder='Email@gmail.com'
                            name='user_email' required />
                    </div>

                    <div>
                        <label htmlFor="subject" className="block font-medium text-gray-900 dark:text-gray-300">Subject</label>
                        <input type='text'
                            className='border p-2 border-gray-300 block w-full  text-gray-900 bg-gray-50 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
                            placeholder='Let us know what is the problem'
                            name='subject' required />
                    </div>

                    <textarea name='message' cols='30'
                        rows='10'
                        placeholder='Message'
                        className="block p-2.5 mt-4 text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                    </textarea>
                    <div className='flex justify-center items-center pt-1'>
                        <button type='submit' className='bg-[#FF5C00] text-white py-2 px-4 rounded-lg w-[280px]  transform hover:scale-105 transition-all duration-300'>
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Email;
