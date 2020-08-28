// Add the unit tests of the multiplied function here
const fizzBuzz = require('../src/fizzBuzz');

test('return array', () => {
    //array = true
    expect(fizzBuzz()).toBe(true);
});

// test('', () => {
//     expect(fizzBuzz()).toBe();
// });

// étapes de la fonction
// #1 Nombre de 1 à 100
// #2 Multiple de 3 = Fizz 
// #3 Multiple de 5 = Buzz
// #4 Multiple de 3 et 5 = FizzBuzz

//Voir :
// https://medium.com/@jsoverson/tdd-in-practice-fizzbuzz-f424c9a0e5a2