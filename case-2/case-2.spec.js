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

  describe('fuzBuzz', () => {
    it('should return "Fuzz" if value divided by 3', () => {
      const arr = [3];
      expect(fuzBuzz(arr)).toBe('Fuzz');
    });

    it('should return "Buzz" if value divided by 5', () => {
      const arr = [5];
      expect(fuzBuzz(arr)).toBe('Buzz');
    });

    it('should return "FuzzBuzz" if value divided by 3 and 5', () => {
      const arr = [15];
      expect(fuzBuzz(arr)).toBe('FuzzBuzz');
    });

    it('should return an empty string ', () => {
      const arr = [4];
      expect(fuzBuzz(arr)).toBe('');
    });

    it('should return proper values for array of multiple numbers', () => {
      const arr = [3, 4, 5, 15,];
      expect(fuzBuzz(arr)).toBe('');
    });
  });
});
