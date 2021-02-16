import createDecisionTree from '../src/createDecisionTree';

describe('test games with winning players or ties', () => {
  test('Should return 0 if the game will be a tie', () => {
    const gameArray = [
      'X', 'O', 'X',
      'O', 'X', 'X',
      'O', 'X', 'O'
    ];

    expect(createDecisionTree(gameArray, 'computer')).toBe(0);
  })
  
  test('Should return 0 if the game will be a tie', () => {
    const gameArray = [
      'X', 'O', 'X',
      'O', 'X', 'X',
      'O', 'X', 'O'
    ];

    expect(createDecisionTree(gameArray, 'player')).toBe(0);
  })
  
  test('Should return 10 if the game will be won by computer', () => {
    const gameArray = [
      'X', null, 'O',
      null, 'X', 'O',
      null, 'X', 'O'
    ];

    expect(createDecisionTree(gameArray, 'computer')).toBe(10);
  })
  
  
  test('Should return -10 if the game will be won by player', () => {
    const gameArray = [
      'X', 'X', 'X',
      'O', 'O', null,
      null, 'O', 'X'
    ];

    expect(createDecisionTree(gameArray, 'player')).toBe(-10);
  })
  
  test('Should return 10 if the game will be won by computer', () => {
    const gameArray = [
      'X', 'O', 'O',
      'X', 'O', 'O',
      'O', 'X', 'X'
    ];

    expect(createDecisionTree(gameArray, 'computer')).toBe(10);
  })
  
  
  test('Should return -10 if the game will be won by player', () => {
    const gameArray = [
      'X', 'O', 'X',
      'O', 'X', 'O',
      'O', 'X', 'X'
    ];

    expect(createDecisionTree(gameArray, 'player')).toBe(-10);
  })
})


describe('test cases with one empty index in gameArray', () => {
  test('Should return an array', () => {
    const gameArray = [
      'X', 'O', 'X',
      'O', 'X', 'O',
      'O', 'X', null
    ];

    expect(Array.isArray(createDecisionTree(gameArray, 'player'))).toBe(true);
  })
  
  test('Should return an array of length 1', () => {
    const gameArray = [
      'X', 'O', 'X',
      'O', 'X', 'O',
      'O', 'X', null
    ];

    expect(createDecisionTree(gameArray, 'player').length).toBe(1);
  })
  
  test('Should return an array with the first item being an object', () => {
    const gameArray = [
      'X', 'O', 'X',
      'O', 'X', 'O',
      'O', 'X', null
    ];

    expect(typeof createDecisionTree(gameArray, 'player')[0]).toBe('object');
  })
  
  test('Object should have an key named index', () => {
    const gameArray = [
      'X', 'O', 'X',
      'O', 'X', 'O',
      'O', 'X', null
    ];

    expect(createDecisionTree(gameArray, 'player')[0]).toMatchObject({ index: expect.any(Number) })
  })
  
  test('Object should have an key named score', () => {
    const gameArray = [
      'X', 'O', 'X',
      'O', 'X', 'O',
      'O', 'X', null
    ];

    expect(createDecisionTree(gameArray, 'player')[0]).toMatchObject({ score: expect.any(Number) })
  })
  
  test('Case 1: Object should have an key named index and value of the empty index (8)', () => {
    const gameArray = [
      'X', 'O', 'X',
      'O', 'X', 'O',
      'O', 'X', null
    ];

    expect(createDecisionTree(gameArray, 'player')[0]).toMatchObject({ index: 8 })
  })
  
  test('Case 1: Object should have an key named score and value -10 when the game won by player', () => {
    const gameArray = [
      'X', 'O', 'X',
      'O', 'X', 'O',
      'O', 'X', null
    ];

    expect(createDecisionTree(gameArray, 'player')[0]).toMatchObject({ score: -10 })
  })
  
  test('Case 1: Object returned should have an index of 8 and score of -10', () => {
    const gameArray = [
      'X', 'O', 'X',
      'O', 'X', 'O',
      'O', 'X', null
    ];

    expect(createDecisionTree(gameArray, 'player')[0]).toMatchObject({ index: 8, score: -10 })
  })
  
  test('Case 2: Object should have an key named index and value of the empty index (8)', () => {
    const gameArray = [
      'X', 'O', 'X',
      'O', null, 'X',
      'O', 'X', 'O'
    ];

    expect(createDecisionTree(gameArray, 'player')[0]).toMatchObject({ index: 4 })
  })
  
  test('Case 2: Object should have an key named score and value 0 when the game is tied', () => {
    const gameArray = [
      'X', 'O', 'X',
      'O', null, 'X',
      'O', 'X', 'O'
    ];

    expect(createDecisionTree(gameArray, 'player')[0]).toMatchObject({ score: 0 })
  })
  
  test('Case 2: Object returned should have an index of 4 and score of 0', () => {
    const gameArray = [
      'X', 'O', 'X',
      'O', null, 'X',
      'O', 'X', 'O'
    ];

    expect(createDecisionTree(gameArray, 'player')[0]).toMatchObject({ index: 4, score: 0 })
  })
})


