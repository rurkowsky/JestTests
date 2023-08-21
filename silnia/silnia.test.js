const sil = require('./silnia'); 

describe('silnia test', () => {
  test('sprawdza kolejne wyrazy', () => {
    expect(sil(0)).toBe(1);
    expect(sil(1)).toBe(1);
    expect(sil(2)).toBe(2);
    expect(sil(3)).toBe(6);
    expect(sil(4)).toBe(24);
  });
  

  test('zwraca error dla ujemnych wartości', () => {
    expect(sil(-1)).toEqual("error liczba ujemna");
  });
});
