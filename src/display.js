function removeBoard() {
  const board = document.getElementById('gameboard');

  while (board.firstChild) {
    board.removeChild(board.firstChild);
  }
}

function createBoard(gameArray) {
  const board = document.getElementById('gameboard');

  gameArray.forEach((x, i) => {
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
  })
}

function renderMessage(winner, noSquaresLeft, xIsNext) {
  let message = '';

  if (winner) {
    message = `The winner is ${winner}!`;
  } else if (noSquaresLeft) {
    message = `It's a draw. Want a rematch?`;
  } else {
    message = `Player ${xIsNext ? 'X' : 'O'}, your turn.`;
  }

  return message;
}

export { removeBoard, createBoard, renderMessage };
