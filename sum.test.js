const sum = require('./sum.js');

describe('Testing the sum package', () => {
  test('Should be able to sum up 2 numbers', () => {
    let results = sum(4,8);

    expect(results).toEqual(12);
  });
});