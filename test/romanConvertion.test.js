// Add the unit tests of the romanConvertion function here
const romanConvertion = require('../src/romanConvertion');

test('convert 1 in roman number', () => {
    expect(romanConvertion(2478)).toBe("MMCDLXXVIII");
});