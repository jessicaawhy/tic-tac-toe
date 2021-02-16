import { checkGameWinner, checkNoMovesLeft, returnEmptyIndices } from './logic';

function minimax(gameArray, currentPlayer, iter = 0) {
  const winner = checkGameWinner(gameArray);
  if (winner === 'X') return {score: iter - 10};
  if (winner === 'O') return {score: 10 - iter};
  if (checkNoMovesLeft(gameArray)) return {score: 0};
  
  iter++;
  const emptyIndices = returnEmptyIndices(gameArray);
  const moves = [];

  let bestMove;
  let bestScore = currentPlayer === 'player' ? Infinity : -Infinity;

  for (let i = 0; i < emptyIndices.length; i++) {
    const move = {};
    const index = emptyIndices[i];
    move.index = index;

    if (currentPlayer === 'player') {
      gameArray[index] = 'X';
      move.score = minimax(gameArray, 'computer', iter).score;

      if (move.score < bestScore) {
        bestScore = move.score;
        bestMove = i;
      }

    } else {
      gameArray[index] = 'O';
      move.score = minimax(gameArray, 'player', iter).score;

      if (move.score > bestScore) {
        bestScore = move.score;
        bestMove = i;
      }
    }

    gameArray[index] = null;
    moves.push(move);
  }

  return moves[bestMove];
}

export default minimax;
