import React from 'react';
import AboutCard from '../components/AboutCard';
import waterIcon from '../img/water.png';
import fireIcon from '../img/fire.png';
import windIcon from '../img/wind.png';
import earthIcon from '../img/earth.png';

const About = () => {
    return (
        <div className='w-full text-custom-dark dark:text-white text-center font-body mt-4 mb-8 '>
            <div className='max-w-[1340px] mx-auto px-4 py-2 '>
                <div>
                    <h1 className='py-4 text-5xl'>Elements </h1>
                    <p className='py-4 text-2xl'>
                        There is 4 different elemental styles to choose from
                    </p>

                    <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                        <AboutCard icon={<img src={windIcon} alt="wioter Icon" />} heading={<span className="text-cyan-600">Airbending</span>} text=' is the aerokinetic ability to control and manipulate air.
                         The peaceful Air Nomads utilized this type of bending in their everyday lives.This style gives 10% chance that next attack will not take any energy' />
                        <AboutCard icon={<img src={fireIcon} alt="fire Icon" />} heading={<span className="text-red-500">Firebending</span>} text='Fire benders are ruthless give the user ability to control and produce fire. It is unique among the bending arts, as it is the only one in which the performer can generate the element. This class got critical hit chance in every attack card. ' />
                        <AboutCard icon={<img src={earthIcon} alt="earth Icon" />} heading={<span className="text-green-500">Earthbending</span>} text='Earthbending, is the geokinetic ability to manipulate earth and rock in all their various forms, prevalent in the Earth Kingdom and the United Republic.
Earth is the element of substance, while the people of the Earth Kingdom are diverse, strong, and enduring. At the start of the new turn (or the end) they can build defensive structure' />
                        <AboutCard icon={<img src={waterIcon} alt="Loter Icon" />} heading={<span className="text-blue-500">Waterbending</span>} text='One of the four elemental bending arts, is the hydrokinetic ability to control water in all of its various forms. This type of bending is used by the people of the Water Tribe, the moon is the source of power This mages will heal himself at the end of the turn.
                        ' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;