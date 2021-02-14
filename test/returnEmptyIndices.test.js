import { returnEmptyIndices } from '../src/logic';

describe('array items are all null', () => {
  test('should contain 0', () => {
    const gameArray = Array.from({length: 9}, () => null);
    expect(returnEmptyIndices(gameArray)).toContain(0);
  })
  
  test('should contain 1', () => {
    const gameArray = Array.from({length: 9}, () => null);
    expect(returnEmptyIndices(gameArray)).toContain(1);
  })
  
  test('should contain 2', () => {
    const gameArray = Array.from({length: 9}, () => null);
    expect(returnEmptyIndices(gameArray)).toContain(2);
  })
  
  test('should contain 3', () => {
    const gameArray = Array.from({length: 9}, () => null);
    expect(returnEmptyIndices(gameArray)).toContain(3);
  })
  
  test('should contain 4', () => {
    const gameArray = Array.from({length: 9}, () => null);
    expect(returnEmptyIndices(gameArray)).toContain(4);
  })
  
  test('should contain 5', () => {
    const gameArray = Array.from({length: 9}, () => null);
    expect(returnEmptyIndices(gameArray)).toContain(5);
  })
  
  test('should contain 6', () => {
    const gameArray = Array.from({length: 9}, () => null);
    expect(returnEmptyIndices(gameArray)).toContain(6);
  })
  
  test('should contain 7', () => {
    const gameArray = Array.from({length: 9}, () => null);
    expect(returnEmptyIndices(gameArray)).toContain(7);
  })
  
  test('should contain 8', () => {
    const gameArray = Array.from({length: 9}, () => null);
    expect(returnEmptyIndices(gameArray)).toContain(8);
  })
  
  test('should return an array of all the indexes', () => {
    const gameArray = Array.from({length: 9}, () => null);
    expect(returnEmptyIndices(gameArray)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  })
})


describe('array items are all filled', () => {
  test('should not contain 0', () => {
    const gameArray = Array.from({length: 9}, () => 'filled');
    const expected = [0];
  
    expect(returnEmptyIndices(gameArray)).toEqual(expect.not.arrayContaining(expected));
  })
  
  test('should not contain 1', () => {
    const gameArray = Array.from({length: 9}, () => 'filled');
    const expected = [1];
  
    expect(returnEmptyIndices(gameArray)).toEqual(expect.not.arrayContaining(expected));
  })
  
  test('should not contain 2', () => {
    const gameArray = Array.from({length: 9}, () => 'filled');
    const expected = [2];
  
    expect(returnEmptyIndices(gameArray)).toEqual(expect.not.arrayContaining(expected));
  })
  
  test('should not contain 3', () => {
    const gameArray = Array.from({length: 9}, () => 'filled');
    const expected = [3];
  
    expect(returnEmptyIndices(gameArray)).toEqual(expect.not.arrayContaining(expected));
  })
  
  test('should not contain 4', () => {
    const gameArray = Array.from({length: 9}, () => 'filled');
    const expected = [4];
  
    expect(returnEmptyIndices(gameArray)).toEqual(expect.not.arrayContaining(expected));
  })
  
  test('should not contain 5', () => {
    const gameArray = Array.from({length: 9}, () => 'filled');
    const expected = [5];
  
    expect(returnEmptyIndices(gameArray)).toEqual(expect.not.arrayContaining(expected));
  })
  
  test('should not contain 6', () => {
    const gameArray = Array.from({length: 9}, () => 'filled');
    const expected = [6];
  
    expect(returnEmptyIndices(gameArray)).toEqual(expect.not.arrayContaining(expected));
  })
  
  test('should not contain 7', () => {
    const gameArray = Array.from({length: 9}, () => 'filled');
    const expected = [7];
  
    expect(returnEmptyIndices(gameArray)).toEqual(expect.not.arrayContaining(expected));
  })
  
  test('should not contain 8', () => {
    const gameArray = Array.from({length: 9}, () => 'filled');
    const expected = [8];
  
    expect(returnEmptyIndices(gameArray)).toEqual(expect.not.arrayContaining(expected));
  })
  
  test('should return an array of all the indexes when the array elements are all null', () => {
    const gameArray = Array.from({length: 9}, () => 'filled');
    expect(returnEmptyIndices(gameArray)).toEqual([]);
  })  
})

describe('missing 1 index, should return array of that item', () => {
  test('should return 0', () => {
    const gameArray = Array.from({length: 9}, (_, i) => i !== 0 ? 'filled' : null);
    expect(returnEmptyIndices(gameArray)).toEqual([0]);
  })

  test('should return 1', () => {
    const gameArray = Array.from({length: 9}, (_, i) => i !== 1 ? 'filled' : null);
    expect(returnEmptyIndices(gameArray)).toEqual([1]);
  })

  test('should return 2', () => {
    const gameArray = Array.from({length: 9}, (_, i) => i !== 2 ? 'filled' : null);
    expect(returnEmptyIndices(gameArray)).toEqual([2]);
  })

  test('should return 3', () => {
    const gameArray = Array.from({length: 9}, (_, i) => i !== 3 ? 'filled' : null);
    expect(returnEmptyIndices(gameArray)).toEqual([3]);
  })

  test('should return 4', () => {
    const gameArray = Array.from({length: 9}, (_, i) => i !== 4 ? 'filled' : null);
    expect(returnEmptyIndices(gameArray)).toEqual([4]);
  })

  test('should return 5', () => {
    const gameArray = Array.from({length: 9}, (_, i) => i !== 5 ? 'filled' : null);
    expect(returnEmptyIndices(gameArray)).toEqual([5]);
  })
  
  test('should return 6', () => {
    const gameArray = Array.from({length: 9}, (_, i) => i !== 6 ? 'filled' : null);
    expect(returnEmptyIndices(gameArray)).toEqual([6]);
  })

  test('should return 7', () => {
    const gameArray = Array.from({length: 9}, (_, i) => i !== 7 ? 'filled' : null);
    expect(returnEmptyIndices(gameArray)).toEqual([7]);
  })

  test('should return 8', () => {
    const gameArray = Array.from({length: 9}, (_, i) => i !== 8 ? 'filled' : null);
    expect(returnEmptyIndices(gameArray)).toEqual([8]);
  })
})

describe('random tests', () => {
  test('should return array of odd indexes', () => {
    const gameArray = Array.from({length: 9}, (_, i) => i % 2 === 0 ? 'filled' : null);
    expect(returnEmptyIndices(gameArray)).toEqual([1, 3, 5, 7]);
  })

  test('should return array of even indexes', () => {
    const gameArray = Array.from({length: 9}, (_, i) => i % 2 !== 0 ? 'filled' : null);
    expect(returnEmptyIndices(gameArray)).toEqual([0, 2, 4, 6, 8]);
  })

  test('should return array of 0, 1, 2', () => {
    const gameArray = [null, null, null, 'filled', 'filled', 'filled', 'filled', 'filled', 'filled'];
    expect(returnEmptyIndices(gameArray)).toEqual([0, 1, 2]);
  })

  test('should return array of 6, 7, 8', () => {
    const gameArray = ['filled', 'filled', 'filled', 'filled', 'filled', 'filled', null, null, null];
    expect(returnEmptyIndices(gameArray)).toEqual([6, 7, 8]);
  })
})
