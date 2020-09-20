const playerFactory = (name, marker) => {
  return {name, marker};
}

const player1 = playerFactory('Player 1', 'X');
const player2 = playerFactory('Player 2', 'O');

// gameBoard
const gameBoard = (() => {
  const board = [[,,], [,,], [,,]];
  return {board};
})()

const board = document.querySelector('#gameboard')

// displayController
const displayController = (()=>{
  let currentPlayer = player1;
  let isWinningCase = false;
  
  const render = () => {
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

  const switchTurns = () => {
    if (currentPlayer.name === player1.name) {
      currentPlayer = player2;
    } else {
      currentPlayer = player1;
    }
  }

  const updateGameBoard = (e) => {
    let row = e.srcElement.id[3];
    let column = e.srcElement.id[10];
    if (!gameBoard.board[row][column]) {
      gameBoard.board[row][column] = currentPlayer.marker;
      checkWinningCases();
      if(isWinningCase){
        console.log('stop');
      };
      render();
      switchTurns();
    }
  }

  const checkWinningCases = () => {
    let board = gameBoard.board;
    
    for (let i = 0; i < 3; i++) {
      let case1 = (board[0][0] === 'X' || board[0][0] === 'O') && 
                  (board[0][0] === board[1][1] && board[1][1] === board[2][2]);
      let case2 = (board[2][0] === 'X' || board[2][0] === 'O') && 
                  (board[2][0] === board[1][1] && board[1][1] === board[0][2]);
      let case3 = (board[i][0] === 'X' || board[i][0] === 'O') && 
                  (board[i][0] === board[i][1] && board[i][1] === board[i][2]);
      let case4 = (board[0][i] === 'X' || board[0][i] === 'O') && 
                  (board[0][i] === board[1][i] && board[1][i] === board[2][i]);

      if (case1 || case2 ||case3 || case4) {
        isWinningCase = true;
      };
    }
  }

  render()
})()
