import React from 'react';
import { PieChart } from 'react-chartkick'
import 'chartkick/chart.js'


const WinRatio = () => {
    const winLossData = {
        wins: 15,
        losses: 25
    };

    const winRatio = (winLossData.wins / (winLossData.wins + winLossData.losses)) * 100;

    const data = [
        ['Wins', winRatio],
        ['Losses', 100 - winRatio]
    ];

    return (
        <div className='max-w-[1240px] mx-auto py-12 mt-2 px-4 w-full h-screen flex flex-col justify-center'>

            <div id="BOX" className="mockup-window border bg-neutral-800 dark:bg-base-100 p-8">
                <div className="flex top-0 left-0 px-4 py-2 dark:bg-base-200 bg-neutral-700">
                    Win Rate
                </div>
                <div>
                    <div id="PieChart" className="artboard phone-1 mt-2 py-2 ">
                        <PieChart data={data} />
                    </div>
                </div>
            </div>

            <div className="join absolute bottom-0 left-0 right-0 flex justify-center mb-8">
                <input className="join-item btn btn-square" type="radio" name="options" aria-label="1" checked />
                <input className="join-item btn btn-square" type="radio" name="options" aria-label="2" />
                <input className="join-item btn btn-square" type="radio" name="options" aria-label="3" />
                <input className="join-item btn btn-square" type="radio" name="options" aria-label="4" />
            </div>
        </div>
    );
};

export default WinRatio;
