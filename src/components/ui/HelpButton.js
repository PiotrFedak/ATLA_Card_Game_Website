import React from 'react';
import PropTypes from 'prop-types';
import { TbHelpHexagon } from "react-icons/tb";

const HelpButton = ({ onClick, helpText }) => {
    const toggleHelpText = () => {
        if (onClick) {
            onClick();
        }
    };

    return (
        <div id='help-button' className="flex items-center">
            <TbHelpHexagon className="text-4xl cursor-pointer hover:text-oraange" onClick={toggleHelpText} />
            {helpText && (
                <span className="ml-2 dark:text-white text-lg">{helpText}</span>
            )}
        </div>
    );
};

HelpButton.propTypes = {
    onClick: PropTypes.func,
    helpText: PropTypes.string,
};

export default HelpButton;
