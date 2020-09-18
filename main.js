
// gameBoard
const gameBoard = (() => {
  const board = [[,,], [,,], [,,]];
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
  let marker = 'X';
  return {marker};
})()

const board = document.querySelector('#gameboard')
render();
// board.addEventListener('click', render)

function render() {
  while (board.firstChild) {
    board.removeChild(board.firstChild);
  }
  for (let i = 0; i < 3; i++) {
    let row = document.createElement('div');
    row.style.display = 'flex';
    for (let j = 0; j < 3; j++) {
      let element = document.createElement('div');
      element.classList.add('box');
      element.setAttribute('id', `row${i}column${j}`);
      element.innerHTML = gameBoard.board[i][j] || '';
      row.appendChild(element);
    }
    board.appendChild(row);
  }
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(box => box.addEventListener('click', updateGameBoard));
}

function updateGameBoard(e) {
  let row = e.srcElement.id[3];
  let column = e.srcElement.id[10];

  if (!gameBoard.board[row][column]) {
    gameBoard.board[row][column] = displayController.marker;
    render();
    switchMarker();
  }
}

function switchMarker(){
  if (displayController.marker === 'X') {
    displayController.marker = 'O';
  } else {
    displayController.marker = 'X';
  }
}
