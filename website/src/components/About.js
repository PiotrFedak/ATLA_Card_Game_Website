import React from 'react';
import AboutCard from '../components/AboutCard';
import loterIcon from '../img/łoter.png';
import fireIcon from '../img/fire.png';
import wioterIcon from '../img/wioter.png';
import earthIcon from '../img/earth.png';

const About = () => {
    return (
        <div className='w-full text-custom-dark dark:text-white text-center font-body'>
            <div className='max-w-[1240px] mx-auto px-4 py-16 '>
                <div>
                    <h1 className='py-4'>Elements </h1>
                    <p className='py-4 text-xl'>
                        There is 4 diffrent elements to  choose from to play
                    </p>

                    <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                        <AboutCard icon={<img src={wioterIcon} alt="wioter Icon" />} heading={<span className="text-cyan-600">Airbending</span>} text=' is the aerokinetic ability to control and manipulate air.
                         The peaceful Air Nomads utilized this type of bending in their everyday lives.This style gives 10% chance that next attack will not take any energy' />
                        <AboutCard icon={<img src={fireIcon} alt="fire Icon" />} heading={<span className="text-red-500">FireBending</span>} text='Fire benders are ruthless ' />
                        <AboutCard icon={<img src={earthIcon} alt="earth Icon" />} heading={<span className="text-green-500">Eathbending</span>} text='Sold' />
                        <AboutCard icon={<img src={loterIcon} alt="Loter Icon" />} heading={<span className="text-blue-500">Waterbending</span>} text='one of the four elemental bending arts, is the hydrokinetic ability to control water in all of its various forms. This type of bending is used by the people of the Water Tribe.
                        ' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;