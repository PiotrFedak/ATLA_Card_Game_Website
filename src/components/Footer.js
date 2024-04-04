import React from 'react';
import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { FaFacebookSquare, FaGithubSquare, FaInstagram, FaTwitterSquare, FaArrowUp } from 'react-icons/fa';
import { IoMdCloseCircle } from "react-icons/io";

const Footer = () => {
    const [showButton, setShowButton] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleScroll = () => {
        if (window.pageYOffset > 300) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='max-w-[1240px] border-t-2 mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-custom-dark dark:text-white '>
            <div>
                <h1 className='w-full text-5xl font-bold text-[#FF5C00]'>ATLA.</h1>
                <p className='py-4'>A student project aimed at creating a card game, in the world of avatar the last airbender</p>
                <div className='flex justify-between md:w-[75%] my-6'>
                    <FaFacebookSquare size={30} />
                    <FaInstagram size={30} />
                    <FaTwitterSquare size={30} />
                    <FaGithubSquare size={30} />
                </div>
            </div>
            <div className='lg:col-span-2 flex justify-between mt-6'>

                <div>
                    <h6 className='font-medium text-phoneDark dark:text-phone'>Support</h6>
                    <ul>
                        <li className='py-2 text-sm'>Documentation</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-phoneDark dark:text-phone'>About us</h6>
                    <ul>
                        <li className='py-2 text-sm'><a href="https://github.com/PiotrFedak" target="_blank" rel="noopener noreferrer" className="hover:bg-[#FF5C00] rounded">Piotr Fedak</a></li>
                        <li className='py-2 text-sm'><a href="https://github.com/KacperWojdak" target="_blank" rel="noopener noreferrer" className="hover:bg-[#FF5C00] rounded">Kacper Wojdak</a></li>
                        <li className='py-2 text-sm'><a href="https://github.com/AndrzejBudzyn" target="_blank" rel="noopener noreferrer" className="hover:bg-[#FF5C00] rounded">Andrzej Budzyń</a></li>
                        <li className='py-2 text-sm'><a href="https://github.com/maciek12323" target="_blank" rel="noopener noreferrer" className="hover:bg-[#FF5C00] rounded">Maciek Żołnierczyk</a></li>
                    </ul>
                </div>


                <div>
                    <h6 className='font-medium text-phoneDark dark:text-phone'>Legal</h6>
                    <ul>
                        <li className='py-2 text-sm'><a href="#" onClick={openModal} className="hover:bg-[#FF5C00] rounded">Terms of service</a></li>
                        <li className='py-2 text-sm'><a href="#" onClick={openModal} className="hover:bg-[#FF5C00] rounded">Privacy Policy</a></li>
                    </ul>

                </div>
            </div>
            {showButton && (
                <button
                    className='fixed bottom-8 right-8 bg-[#FF5C00] text-white p-4 rounded-full shadow-lg focus:outline-none hover:scale-110 transition-all'
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    <FaArrowUp size={24} />
                </button>
            )}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#8c76da] p-6 rounded-md w-11/12 md:w-2/3 lg:w-2/6 h-5/6"
                overlayClassName="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50"
            >
                <IoMdCloseCircle size={32} className="absolute top-4 right-4 text-red-600" onClick={closeModal} />
                <h2 className='text-phoneDark dark:text-phone mt-1 mb-6'>Terms of Service</h2>
                <p className='text-custom-dark dark:text-white'>MIT License<br></br>
                    Copyright (c) 2024 ATLA Card Game<br></br>
                    Permission is hereby granted, free of charge, to any person obtaining a copy
                    of this software and associated documentation files (the &quot;Software&quot;), to deal
                    in the Software without restriction, including without limitation the rights
                    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                    copies of the Software, and to permit persons to whom the Software is
                    furnished to do so, subject to the following conditions:<br></br>
                    The above copyright notice and this permission notice shall be included in all
                    copies or substantial portions of the Software.<br></br>
                    THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                    SOFTWARE.</p>
            </Modal>
        </div>
    );
};

export default Footer;
