import React from 'react';

const RestartButton = ({ visible, gameStarted, restart }) => {

    const visibilityClass = visible ? 'visible' : 'hidden';
    const handleClick = () => restart();

    return (
        <div
            className="restart-container"
            style={{visibility: gameStarted ? 'visible' : 'hidden'}}
        >
            <button
                className={`restart-button ${visibilityClass}`}
                onClick={handleClick}
            >Restart?</button>
        </div>
    )
};

export default RestartButton;