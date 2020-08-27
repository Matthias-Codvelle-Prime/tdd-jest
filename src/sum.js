// Implement the sum function here
function sum(a, b) {
    if (typeof a == 'number' && typeof b == 'number') {
        let result = a + b;
        if (result === 3) {
            return result;
        } else {
            return "Ah bah bravo hein ! (╯°□°）╯︵ le resultat n'est pas 3 !";
        }
    } else {
        return "Ah bah bravo hein ! (╯°□°）╯︵ Les arguments doivent tous êtres des nombres !";
    }
}
module.exports = sum;