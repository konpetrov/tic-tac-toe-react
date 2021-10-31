import React from 'react';
import Mark from './Mark';

const Square = ({ index, checked, mark, turn, update, gameOver, winningIndices }) => {

    const handleClick = () => update(index);
    const isWinning = winningIndices.includes(index);

    return (
        <button
            className="square"
            disabled={gameOver || checked}
            onClick={handleClick}
        >
            {checked
                ? <Mark
                    mark={mark}
                    invisible={false}
                    gameOver={gameOver}
                    winning={isWinning}
                    />
                : !gameOver && <Mark mark={turn} invisible />
            }
        </button>
    )
};

export default Square;