describe('two empty items in gameboard', () => {
  test('Should return an array of length 2', () => {
    const gameArray = [
      'O', 'O', 'X',
      'O', 'X', 'X',
      null, 'X', null
    ];

    expect(createDecisionTree(gameArray, 'computer').length).toBe(2);
  })
  
  test('Both items in the array should be an object', () => {
    const gameArray = [
      'O', 'O', 'X',
      'O', 'X', 'X',
      null, 'X', null
    ];

    expect(typeof createDecisionTree(gameArray, 'player')[0]).toBe('object');
    expect(typeof createDecisionTree(gameArray, 'player')[1]).toBe('object');
  })
  
  test('Object should have keys named index and score', () => {
    const gameArray = [
      'O', 'O', 'X',
      'O', 'X', 'X',
      null, 'X', null
    ];
  
    expect(createDecisionTree(gameArray, 'player')[0]).toMatchObject(
      { index: expect.any(Number),
        score: expect.any(Number || Object)
      })

    expect(createDecisionTree(gameArray, 'player')[1]).toMatchObject(
      { index: expect.any(Number),
        score: expect.any(Number || Object)
      })
  })
  
  test('The value at index should be the empty index of the board (6) and (8)', () => {
    const gameArray = [
      'O', 'O', 'X',
      'O', 'X', 'X',
      null, 'X', null
    ];
  
    expect(createDecisionTree(gameArray, 'player')[0]).toMatchObject({index: 6});
    expect(createDecisionTree(gameArray, 'player')[1]).toMatchObject({index: 8});
  })
  
  test('Case 1: The scores for both object are -10', () => {
    const gameArray = [
      'O', 'O', 'X',
      'O', 'X', 'X',
      null, 'X', null
    ];
  
    expect(createDecisionTree(gameArray, 'player')[0].score).toBe(-10);
    expect(createDecisionTree(gameArray, 'player')[1].score).toBe(-10);
  })
  
  test('Case 2: The index for the first object is 6', () => {
    const gameArray = [
      'O', 'O', 'X',
      'O', 'X', 'X',
      null, 'X', null
    ];
  
    expect(createDecisionTree(gameArray, 'computer')[0].index).toBe(6);
  })
  
  test('Case 2: The score for the first object is 10', () => {
    const gameArray = [
      'O', 'O', 'X',
      'O', 'X', 'X',
      null, 'X', null
    ];
  
    expect(createDecisionTree(gameArray, 'computer')[0].score).toBe(10);
  })
  
  test('Case 2: The index for the second object is 6', () => {
    const gameArray = [
      'O', 'O', 'X',
      'O', 'X', 'X',
      null, 'X', null
    ];
  
    expect(createDecisionTree(gameArray, 'computer')[1].index).toBe(8);
  })
  
  test('Case 2: The score for the second object is an array with one object', () => {
    const gameArray = [
      'O', 'O', 'X',
      'O', 'X', 'X',
      null, 'X', null
    ];
  
    expect(Array.isArray(createDecisionTree(gameArray, 'computer')[1].score)).toBe(true);
    expect(createDecisionTree(gameArray, 'computer')[1].score.length).toBe(1);
  })
  
  test('Case 2: The score of the second object is an object with index and score keys', () => {
    const gameArray = [
      'O', 'O', 'X',
      'O', 'X', 'X',
      null, 'X', null
    ];
  
    expect(createDecisionTree(gameArray, 'computer')[1].score[0]).toMatchObject({index: expect.any(Number)});
    expect(createDecisionTree(gameArray, 'computer')[1].score[0]).toMatchObject({score: expect.any(Number)});
  })
  
  test('Case 2: The score of the second object is an object with index and score keys', () => {
    const gameArray = [
      'O', 'O', 'X',
      'O', 'X', 'X',
      null, 'X', null
    ];
  
    expect(createDecisionTree(gameArray, 'computer')[1].score[0]).toMatchObject({index: 6});
    expect(createDecisionTree(gameArray, 'computer')[1].score[0]).toMatchObject({score: -10});
  })
})



test('Should return an array of length 9 when gameboard is empty', () => {
  const gameArray = [
    null, null, null,
    null, null, null,
    null, null, null
  ];

  expect(createDecisionTree(gameArray, 'computer').length).toBe(9);
})

test('Should return an object for each index', () => {
  const gameArray = [
    null, null, null,
    null, null, null,
    null, null, null
  ];

  expect(createDecisionTree(gameArray, 'computer')[0]).toMatchObject({index: 0, score: expect.any(Object)});
  expect(createDecisionTree(gameArray, 'computer')[1]).toMatchObject({index: 1, score: expect.any(Object)});
  expect(createDecisionTree(gameArray, 'computer')[2]).toMatchObject({index: 2, score: expect.any(Object)});
  expect(createDecisionTree(gameArray, 'computer')[3]).toMatchObject({index: 3, score: expect.any(Object)});
  expect(createDecisionTree(gameArray, 'computer')[4]).toMatchObject({index: 4, score: expect.any(Object)});
  expect(createDecisionTree(gameArray, 'computer')[5]).toMatchObject({index: 5, score: expect.any(Object)});
  expect(createDecisionTree(gameArray, 'computer')[6]).toMatchObject({index: 6, score: expect.any(Object)});
  expect(createDecisionTree(gameArray, 'computer')[7]).toMatchObject({index: 7, score: expect.any(Object)});
  expect(createDecisionTree(gameArray, 'computer')[8]).toMatchObject({index: 8, score: expect.any(Object)});
})
