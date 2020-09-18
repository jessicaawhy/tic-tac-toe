
// gameBoard
const gameBoard = (() => {
  const board = [['x','o','o'], ['x','o','x'], ['o','x','o']];
  return {board};
})()

// Players
const playerFactory = (name, marker) => {
  return {name, marker};
}

const player1 = playerFactory('Player 1', 'X');
const player2 = playerFactory('Player 2', 'O');

// displayController
const displayController = (()=>{
  
})()

const board = document.querySelector('#gameboard')
window.addEventListener('load', render)

function render() {
  while (board.firstChild) {
    board.removeChild(board.firstChild);
  }
  for (let i = 0; i < 3; i++) {
    let row = document.createElement('div');
    row.style.display = 'flex';
    for (let j = 0; j < 3; j++) {
      let element = document.createElement('div');
      element.classList.add('box')
      element.innerHTML = gameBoard.board[i][j];
      row.appendChild(element);
    }
    board.appendChild(row);
  }
}