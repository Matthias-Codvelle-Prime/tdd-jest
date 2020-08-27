// Add the unit tests of the sum function here
const sum = require('../src/sum');

test('args are numbers', () => {
    expect(typeof sum(1, 2)).toBe("number");
});

test('args are not numbers', () => {
    expect(sum("1", 2)).toBe("Ah bah bravo hein ! (╯°□°）╯︵ Les arguments doivent tous êtres des nombres !");
});

test('1 + 2 = 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('1 + 2 != 3', () => {
    expect(sum(1, 4)).toBe("Ah bah bravo hein ! (╯°□°）╯︵ le resultat n'est pas 3 !");
});

// Penser que l'on ne voit pas ce que la fonction fait et la tester.
// On peut aussi ce dire que la branch dans laquel elle passe déjà ne nécessite pas forcément un test particulier,
// mais ça peut être bien aussi.