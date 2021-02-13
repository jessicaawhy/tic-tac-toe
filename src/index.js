import './styles/style.css';

const board = document.querySelector('#gameboard');
const currentGame = Array.from({length: 9}, () => null);

currentGame.forEach((x, i) => {
  const square = document.createElement('div');
  square.classList.add('square');

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

  square.textContent = x;
  board.appendChild(square);
})
