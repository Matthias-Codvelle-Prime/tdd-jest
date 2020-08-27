// Add the unit tests of the multiplied function here
const multiplied = require('../src/multiplied');

test('result multiplied = 6', () => {
    let result= multiplied(2, 3)
    expect(result).toBe(6);
});

test('result multiplied != 6', () => {
    let result= multiplied(1, 3)
    expect(result).toBe("Ah bah bravo hein ! (╯°□°）╯︵ le resultat n'est pas 6 ! ");
});

// Les tests doivent asuré que le code de fonction est couvert à 100%
// Exemple ici on à 2 tests qui correspondent au tests des if, else de la fonction multiplied.
// "if (result === 6) {" CORRESPOND A 'result multiplied = 6' dans la fonction testé.