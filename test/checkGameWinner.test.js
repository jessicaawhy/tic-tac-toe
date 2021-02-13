import { checkGameWinner } from '../src/logic';

test('should be undefined when nothing in array', () => {
  const gameArray = Array.from({length: 9}, () => null);
  expect(checkGameWinner(gameArray)).toBeUndefined();
})

test('should return x when array items are all x', () => {
  const gameArray = Array.from({length: 9}, () => 'x');
  expect(checkGameWinner(gameArray)).toBe('x');
})

test('should return x when array items are all o', () => {
  const gameArray = Array.from({length: 9}, () => 'o');
  expect(checkGameWinner(gameArray)).toBe('o');
})

describe('checks each row for winning cases', () => {
  test('first row: should return x', () => {
    const gameArray = Array.from({length: 9}, (_, i) => (i < 3) ? 'x' : null);
    expect(checkGameWinner(gameArray)).toBe('x');
  })
  
  test('first row: should return o', () => {
    const gameArray = Array.from({length: 9}, (_, i) => (i < 3) ? 'o' : null);
    expect(checkGameWinner(gameArray)).toBe('o');
  })
  
  test('second row: should return x', () => {
    const gameArray = Array.from({length: 9}, (_, i) => (i < 6 && i > 2) ? 'x' : null);
    expect(checkGameWinner(gameArray)).toBe('x');
  })
  
  test('second row: should return o', () => {
    const gameArray = Array.from({length: 9}, (_, i) => (i < 6 && i > 2) ? 'o' : null);
    expect(checkGameWinner(gameArray)).toBe('o');
  })
  
  test('third row: should return x', () => {
    const gameArray = Array.from({length: 9}, (_, i) => (i > 5) ? 'x' : null);
    expect(checkGameWinner(gameArray)).toBe('x');
  })
  
  test('third row: should return o', () => {
    const gameArray = Array.from({length: 9}, (_, i) => (i > 5) ? 'o' : null);
    expect(checkGameWinner(gameArray)).toBe('o');
  })
})

describe('checks each col for winning cases', () => {
  test('first col: should return x', () => {
    const gameArray = Array.from({length: 9}, (_, i) => (i % 3 === 0) ? 'x' : null);
    expect(checkGameWinner(gameArray)).toBe('x');
  })
  
  test('first col: should return o', () => {
    const gameArray = Array.from({length: 9}, (_, i) => (i % 3 === 0) ? 'o' : null);
    expect(checkGameWinner(gameArray)).toBe('o');
  })

  test('second col: should return x', () => {
    const gameArray = Array.from({length: 9}, (_, i) => (i % 3 === 1) ? 'x' : null);
    expect(checkGameWinner(gameArray)).toBe('x');
  })
  
  test('second col: should return o', () => {
    const gameArray = Array.from({length: 9}, (_, i) => (i % 3 === 1) ? 'o' : null);
    expect(checkGameWinner(gameArray)).toBe('o');
  })

  test('third col: should return x', () => {
    const gameArray = Array.from({length: 9}, (_, i) => (i % 3 === 2) ? 'x' : null);
    expect(checkGameWinner(gameArray)).toBe('x');
  })
  
  test('third col: should return o', () => {
    const gameArray = Array.from({length: 9}, (_, i) => (i % 3 === 2) ? 'o' : null);
    expect(checkGameWinner(gameArray)).toBe('o');
  })
})

describe('checks diagonals for winning cases', () => {
  test('index 0, 4, 8: should return x', () => {
    const gameArray = Array.from({length: 9}, (_, i) => (i % 4 === 0) ? 'x' : null);
    expect(checkGameWinner(gameArray)).toBe('x');
  })
  
  test('index 0, 4, 8: should return o', () => {
    const gameArray = Array.from({length: 9}, (_, i) => (i % 4 === 0) ? 'o' : null);
    expect(checkGameWinner(gameArray)).toBe('o');
  })

  // 2 4 6
  test('index 2, 4, 6: should return x', () => {
    const gameArray = Array.from({length: 9}, (_, i) => (i % 8 > 0) && (i % 2 === 0) ? 'x' : null);
    expect(checkGameWinner(gameArray)).toBe('x');
  })
  
  test('index 2, 4, 6: should return o', () => {
    const gameArray = Array.from({length: 9}, (_, i) => (i % 8 > 0) && (i % 2 === 0) ? 'o' : null);
    expect(checkGameWinner(gameArray)).toBe('o');
  })
})

test('should have returned undefined when there are no winners', () => {
  const gameArray = Array.from({length: 9}, () => null);

  const gameMock = jest.fn(checkGameWinner);
  gameMock(gameArray);
  expect(gameMock).toHaveReturnedWith(undefined);
})

describe('checks winner for random games', () => {
  test('random 1: should return x', () => {
    const gameArray = ['x', 'o', 'x', 'o', 'x', 'o', 'x', null, null];
    expect(checkGameWinner(gameArray)).toBe('x');
  })
  
  test('random 2: should return o', () => {
    const gameArray = ['o', 'o', 'x', 'o', 'x', null, 'o', 'x', 'x'];
    expect(checkGameWinner(gameArray)).toBe('o');
  })

  test('random 3: should return x', () => {
    const gameArray = ['o', 'o', 'x', null, 'x', 'o', 'x', null, 'x'];
    expect(checkGameWinner(gameArray)).toBe('x');
  })

  test('random 4: should return o', () => {
    const gameArray = ['o', null, 'o', 'x', 'o', 'x', 'x', 'x', 'o'];
    expect(checkGameWinner(gameArray)).toBe('o');
  })

  test('random 5: should return undefined', () => {
    const gameArray = ['x', 'o', 'x', 'x', 'o', 'x', 'o', 'x', 'o'];
    expect(checkGameWinner(gameArray)).toBeUndefined();
  })

  test('random 6: should return undefined', () => {
    const gameArray = ['o','x','o', 'o', 'x', 'x', 'x', 'o', 'x'];
    expect(checkGameWinner(gameArray)).toBeUndefined();
  })
})
