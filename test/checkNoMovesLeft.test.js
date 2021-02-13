import { checkNoMovesLeft } from '../src/logic';

test('should return false for a game with no moves', () => {
  const gameArray = Array.from({length: 9}, () => null);
  expect(checkNoMovesLeft(gameArray)).toBe(false);
})

test('should return true for a game marked with no moves left', () => {
  const gameArray = Array.from({length: 9}, () => 'filled');
  expect(checkNoMovesLeft(gameArray)).toBe(true);
})

describe('checks each index, with that index being empty', () => {
  test('should return false for a game with the 0th index free', () => {
    const gameArray = Array.from({length: 9}, (_, i) => i !== 0 ? 'filled' : null);
    expect(checkNoMovesLeft(gameArray)).toBe(false);
  })
  
  test('should return false for a game with the 1st index free', () => {
    const gameArray = Array.from({length: 9}, (_, i) => i !== 1 ? 'filled' : null);
    expect(checkNoMovesLeft(gameArray)).toBe(false);
  })
  
  test('should return false for a game with the 2nd index free', () => {
    const gameArray = Array.from({length: 9}, (_, i) => i !== 2 ? 'filled' : null);
    expect(checkNoMovesLeft(gameArray)).toBe(false);
  })
  
  test('should return false for a game with the 3rd index free', () => {
    const gameArray = Array.from({length: 9}, (_, i) => i !== 3 ? 'filled' : null);
    expect(checkNoMovesLeft(gameArray)).toBe(false);
  })
  
  test('should return false for a game with the 4th index free', () => {
    const gameArray = Array.from({length: 9}, (_, i) => i !== 4 ? 'filled' : null);
    expect(checkNoMovesLeft(gameArray)).toBe(false);
  })
  
  test('should return false for a game with the 5th index free', () => {
    const gameArray = Array.from({length: 9}, (_, i) => i !== 5 ? 'filled' : null);
    expect(checkNoMovesLeft(gameArray)).toBe(false);
  })
  
  test('should return false for a game with the 6th index free', () => {
    const gameArray = Array.from({length: 9}, (_, i) => i !== 6 ? 'filled' : null);
    expect(checkNoMovesLeft(gameArray)).toBe(false);
  })
  
  test('should return false for a game with the 7th index free', () => {
    const gameArray = Array.from({length: 9}, (_, i) => i !== 7 ? 'filled' : null);
    expect(checkNoMovesLeft(gameArray)).toBe(false);
  })
  
  test('should return false for a game with the 8th index free', () => {
    const gameArray = Array.from({length: 9}, (_, i) => i !== 8 ? 'filled' : null);
    expect(checkNoMovesLeft(gameArray)).toBe(false);
  })
})

describe('checks status for random games', () => {
  test('random 1: should return x', () => {
    const gameArray = ['x', 'o', 'x', 'o', 'x', 'o', 'x', null, null];
    expect(checkNoMovesLeft(gameArray)).toBe(false);
  })
  
  test('random 2: should return o', () => {
    const gameArray = ['o', 'o', 'x', 'o', 'x', null, 'o', 'x', 'x'];
    expect(checkNoMovesLeft(gameArray)).toBe(false);
  })

  test('random 3: should return x', () => {
    const gameArray = ['o', 'o', 'x', null, 'x', 'o', 'x', null, 'x'];
    expect(checkNoMovesLeft(gameArray)).toBe(false);
  })

  test('random 4: should return o', () => {
    const gameArray = ['o', null, 'o', 'x', 'o', 'x', 'x', 'x', 'o'];
    expect(checkNoMovesLeft(gameArray)).toBe(false);
  })

  test('random 5: should return undefined', () => {
    const gameArray = ['x', 'o', 'x', 'x', 'o', 'x', 'o', 'x', 'o'];
    expect(checkNoMovesLeft(gameArray)).toBe(true);
  })

  test('random 6: should return undefined', () => {
    const gameArray = ['o','x','o', 'o', 'x', 'x', 'x', 'o', 'x'];
    expect(checkNoMovesLeft(gameArray)).toBe(true);
  })
})
