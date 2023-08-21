const fib = require('./fibonacci'); 

describe('ciąg fibonacciego test', () => {
  test('sprawdza kolejne wyrazy ciągu', () => {
    expect(fib(0)).toBe(0);
    expect(fib(1)).toBe(1);
    expect(fib(2)).toBe(1);
    expect(fib(3)).toBe(2);
    expect(fib(6)).toBe(8);
  });

  test('zwraca zero dla ujemnych wartości', () => {
    expect(fib(-1)).toBe(0);
  });

});
