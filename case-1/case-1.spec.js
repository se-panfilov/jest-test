import { sum, safeSum } from './case-1';

describe('Case 1', () => {
  describe('sum', () => {
    it('should return sum of numbers', () => {
      const result = sum(2, 2);
      expect(result).toBe(4);
    });
  });

  describe('divide', () => {
    // TODO
  });

  describe('safeSum', () => {
    it('should return a message if A is not defined', () => {
      expect(safeSum(undefined, 1)).toBe('A is not a Number');
    });

    it('should return a message if B is not defined', () => {
      expect(safeSum(1, undefined)).toBe('B is not a Number');
    });

    it('should return sum of numbers', () => {
      expect(safeSum(3, 3)).toBe(6);
    });
  });

  // TODO
  describe('printMessageUppercase', () => {
    // TODO
  });
});
