import React from 'react';
import Header from '../components/Header';
import { FaGear } from "react-icons/fa6";

const Profile = () => {
    return (
        <div className='relative flex flex-col items-center justify-center h-screen bg-white dark:bg-custom-black dark:text-white text-custom-black'>
            <Header />
            <div className="w-3/4 h-3/4 dark:bg-[#20354b] bg-slate-300 rounded-2xl px-8 py-10 shadow-lg mt-14 absolute">
                <section class="w-full mx-auto px-8 py-6">
                    <div class="flex items-center justify-between">
                        <span class='text-2xl'>Henlo</span>
                        <button class='text-3xl'>
                            <FaGear />
                        </button>
                    </div>
                    <div class="mt-6 w-fit mx-auto">
                        <img src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg" class="rounded-full w-40" alt="profile picture" srcset=""></img>
                    </div>

                    <div class="mt-20 w-fit mx-auto">
                        <h2 class="font-bold text-2xl tracking-wide">Nickname</h2>
                        <h2 class="font-bold text-2xl mt-5 w-fit mx-auto">Email</h2>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Profile;
