import React from 'react';
import Square from './Square';

const Board = ({ squares, turn, update, gameOver, winningIndices }) => {
    return (
        <div className="board">
            {squares.map((squareProps, index) => (
                <Square
                    key={index}
                    index={index}
                    turn={turn}
                    update={update}
                    gameOver={gameOver}
                    winningIndices={winningIndices}
                    {...squareProps}
                />
            ))}
        </div>
    );
};

export default Board;