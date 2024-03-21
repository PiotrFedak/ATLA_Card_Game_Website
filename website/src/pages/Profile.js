import React from 'react';
import Header from '../components/Header';
import UserProfile from '../components/UserProfile';

const Profile = () => {
    return (
        <div className='relative flex flex-col items-center justify-center h-screen bg-white dark:bg-custom-black dark:text-white text-custom-black'>
            <Header />
            <UserProfile />
        </div>
    );
};

export default Profile;
