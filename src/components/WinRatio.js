import React, { useState, useEffect } from 'react';
import axiosClient from '../lib/axiosClient';
import WinRatioUI from './ui/WinRatioUI';

const WinRatio = () => {
    const [winLossData, setWinLossData] = useState({ wins: 0, losses: 0, gamesPlayed: 0 });
    const [userName, setUserName] = useState("");

    useEffect(() => {
        const userId = document.cookie
            .split("; ")
            .find((row) => row.startsWith("user_id="))
            ?.split("=")[1];

        axiosClient.get(`/stats/${userId}`)
            .then(response => {
                const { games_won, games_lost, games_played } = response.data.statistics[0];
                setWinLossData({ wins: games_won, losses: games_lost, gamesPlayed: games_played });
            })
            .catch(error => {
                console.error('Error fetching win/loss data:', error);
            });
        axiosClient.get(`/user/${userId}`)
            .then(({ data }) => {
                setUserName(data.user.name);
            });
    }, []);

    return (
        <WinRatioUI
            winLossData={winLossData}
            userName={userName}
        />
    );
};

export default WinRatio;
