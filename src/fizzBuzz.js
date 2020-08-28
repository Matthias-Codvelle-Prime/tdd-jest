// Implement the fizzBuzz function here
function fizzBuzz() {
    let items = [];
    for (let i = 0; i < 101; i++) {
        if (i % 3 === 0) {
            items.push('Fizz');
        } else if (i % 5 === 0) {
            items.push('Buzz');
        } else {
            items.push(i);
        }
    }
    return Array.isArray(items);
}
module.exports = fizzBuzz;

//Voir :
// https://medium.com/@jsoverson/tdd-in-practice-fizzbuzz-f424c9a0e5a2