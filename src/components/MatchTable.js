import React from 'react';
import PropTypes from 'prop-types';

const MatchTable = ({ currentMatches, currentPage, matchesPerPage }) => {
    const renderTableRows = () => {
        return currentMatches.map((match, index) => (
            <tr key={index}>
                <th>{(currentPage - 1) * matchesPerPage + index + 1}</th>
                <td>{match.player_hero}</td>
                <td>{match.player_deck_name}</td>
                <td>{match.player_element}</td>
                <td>{match.match_length}</td>
                <td style={{ color: match.winner === 'player' ? 'green' : match.winner === 'enemy' ? 'red' : 'inherit' }}>{match.winner}</td>
                <td>{match.enemy_hero}</td>
                <td>{match.enemy_deck_name}</td>
                <td>{match.enemy_element}</td>
            </tr>
        ));
    };

    return (
        <div id="BOX" className="mockup-window border dark:bg-neutral-800 bg-zinc-300 p-8 mt-10">
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr className='text-black dark:text-white'>
                            <th>Game</th>
                            <th>Player hero</th>
                            <th>Deck name</th>
                            <th>Player element</th>
                            <th>Match length</th>
                            <th>Winner</th>
                            <th>Enemy hero</th>
                            <th>Enemy deck</th>
                            <th>Enemy element</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderTableRows()}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

MatchTable.propTypes = {
    currentMatches: PropTypes.array.isRequired,
    currentPage: PropTypes.number.isRequired,
    matchesPerPage: PropTypes.number.isRequired
};

export default MatchTable;
