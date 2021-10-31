import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Board from './components/Board';
import RestartButton from './components/RestartButton';
import './style.css';

const App = () => {

  const winningCombinations = [
    // horizontal
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    // vertical
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    // diagonal
    [0, 4, 8],
    [2, 4, 6]
  ];

  // initialize squares
  const emptySquares = () => Array(9).fill({checked: false, mark: null});

  // square properties
  const [ squares, setSquares ] = useState(emptySquares());

  // mark to be put on next move
  const [ turn, setTurn ] = useState(null);

  // current game state
  const [ gameStarted, setGameStarted ] = useState(false);
  const [ gameOver, setGameOver ] = useState(false);

  // indcies of the winning combination
  const [ winningIndices, setWinningIndices ] = useState([]);

  // change the mark for the next turn
  const changeTurn = () => turn === 'x' ? setTurn('o') : setTurn('x');

  // check for game over and change turn on every move
  useEffect(() => {
    // check for game over
    if ( isWin() || isDraw() ) setGameOver(true);

    // initialize or change turn
    changeTurn();
  }, [squares]);


  // update properties of a marked square
  const updateSquares = index => {
    const newSquares = [...squares];
    newSquares[index] = {checked: true, mark: turn};
    setSquares(newSquares);

    // toggle game start
    if (!gameStarted) setGameStarted(true);
  }

  // check if victory
  const isWin = () => {
    const turnMarkIndices = [];

    // find all indices of a current mark
    squares.forEach((square, index) => {
      if (turn && square.mark === turn) turnMarkIndices.push(index);
    });

    // check if indices are winning
    for (const combination of winningCombinations) {
      if (combination.every(i => turnMarkIndices.includes(i))) {
        setWinningIndices(combination);
        return true;
      }
    }

    return false;
  }

  // check if draw
  const isDraw = () => squares.every(s => s.checked);

  // restart game
  const restart = () => {
    setTurn(null);
    setGameOver(false);
    setWinningIndices([]);
    setSquares(emptySquares());
  };

  return (
    <div className="app">
      <Header />
      <Board
        squares={squares}
        turn={turn}
        update={updateSquares}
        gameOver={gameOver}
        winningIndices={winningIndices}
      />
      <RestartButton
        visible={gameOver}
        gameStarted={gameStarted}
        restart={restart}
      />
    </div>
  );
}

export default App;
