import './styles/style.css';
import { checkGameWinner, checkNoMovesLeft } from '../src/logic';

const displayController = (()=>{
  const board = document.getElementById('gameboard');
  const messageContainer = document.getElementById('message');
  const resetButton = document.getElementById('reset');

  let xIsNext = true;
  let currentGame = Array.from({length: 9}, () => null);
  let winner = undefined;
  let noSquaresLeft = false;
  let message = '';

  const render = () => {
    // board 
    while (board.firstChild) {
      board.removeChild(board.firstChild);
    }

    currentGame.forEach((x, i) => {
      const square = document.createElement('div');

      if (i < 3) {
        square.classList.add('first-row');
      } else if (i < 6) {
        square.classList.add('second-row');
      } else {
        square.classList.add('third-row');
      }
    
      if (i % 3 === 0) {
        square.classList.add('first-column');
      } else if (i % 3 === 1) {
        square.classList.add('second-column');
      } else {
        square.classList.add('third-column');
      }

      square.classList.add('square');
      square.textContent = x;
      square.dataset.index = i;
      square.addEventListener('click', handleClick);

      board.appendChild(square);
    })

    // message
    if (winner) {
      message = `The winner is ${winner}!`;
    } else if (noSquaresLeft) {
      message = `It's a draw. Want a rematch?`;
    } else {
      message = `Player ${xIsNext ? 'X' : 'O'}, your turn.`;
    }

    messageContainer.textContent = message;
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
    message = '';

    render();
  }

  resetButton.addEventListener('click', reset);

  render();
})()
