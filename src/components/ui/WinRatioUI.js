import React from 'react';
import PropTypes from 'prop-types';
import { PieChart } from 'react-chartkick';
import 'chartkick/chart.js';

const WinRatioUI = ({ winLossData, userName }) => {
    const calculateWinRatio = () => {
        const { wins, losses } = winLossData;
        return wins && losses ? (wins / (wins + losses)) * 100 : 0;
    };

    const winRatio = calculateWinRatio();

    const data = [
        ['Wins', winRatio],
        ['Losses', 100 - winRatio]
    ];

    return (
        <div className='max-w-[1240px] mx-auto py-12 mt-10 px-4 w-full h-screen flex flex-col justify-center'>
            <div id="BOX" className="mockup-window border dark:bg-neutral-800 bg-base-100 p-8 mt-10">
                <div className='space-x-8'>
                    <div className="flex top-14 left-24 absolute px-4 float-left mx-12 gap-2 dark:text-white">
                        Win Rate:
                    </div>
                    <div className='flex top-12 right-[48%] absolute float-center font-bold text-xl dark:text-white'>
                        User: <span>&nbsp;</span>
                        <div className='text-[#FF5C00] font-bold md:text-xl sm:text-1xl text-lg mr-[4]'> {userName} </div>
                    </div>
                    <div className='flex top-14 absolute right-16 px-4 float-right mx-12 dark:text-white'>
                        Total number of games played:
                        <p className="md:text-7xl sm:text-6xl text-2xl font-bold md:py-5 flex top-4 absolute right-24 bg-gradient-to-r dark:from-phone dark:to-[#FF5C00] bg-clip-text text-transparent from-phoneDark to-neutral-500">{winLossData.gamesPlayed}</p>
                    </div>
                    <div className="divider"></div>
                    <div className='flex float-right absolute right-20'>
                        <div className="absolute right-11 flex mt-40 md:py-10 dark:text-white">
                            Wins | Losses
                        </div>
                        <div className="flex w-full mt-56">
                            <div className="grid h-20 w-20 flex-grow card bg-base-300 rounded-box place-items-center">
                                <p className=' font-bold md:py-5 text-2xl text-green-600'>{winLossData.wins}</p>
                            </div>
                            <div className="divider divider-horizontal"></div>
                            <div className="grid h-20 w-20 flex-grow card bg-base-300 rounded-box place-items-center">
                                <p className='font-bold md:py-5 text-red-600 text-2xl'>{winLossData.losses}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div id="PieChart" className="artboard phone-1 mt-12 py-4">
                        <PieChart data={data} />
                    </div>
                </div>
            </div>
        </div>
    );
};

WinRatioUI.propTypes = {
    winLossData: PropTypes.shape({
        wins: PropTypes.number.isRequired,
        losses: PropTypes.number.isRequired,
        gamesPlayed: PropTypes.number.isRequired
    }).isRequired,
    userName: PropTypes.string.isRequired
};

export default WinRatioUI;
