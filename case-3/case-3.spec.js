import { getMessage, main } from './case-3';
import * as Helper from './helper'
import * as Helper2 from './helper2'

describe('Case 3', () => {

  describe('main', () => {
    it('should return 5 if sum returns 4 and div returns 1', () => {
      // setup
      jest.spyOn(Helper, 'sum', ).mockImplementation((a, b) => 4)
      jest.spyOn(Helper, 'div', ).mockImplementation((a, b) => 1)

      // execute & check
      expect(main(1, 1)).toBe(5)
    });
  });

  describe('getMessage', () => {
    it('should return a proper message', () => {
      // setup
      //jest.spyOn(...).mockImplementation(...)
      //jest.spyOn(...).mockImplementation(...)

      const expectedMessage = 'Hello, whatever. mock message 0'

      // execute & check
      expect(getMessage('whatever', 0)).toBe(expectedMessage)
    });
  });
});
