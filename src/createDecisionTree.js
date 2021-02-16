import { checkGameWinner, checkNoMovesLeft, returnEmptyIndices } from './logic';

function createDecisionTree(gameArray, currentPlayer) {
  const winner = checkGameWinner(gameArray);
  if (winner === 'X') return -10;
  if (winner === 'O') return 10;
  if (checkNoMovesLeft(gameArray)) return 0;

  const emptyIndices = returnEmptyIndices(gameArray);
  const moves = [];

  for (let i = 0; i < emptyIndices.length; i++) {
    const move = {};
    const index = emptyIndices[i];
    move.index = index;

    if (currentPlayer === 'player') {
      gameArray[index] = 'X';
      move.score = createDecisionTree(gameArray, 'computer');
    } else {
      gameArray[index] = 'O';
      move.score = createDecisionTree(gameArray, 'player');
    }

    gameArray[index] = null;
    moves.push(move);
  }

  return moves;
}

export default createDecisionTree;
