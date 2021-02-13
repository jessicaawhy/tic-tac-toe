import './styles/style.css';

const displayController = (()=>{
  const board = document.querySelector('#gameboard');

  let xIsNext = true;
  let currentGame = Array.from({length: 9}, () => null);

  const render = () => {
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

      board.appendChild(square);

      square.addEventListener('click', handleClick);
    })
  }

  const handleClick = (e) => {
    if (!e.target.textContent) {
      const index = e.target.dataset.index;
      currentGame[index] = xIsNext ? 'X' : 'O';

      xIsNext = !xIsNext;
      render();
    }
  }

  render();
})()
