import React, { useEffect, useState } from 'react';
import Navbar from '../layouts/Navbar';
import Block from '../layouts/Block';
import axiosClientWeb from '../lib/axiosClientWeb';
import Pagination from '../components/Pagination';
import MatchTable from '../components/MatchTable';

const MatchHistory = () => {
    const [matchData, setMatchData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const matchesPerPage = 8;

    useEffect(() => {
        const userId = document.cookie
            .split("; ")
            .find((row) => row.startsWith("user_id="))
            ?.split("=")[1];

        axiosClientWeb.post(`/stats/${userId}`)
            .then(response => {
                console.log('Good', response);
                setMatchData(response.data);
            })
            .catch(error => {
                console.error('Error', error);
            });
    }, []);

    const indexOfLastMatch = currentPage * matchesPerPage;
    const indexOfFirstMatch = indexOfLastMatch - matchesPerPage;
    const currentMatches = matchData.slice(indexOfFirstMatch, indexOfLastMatch);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className='w-full h-screen bg-white dark:bg-custom-black relative overflow-hidden text-black dark:text-white'>
            <Navbar />
            <Block />
            <div className='max-w-[1240px] mx-auto py-12 mt-10 px-4 w-full h-screen flex flex-col justify-center'>
                <MatchTable currentMatches={currentMatches} currentPage={currentPage} matchesPerPage={matchesPerPage} />
                <Pagination matchData={matchData} matchesPerPage={matchesPerPage} currentPage={currentPage} paginate={paginate} />
            </div>
        </div>
    );
};

export default MatchHistory;
