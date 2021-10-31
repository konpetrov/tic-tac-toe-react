import React from 'react';

const Mark = ({ mark, invisible, gameOver, winning }) => {
    const classes = [
        'mark',
        mark,
        invisible ? 'invisible' : '',
        (gameOver && !winning) ? 'dimmed' : ''
    ]

    return <div className={classes.join(' ')}></div>;
};

export default Mark;