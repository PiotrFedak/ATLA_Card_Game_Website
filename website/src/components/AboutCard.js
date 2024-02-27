import React from 'react'

const AboutCard = (props) => {
    return (
        <div className='flex flex-col border border-oraange text-left rounded-2xl py-12 px-8 hover:transform hover:scale-105 transition-transform duration-300'>
            <div>
                <div className='bg-[#e6dfee] inline-flex  rounded-full'>
                    {props.icon}
                </div>
                <h3 className='text-xl font-bold py-4 '>{props.heading}</h3>
                <p>
                    {props.text}
                </p>
            </div>
        </div>
    )
}

export default AboutCard