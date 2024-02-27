import React from 'react';

const Newsletter = () => {
    return (
        <div className='w-full py-16 text-custom-dark dark:text-white px-4'>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
                <div className='lg:col-span-2 my-4'>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
                        Want to check out our latest changes in game?
                    </h1>
                    <p>Sign up to our newsletter and stay up to date.</p>
                </div>
                <div className='my-4'>
                    <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                        <input
                            className='p-3 flex w-full rounded-md dark:bg-white bg-gray-300 text-slate-950'
                            type='email'
                            placeholder='Enter Email'
                        />
                        <button className='bg-[#FF5C00] rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>
                            Notify Me
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;