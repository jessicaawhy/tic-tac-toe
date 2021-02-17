import './styles/style.css';
import { checkGameWinner, checkNoMovesLeft } from '../src/logic';
import { removeBoard, createBoard, renderMessage } from './display';
import minimax from './minimax';

const displayController = (() => {
  const messageContainer = document.getElementById('message');
  const resetButton = document.getElementById('reset');
  const modeButton = document.getElementById('mode');
  const settings = document.querySelector('.settings');

  let xIsNext = true;
  let currentGame = Array.from({length: 9}, () => null);
  let winner = undefined;
  let noSquaresLeft = false;
  let players = 1;
  let computersMove

  const render = () => {
    removeListeners();
    removeBoard();
    createBoard(currentGame);
    addListeners();

    messageContainer.textContent = renderMessage(winner, noSquaresLeft, xIsNext);

    if (
      !winner &&
      !noSquaresLeft &&
      players === 1 &&
      !xIsNext
    ) {
      removeListeners();
      computersMove = setTimeout(computersTurn, 1000);
    }
  }

  const computersTurn = () => {
    const chosenMove = minimax(currentGame, 'computer').index;

    currentGame[chosenMove] = 'O';

    updateState();
    removeBoard();
    createBoard(currentGame);
    addListeners();

    messageContainer.textContent = renderMessage(winner, noSquaresLeft, xIsNext);
  }

  const handleClick = (e) => {
    if (
      !e.target.textContent &&
      !winner &&
      !noSquaresLeft
    ) {
      settings.style.display = 'none';
      const index = e.target.dataset.index;
      currentGame[index] = xIsNext ? 'X' : 'O';

      updateState();
      render();
    }
  }

  const reset = () => {
    xIsNext = true;
    currentGame = Array.from({length: 9}, () => null);
    winner = undefined;
    noSquaresLeft = false;
    settings.style.display = 'block';
    clearTimeout(computersMove);
    render();
  }

  const updateState = () => {
    xIsNext = !xIsNext;
    winner = checkGameWinner(currentGame);
    noSquaresLeft = checkNoMovesLeft(currentGame);
  }

  const updateMode = () => {
    modeButton.toggleAttribute('checked');

    if (modeButton.checked) {
      players = 2;
    } else {
      players = 1;
    }
  }

  const addListeners = () => {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => square.addEventListener('click', handleClick));
  }

  const removeListeners = () => {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => square.removeEventListener('click', handleClick));
  }

  modeButton.addEventListener('change', updateMode);
  resetButton.addEventListener('click', reset);
  render();
})()
