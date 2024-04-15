import React, { useState } from 'react';
import { FaGear, } from 'react-icons/fa6';
import { FaUserCircle, } from 'react-icons/fa';
import { TbHelpHexagon } from "react-icons/tb";
import P1 from '../img/P1.jpg';
import P2 from '../img/P2.jpg';
import P3 from '../img/P3.jpg';
import P7 from '../img/P7.jpg';
import P5 from '../img/P5.jpg';
import P6 from '../img/P6.jpg';

const UserProfile = () => {
    const [username, setUsername] = useState("Username");
    const [email, setEmail] = useState("Email");
    const [password, setPassword] = useState("********");
    const [avatar, setAvatar] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [helpText, setHelpText] = useState("");

    const handleEdit = () => {
        setIsEditing(!isEditing);
    };

    const handleSave = () => {
        setIsEditing(false);
    };

    const toggleHelpText = () => {
        setHelpText(helpText ? "" : "click on the gear to edit your profile settings like Username, Password or set up new profile img");
    };

    const handleAvatarSelect = (avatarName) => {
        setAvatar(avatarName);
    };

    return (
        <div className="w-3/4 h-3/4 dark:bg-[#20354b] bg-slate-300 rounded-2xl px-8 shadow-lg mt-16">
            <section className="w-full mx-auto py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <TbHelpHexagon className="text-4xl cursor-pointer hover:text-oraange" onClick={toggleHelpText} />
                        {helpText && (
                            <span className="ml-2 dark:text-white text-lg">{helpText}</span>
                        )}
                    </div>
                    <button className="text-4xl hover:text-oraange" onClick={handleEdit}>
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
                                <label htmlFor="username" className="block font-bold text-lg">Username:</label>
                                <input
                                    type="text"
                                    id="username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="mt-1 border border-gray-400 text-custom-black rounded-md px-3 py-1 w-full"
                                />
                                <label htmlFor="email" className="block font-bold text-lg mt-4">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="mt-1 border border-gray-400 text-custom-black rounded-md px-3 py-1 w-full"
                                />
                                <label htmlFor="password" className="block font-bold text-lg mt-4">Password:</label>
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="mt-1 border border-gray-400 text-custom-black rounded-md px-3 py-1 w-full"
                                />
                            </div>
                            <button
                                onClick={handleSave}
                                className="mt-6 bg-oraange text-white px-4 py-2 rounded-md hover:scale-105 sm:mt-0"
                            >
                                Save
                            </button>
                        </>
                    ) : (
                        <>
                            <h2 className="font-bold tracking-wide sm:text-xl md:text-2xl">{username}</h2>
                            <h2 className="font-bold mt-5 w-fit mx-auto sm:text-xl md:text-2xl">{email}</h2>
                        </>
                    )}
                </div>
            </section>
        </div>
    );
};

export default UserProfile;