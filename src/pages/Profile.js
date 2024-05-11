import React from 'react';
import Navbar from '../layouts/Navbar';
import UserProfile from '../components/UserProfile';

const Profile = () => {
    return (
        <div className='relative flex flex-col items-center justify-center h-screen bg-white dark:bg-custom-black dark:text-white text-custom-black'>
            <Navbar />
            <UserProfile />
        </div>
    );
};

export default Profile;
