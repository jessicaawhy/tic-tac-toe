import './styles/style.css';
import { checkGameWinner, checkNoMovesLeft } from '../src/logic';
import { removeBoard, createBoard, renderMessage } from './display';

const displayController = (() => {
  const messageContainer = document.getElementById('message');
  const resetButton = document.getElementById('reset');

  let xIsNext = true;
  let currentGame = Array.from({length: 9}, () => null);
  let winner = undefined;
  let noSquaresLeft = false;

  const render = () => {
    removeBoard();
    createBoard(currentGame);
    addListeners();

    messageContainer.textContent = renderMessage(winner, noSquaresLeft, xIsNext);
  }

  const addListeners = () => {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => square.addEventListener('click', handleClick));
  }

  const handleClick = (e) => {
    if (
      !e.target.textContent &&
      !winner &&
      !noSquaresLeft
    ) {
      const index = e.target.dataset.index;
      currentGame[index] = xIsNext ? 'X' : 'O';

      xIsNext = !xIsNext;
      winner = checkGameWinner(currentGame);
      noSquaresLeft = checkNoMovesLeft(currentGame);

      render();
    }
  }

  const reset = () => {
    xIsNext = true;
    currentGame = Array.from({length: 9}, () => null);
    winner = undefined;
    noSquaresLeft = false;

    render();
  }

  resetButton.addEventListener('click', reset);

  render();
})()
