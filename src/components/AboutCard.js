import React from 'react';
import PropTypes from 'prop-types';

const AboutCard = (props) => {
    return (
        <div className='flex flex-col border border-oraange text-left rounded-2xl py-12 px-8 hover:transform hover:scale-110 transition-transform duration-300'>
            <div>
                <div className='inline-flex'>
                    {props.icon}
                </div>
                <h3 className='text-xl font-bold py-4 '>{props.heading}</h3>
                <p className=''>
                    {props.text}
                </p>
            </div>
        </div>
    );
};

AboutCard.propTypes = {
    icon: PropTypes.node.isRequired,
    heading: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default AboutCard;
