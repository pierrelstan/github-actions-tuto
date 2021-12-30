const multiply = require('./multiply');

test('multiplies 2 * 4 to equal 8', () => {
  expect(multiply(2, 4)).toBe(8);
});
