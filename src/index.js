import './styles/style.css';
import { checkGameWinner, checkNoMovesLeft, returnEmptyIndices } from '../src/logic';
import { removeBoard, createBoard, renderMessage } from './display';

const displayController = (() => {
  const messageContainer = document.getElementById('message');
  const resetButton = document.getElementById('reset');
  const modeButtons = document.querySelectorAll('.mode')

  let xIsNext = true;
  let currentGame = Array.from({length: 9}, () => null);
  let winner = undefined;
  let noSquaresLeft = false;
  let players = 2;

  const render = () => {
    removeListeners();
    removeBoard();
    createBoard(currentGame);
    addListeners();

    messageContainer.textContent = renderMessage(winner, noSquaresLeft, xIsNext);

    if (
      !winner &&
      !noSquaresLeft &&
      players === 1
    ) {
      setTimeout(computersTurn, 1000);
    }
  }

  const computersTurn = () => {
    const freeMoves = returnEmptyIndices(currentGame);
    const randomIndex = Math.floor(Math.random() * freeMoves.length);
    const chosenMove = freeMoves[randomIndex];

    currentGame[chosenMove] = xIsNext ? 'X' : 'O';

    updateState();
    removeListeners();
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

    render();
  }

  const updateState = () => {
    xIsNext = !xIsNext;
    winner = checkGameWinner(currentGame);
    noSquaresLeft = checkNoMovesLeft(currentGame);
  }

  const addListeners = () => {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => square.addEventListener('click', handleClick));
  }

  const removeListeners = () => {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => square.removeEventListener('click', handleClick));
  }

  const updateMode = (e) => {
    players = parseInt(e.target.dataset.mode);
  }

  modeButtons.forEach(button => button.addEventListener('click', updateMode));
  resetButton.addEventListener('click', reset);

  render();
})()
