import React, { useState } from 'react';
import { FaGear, } from 'react-icons/fa6';
import { FaUserCircle, } from 'react-icons/fa';
import { TbHelpHexagon } from "react-icons/tb";

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

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setAvatar(reader.result);
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="w-3/4 h-3/4 dark:bg-[#20354b] bg-slate-300 rounded-2xl px-8 py-10 shadow-lg mt-14 absolute">
            <section className="w-full mx-auto px-8 py-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <TbHelpHexagon className="text-4xl ml-2 cursor-pointer hover:text-oraange" onClick={toggleHelpText} />
                        {helpText && (
                            <span className="ml-2 dark:text-white text-lg">{helpText}</span>
                        )}
                    </div>
                    <button className="text-4xl hover:text-oraange" onClick={handleEdit}>
                        <FaGear />
                    </button>
                </div>
                <div className="mt-6 w-fit mx-auto">
                    <div className="rounded-full overflow-hidden w-48 h-48  bg-gray-200">
                        {avatar ? (
                            <img
                                src={avatar}
                                alt="profile"
                                className="rounded-full w-full h-auto"
                            />
                        ) : (
                            <FaUserCircle className="w-48 h-48 rounded-full text-gray-500" />
                        )}
                    </div>
                </div>
                <div className="mt-20 w-fit mx-auto">
                    {isEditing ? (
                        <>
                            <div className="w-full mb-4">
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
                                className="mt-6 bg-oraange text-white px-4 py-2 rounded-md hover:scale-105"
                            >
                                Save
                            </button>
                            <label htmlFor="avatar" className="block font-bold text-lg mt-4">Change Avatar:</label>
                            <input
                                type="file"
                                id="avatar"
                                accept="image/*"
                                onChange={handleAvatarChange}
                                className="mt-1"
                            />
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
