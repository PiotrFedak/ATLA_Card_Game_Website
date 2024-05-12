import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ matchData, matchesPerPage, currentPage, paginate }) => {
    return (
        <div className="pagination flex justify-center mt-3">
            {Array.from({ length: Math.ceil(matchData.length / matchesPerPage) }, (_, i) => (
                <div className="join" key={i}>
                    <input className="join-item btn btn-square mx-1" type="radio" name="options" aria-label={i + 1} onClick={() => paginate(i + 1)} checked={currentPage === i + 1} />
                </div>
            ))}
        </div>
    );
};

Pagination.propTypes = {
    matchData: PropTypes.array.isRequired,
    matchesPerPage: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    paginate: PropTypes.func.isRequired
};

export default Pagination;
