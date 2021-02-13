function checkGameWinner(arr) {
  const winningCases = [ 
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8], 
    [0, 4, 8], 
    [2, 4, 6]
  ];

  for (let i = 0; i < winningCases.length; i++) {
    const [ a, b, c ] = winningCases[i];

    if (arr[a] && (arr[a] === arr[b]) && (arr[a] === arr[c])) {
      return arr[a];
    }
  }

  return undefined;
}

function checkNoMovesLeft(arr) {
  for (let i = 0; i < 9; i++) {
    if (!arr[i]) return false;
  }

  return true;
}


export { checkGameWinner, checkNoMovesLeft };
