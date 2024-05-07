import React, { useState } from 'react';
import { FaGear, } from 'react-icons/fa6';
import { FaUserCircle, } from 'react-icons/fa';
import { TbHelpHexagon } from "react-icons/tb";
import axiosClient from '../axiosClient';
import { useEffect } from 'react';
import appa from '../img/appa.png';
import P1 from '../img/P1.jpg';
import P2 from '../img/P2.jpg';
import P3 from '../img/P3.jpg';
import P7 from '../img/P7.jpg';
import P5 from '../img/P5.jpg';
import P6 from '../img/P6.jpg';

const UserProfile = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("********");
    const [avatar, setAvatar] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [helpText, setHelpText] = useState("");
    const userId = document.cookie
        .split("; ")
        .find((row) => row.startsWith("user_id="))
        ?.split("=")[1];

    useEffect(() => {
        const storedAvatar = getCookie("avatar");

        if (storedAvatar) {
            setAvatar(storedAvatar);
        }

        axiosClient.get(`/user/${userId}`)
            .then(({ data }) => {
                setName(data.user.name);
                setEmail(data.user.email)
            },)
    }, []);


    const handleEdit = () => {
        setIsEditing(!isEditing);
    };

    const handleSave = async (e) => {
        e.preventDefault();
        const payload = {
            name: name,
            email: email,
            password: password,
            avatar: avatar
        };
        axiosClient.post('/update', payload)
            .then(response => {
                console.log('You changed your profile data:', response.data);
            })
            .catch(error => {
                console.error('error during changing your profile data:', error);
            });
        setIsEditing(false);
    };

    const toggleHelpText = () => {
        setHelpText(helpText ? "" : "click on the gear to edit your profile settings like Username, Password or set up new profile img");
    };

    const handleAvatarSelect = (avatarName) => {
        setAvatar(avatarName);
        setCookie("avatar", avatarName, 30);
    };


    const getCookie = (name) => {
        const decodedCookie = decodeURIComponent(document.cookie);
        const cookies = decodedCookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.indexOf(name) === 0) {
                return cookie.substring(name.length + 1);
            }
        }
        return "";
    }


    const setCookie = (name, value, days) => {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }

    return (
        <div className="w-3/4 h-3/4 dark:bg-[#20354b] bg-slate-300 rounded-2xl px-8 shadow-lg mt-16">
            <section className="w-full mx-auto py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <img src={appa} alt="Appa" className="hidden lg:block absolute right-[10em] top-1/2 -translate-y-1/2 -mt-[2em]" />
                        <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 -mt-[2em] w-[8em] overflow-hidden z-10 transform -rotate-180">
                            <div className="border-[30px] md:border-[36px] border-[#FF5C00] md:h-[46em] md:w-[46em] rounded-full"></div>
                        </div>

                        <TbHelpHexagon className="text-4xl cursor-pointer hover:text-oraange" onClick={toggleHelpText} />
                        {helpText && (
                            <span className="ml-2 dark:text-white text-lg">{helpText}</span>
                        )}
                    </div>
                    <button id="Gear" className="text-4xl hover:text-oraange" onClick={handleEdit}>
                        <FaGear />
                    </button>
                </div>
                <div className="w-fit mx-auto">
                    <div className="relative rounded-full overflow-hidden w-52 h-52 bg-gray-200">
                        {avatar ? (
                            <img
                                src={avatar}
                                alt="profile"
                                className="rounded-full w-full h-auto"
                            />
                        ) : (
                            <FaUserCircle className="w-52 h-52 rounded-full text-gray-500" />
                        )}
                        {avatar && (
                            <div className="absolute top-0 left-0 w-full h-full"></div>
                        )}
                    </div>
                </div>
                <div className="mt-10 w-fit mx-auto xl:mt-2 lg:mt-2 md:mt-0">
                    {isEditing ? (
                        <>
                            <label className='block font-bold text-lg text-left'>Profile Pictures:</label>
                            <div className="flex justify-items-center space-x-6">
                                <img
                                    src={P1}
                                    alt="Avatar 1"
                                    className={`w-16 h-16 rounded-full cursor-pointer transform hover:scale-125 transition duration-300 ${avatar === P1 ? 'border-2 border-oraange' : ''}`}
                                    onClick={() => handleAvatarSelect(P1)}
                                />
                                <img
                                    src={P2}
                                    alt="Avatar 2"
                                    className={`w-16 h-16 rounded-full cursor-pointer transform hover:scale-125 transition duration-300 ${avatar === P2 ? 'border-2 border-oraange' : ''}`}
                                    onClick={() => handleAvatarSelect(P2)}
                                />
                                <img
                                    src={P3}
                                    alt="Avatar 3"
                                    className={`w-16 h-16 rounded-full cursor-pointer transform hover:scale-125 transition duration-300 ${avatar === P3 ? 'border-2 border-oraange' : ''}`}
                                    onClick={() => handleAvatarSelect(P3)}
                                />
                                <img
                                    src={P7}
                                    alt="Avatar 4"
                                    className={`w-16 h-16 rounded-full cursor-pointer transform hover:scale-125 transition duration-300 ${avatar === P7 ? 'border-2 border-oraange' : ''}`}
                                    onClick={() => handleAvatarSelect(P7)}
                                />
                                <img
                                    src={P5}
                                    alt="Avatar 5"
                                    className={`w-16 h-16 rounded-full cursor-pointer transform hover:scale-125 transition duration-300 ${avatar === P5 ? 'border-2 border-oraange' : ''}`}
                                    onClick={() => handleAvatarSelect(P5)}
                                />
                                <img
                                    src={P6}
                                    alt="Avatar 6"
                                    className={`w-16 h-16 rounded-full cursor-pointer transform hover:scale-125 transition duration-300 ${avatar === P6 ? 'border-2 border-oraange' : ''}`}
                                    onClick={() => handleAvatarSelect(P6)}
                                />

                            </div>
                            <div className="w-full mb-4 mt-6">
                                <label htmlFor="name" className="block font-bold text-lg">Username:</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(e) => {
                                        setName(e.target.value);
                                        setCookie("name", e.target.value, 30);
                                    }}
                                    className="mt-1 border border-gray-400 text-white rounded-md px-3 py-1 w-full"
                                />
                                <label htmlFor="email" className="block font-bold text-lg mt-4">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        setCookie("email", e.target.value, 30);
                                    }}
                                    className="mt-1 border border-gray-400 text-white rounded-md px-3 py-1 w-full"
                                    required
                                />
                                <label htmlFor="password" className="block font-bold text-lg mt-4">Password:</label>
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="mt-1 border border-gray-400 text-white rounded-md px-3 py-1 w-full"
                                    required
                                />
                            </div>
                            <button
                                id='saveProfile'
                                onClick={handleSave}
                                className="mt-6 bg-oraange text-white px-4 py-2 rounded-md hover:scale-105 sm:mt-0"
                            >
                                Save
                            </button>
                        </>
                    ) : (
                        <>
                            <h2 className="font-bold tracking-wide sm:text-xl md:text-2xl">{name}</h2>
                            <h2 className="font-bold mt-5 w-fit mx-auto sm:text-xl md:text-2xl">{email}</h2>
                        </>
                    )}
                </div>
            </section>
        </div>
    );
};

export default UserProfile;