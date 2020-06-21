const {sum, multiplier} = require('../controllers/sum');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('multiplication 1 * 2 to equal 2', () => {
    expect(multiplier(1, 2)).not.toBe(3);
});

//menggunakan matchers toBe
test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
});

//menggunakan matchers toEqual
test('object assignment', () => {
    const data = {one: 1};
    //data['two'] = 2;
    data.two = 2;
    expect(data).toEqual({one: 1, two: 2});
  });

//Menggunakan banyak matchers di satu test
test('two plus two', () => {
const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.7);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);

    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);
    expect(value).not.toBe(7);
});

//test regular expression menggunakan toMatch
test('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
});

test('there is no I in team', () => {
    expect('there').toMatch(/th/);
});

const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'beer',
  ];
  
  test('the shopping list has beer on it', () => {
    expect(shoppingList).toContain('beer');
    expect(new Set(shoppingList)).toContain('trash bags');
  });
  