import { evenNumbers, toDollars, divideBy, multiplyBy } from './numbers';

describe('evenNumbers', () => {
  it('returns the even numbers', () => {
    const numbers = [1, 4, 5, 10, 0, -4];
    const result = evenNumbers(numbers);
    expect(result).toEqual([4, 10, 0, -4]);
  });

  it('returns empty array', () => {
    const numbers: number[] = [];
    const result = evenNumbers(numbers);
    expect(result).toEqual([]);
  });
});

describe('toDollars', () => {
  it('converts integers to dollars', () => {
    const amount = 75;
    const result = toDollars(amount);
    expect(result).toEqual('$75.00');
  });

  it('converts decimals to dollars and cents', () => {
    const amount = 15.23;
    const result = toDollars(amount);
    expect(result).toEqual('$15.23');
  });

  it('converts decimals to nearest penny', () => {
    const amount = 15.2326874;
    const result = toDollars(amount);
    expect(result).toEqual('$15.23');
  });
});

describe('divideBy', () => {
  it('returns numbers divided by divisor', () => {
    const numbers = [8, 12, 26, 58];
    const divisor = 2;
    const result = divideBy(numbers, divisor);
    expect(result).toEqual([4, 6, 13, 29]);
  });

  it('returns empty array', () => {
    const numbers: number[] = [];
    const divisor = 5;
    const result = divideBy(numbers, divisor);
    expect(result).toEqual([]);
  });

  it('returns Infinity if divided by 0', () => {
    const numbers = [8, 12, 26, 58];
    const divisor = 0;
    const result = divideBy(numbers, divisor);
    expect(result).toEqual([Infinity, Infinity, Infinity, Infinity]);
  });

  it('does not modify the array', () => {
    const input = [8, 12, 26, 58];
    const divisor = 5;
    const result = divideBy(input, divisor);
    expect(result).not.toBe(input);
  });
});

describe('multiplyBy', () => {
  it('multiply values', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const multiplier = 5;
    const result = multiplyBy(obj, multiplier);
    expect(result).toEqual({ a: 5, b: 10, c: 15 });
  });

  it('does not multiple non numbers', () => {
    const obj = { a: 1, b: 'hello', c: 3 };
    const multiplier = 5;
    const result = multiplyBy(obj, multiplier);
    expect(result).toEqual({ a: 5, b: 'hello', c: 15 });
  });
});
