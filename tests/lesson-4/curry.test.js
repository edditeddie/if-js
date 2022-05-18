const sum = require('../../src/lesson-4/curry');

test('adds 5 + 2 to equal 7', () => {
    expect(sum(5, 2)).toBe(7);
});
