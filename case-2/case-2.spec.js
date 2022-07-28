import { fuzzBuzz, isTooBig, toUpperCase } from './case-2';

describe('Case 2', () => {
  describe('toUpperCase', () => {
    it('should return a string in upper case', () => {
      const str = 'some string';
      const expectedStr = 'SOME STRING';
      expect(toUpperCase(str)).toBe(expectedStr);
    });
  });

  describe('isTooBig', () => {
    it('should return "true" if number is too big', () => {
      expect(isTooBig(100)).toBe(true);
    });

    it('should return "false" if number is too small', () => {
      expect(isTooBig(50)).toBe(true);
    });
  });

  describe('fuzzBuzz', () => {
    beforeEach(() => {
      jest.spyOn(console, 'log').mockImplementation((v) => v)
    });

    it('should return "Fuzz" if value divided by 3', () => {
      // setup
      const arr = [3];

      // execute
      fuzzBuzz(arr)

      // check
      expect(console.log).toHaveBeenCalledWith('Fuzz')
    });

    it('should return "Buzz" if value divided by 5', () => {
      // setup
      const arr = [5];

      // execute
      fuzzBuzz(arr)

      // check
      expect(console.log).toHaveBeenCalledWith('Buzz')
    });

    it('should return "FuzzBuzz" if value divided by 3 and 5', () => {
      // setup
      const arr = [15];

      // execute
      fuzzBuzz(arr)

      // check
      expect(console.log).toHaveBeenCalledWith('FuzzBuzz')
    });

    it('should return an empty string ', () => {
      // setup
      const arr = [4];

      // execute
      fuzzBuzz(arr)

      // check
      expect(console.log).toHaveBeenCalledWith('')
    });

    it('should return proper values for array of multiple numbers', () => {
      // setup
      const arr = [3, 4, 5, 15];

      // execute
      fuzzBuzz(arr)

      // check
      expect(console.log).toHaveBeenCalledWith('Fuzz')
      expect(console.log).toHaveBeenCalledWith('')
      expect(console.log).toHaveBeenCalledWith('Buzz')
      expect(console.log).toHaveBeenCalledWith('FuzzBuzz')
    });
  });
});
