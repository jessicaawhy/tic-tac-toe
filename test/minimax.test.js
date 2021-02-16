import minimax from '../src/minimax';

describe('test games with ties', () => {
  test('computer: should return an object with a score key', () => {
    const gameArray = [
      'X', 'O', 'X',
      'O', 'X', 'X',
      'O', 'X', 'O'
    ];

    expect(minimax(gameArray, 'computer')).toMatchObject({score: expect.any(Number)})
  })

  test('computer: score key should have a value of 0', () => {
    const gameArray = [
      'X', 'O', 'X',
      'O', 'X', 'X',
      'O', 'X', 'O'
    ];

    expect(minimax(gameArray, 'computer')).toMatchObject({score: 0})
  })

  test('player: should return an object with a score key', () => {
    const gameArray = [
      'X', 'O', 'X',
      'O', 'X', 'X',
      'O', 'X', 'O'
    ];

    expect(minimax(gameArray, 'player')).toMatchObject({score: expect.any(Number)})
  })

  test('player: score key should have a value of 0', () => {
    const gameArray = [
      'X', 'O', 'X',
      'O', 'X', 'X',
      'O', 'X', 'O'
    ];

    expect(minimax(gameArray, 'player')).toMatchObject({score: 0})
  })

  test('random: tie 1', () => {
    const gameArray = [
      'X', 'O', 'X',
      'O', 'O', 'X',
      'X', 'X', 'O'
    ];

    expect(minimax(gameArray, 'player')).toMatchObject({score: 0})
  })

  test('random: tie 2', () => {
    const gameArray = [
      'O', 'X', 'X',
      'X', 'X', 'O',
      'O', 'O', 'X'
    ];

    expect(minimax(gameArray, 'computer')).toMatchObject({score: 0})
  })
})

describe('test games with winning cases', () => {
  test('computer: should return an object with a score key and value of -10 (player wins)', () => {
    const gameArray = [
      'X', 'X', 'X',
      null, null, null,
      null, null, null,
    ];

    expect(minimax(gameArray, 'computer')).toMatchObject({score: -10})
  })

  test('player: should return an object with a score key and value of -10 (player wins)', () => {
    const gameArray = [
      'X', 'X', 'X',
      null, null, null,
      null, null, null,
    ];

    expect(minimax(gameArray, 'player')).toMatchObject({score: -10})
  })

  test('computer: should return an object with a score key and value of 10 (computer wins)', () => {
    const gameArray = [
      'O', null, null,
      'O', null, null,
      'O', null, null,
    ];

    expect(minimax(gameArray, 'computer')).toMatchObject({score: 10})
  })

  test('player: should return an object with a score key and value of 10 (computer wins)', () => {
    const gameArray = [
      'O', null, null,
      'O', null, null,
      'O', null, null,
    ];

    expect(minimax(gameArray, 'player')).toMatchObject({score: 10})
  })
})


describe('test with no moves', () => {
  test('computer: should return first optimal move (index 0)', () => {
    const gameArray = [
      null, null, null,
      null, null, null,
      null, null, null,
    ];

    expect(minimax(gameArray, 'computer')).toMatchObject({index: 0})
  })

  test('player: should return first optimal move (index 0)', () => {
    const gameArray = [
      null, null, null,
      null, null, null,
      null, null, null,
    ];

    expect(minimax(gameArray, 'player')).toMatchObject({index: 0})
  })

  test('computer: score should converge to 0', () => {
    const gameArray = [
      null, null, null,
      null, null, null,
      null, null, null,
    ];

    expect(minimax(gameArray, 'computer')).toMatchObject({score: 0})
  })

  test('player: score should converge to 0', () => {
    const gameArray = [
      null, null, null,
      null, null, null,
      null, null, null,
    ];

    expect(minimax(gameArray, 'player')).toMatchObject({score: 0})
  })
})


describe('1 move away from winning/losing should return the winning/losing index', () => {
  test('test 1: computer', () => {
    const gameArray = [
      'X', null, 'X',
      null, 'O', null,
      null, null, null,
    ];
    let result = minimax(gameArray, 'computer');
    expect(result).toMatchObject({index: 1})
  })

  test('test 1: player', () => {
    const gameArray = [
      'X', null, 'X',
      null, 'O', null,
      null, null, null,
    ];
    let result = minimax(gameArray, 'player');
    expect(result).toMatchObject({index: 1})
  })

  test('test 2: computer', () => {
    const gameArray = [
      'X', null, null,
      null, 'O', null,
      'X', null, null,
    ];
    let result = minimax(gameArray, 'computer');
    expect(result).toMatchObject({index: 3})
  })

  test('test 2: player', () => {
    const gameArray = [
      'X', null, null,
      null, 'O', null,
      'X', null, null,
    ];
    let result = minimax(gameArray, 'player');
    expect(result).toMatchObject({index: 3})
  })

  test('test 3: computer', () => {
    const gameArray = [
      'X', null, null,
      'O', 'O', null,
      'X', null, null,
    ];
    let result = minimax(gameArray, 'computer');
    expect(result).toMatchObject({index: 5})
  })

  test('test 3: player', () => {
    const gameArray = [
      'X', null, null,
      'O', 'O', null,
      'X', null, null,
    ];
    let result = minimax(gameArray, 'player');
    expect(result).toMatchObject({index: 5})
  })

  test('test 4: computer', () => {
    const gameArray = [
      null, null, 'X',
      null, 'X', null,
      'O', null, 'O'
    ];
    let result = minimax(gameArray, 'computer');
    expect(result).toMatchObject({index: 7})
  })

  test('test 4: player', () => {
    const gameArray = [
      null, null, 'X',
      null, 'X', null,
      'O', null, 'O'
    ];
    let result = minimax(gameArray, 'player');
    expect(result).toMatchObject({index: 7})
  })
})


describe('X and O both 1 move from winning - return winning index for either player instead of blocking', () => {
  test('test 1: computer', () => {
    const gameArray = [
      'X', null, 'X',
      'O', 'O', null,
      null, null, null,
    ];
    let result = minimax(gameArray, 'computer');
    expect(result).toMatchObject({index: 5})
  })

  test('test 1: player', () => {
    const gameArray = [
      'X', null, 'X',
      'O', 'O', null,
      null, null, null,
    ];
    let result = minimax(gameArray, 'player');
    expect(result).toMatchObject({index: 1})
  })

  test('test 2: computer', () => {
    const gameArray = [
      'X', null, 'O',
      'X', null, null,
      null, null, 'O',
    ];
    let result = minimax(gameArray, 'computer');
    expect(result).toMatchObject({index: 5})
  })

  test('test 2: player', () => {
    const gameArray = [
      'X', null, 'O',
      'X', null, null,
      null, null, 'O',
    ];
    let result = minimax(gameArray, 'player');
    expect(result).toMatchObject({index: 6})
  })

  test('test 3: computer', () => {
    const gameArray = [
      'X', null, 'O',
      'X', 'O', null,
      null, null, null,
    ];
    let result = minimax(gameArray, 'computer');
    expect(result).toMatchObject({index: 6})
  })

  test('test 3: player', () => {
    const gameArray = [
      'X', null, 'O',
      'X', 'O', null,
      null, null, null,
    ];
    let result = minimax(gameArray, 'player');
    expect(result).toMatchObject({index: 6})
  })
})
