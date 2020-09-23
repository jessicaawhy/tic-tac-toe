const playerFactory = (name, marker) => {
  return {name, marker};
}

let playerX = playerFactory('Player', 'X');
let playerO = playerFactory('Player', 'O');

// gameBoard
const gameBoard = (() => {
  const board = [['','',''], ['','',''], ['','','']];
  return {board};
})()

const board = document.querySelector('#gameboard')

// displayController
const displayController = (()=>{
  let currentPlayer = playerX;
  let isWinningCase = false;
  let count = 0;
  
  const toggleSections = () => {
    let main = document.querySelector('.main');
    main.classList.toggle('hide');
    let form = document.querySelector('.form');
    form.classList.toggle('hide');
  }
  
  const settingButton = document.querySelector('#settings');
  settingButton.addEventListener('click', toggleSections);

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
    updateNames();
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => box.addEventListener('click', updateGameBoard));
    const resetButton = document.querySelector('#reset')
    resetButton.addEventListener('click', resetGame);
  }

  const switchTurns = () => {
    if (currentPlayer.marker === playerX.marker) {
      currentPlayer = playerO;
    } else {
      currentPlayer = playerX;
    }
  }

  const updateGameBoard = (e) => {
    let row = e.srcElement.id[3];
    let column = e.srcElement.id[10];
    if (!gameBoard.board[row][column]) {
      gameBoard.board[row][column] = currentPlayer.marker;
      ++count;
      render();
      checkWinningCases();
      if(isWinningCase){
        console.log(`${currentPlayer.name} wins!`);
        // restart game
      } else if(count === 9) {
        console.log('It\'s a tie');
        // restart game
      } else {
        switchTurns();
      }
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

      if (case1 || case2 || case3 || case4) {
        isWinningCase = true;
      };
    }
  }

  const resetGame = () => {
    gameBoard.board.forEach(row => {
      for (let i = 0; i < 3; i++) {
        row[i] = '';
      }
    });
    isWinningCase = false;
    currentPlayer = playerX;
    count = 0;
    render();
  }

  const updateNames = () => {
    playerX.name = document.getElementById('p1name').value || `${playerX.name}`;
    playerO.name = document.getElementById('p2name').value || `${playerO.name}`;
    
    const playerXlabel = document.querySelector('#playerX')
    playerXlabel.innerHTML = `${playerX.name} ${playerX.marker}`
    const playerOlabel = document.querySelector('#playerO')
    playerOlabel.innerHTML = `${playerO.name} ${playerO.marker}`
  }
  
  render()

  return {updateNames, toggleSections}
})()
