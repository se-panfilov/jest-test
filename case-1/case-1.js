export function sum(a, b) {
  return a + b;
}

export function divide(a, b) {
  return a / b;
}

// TODO unit tests
export function safeSum(a, b) {
  if (!a && a !== 0) return 'A is not a Number';
  if (!b && b !== 0) return 'B is not a Number';

  return a + b;
}

// TODO unit tests
export function printMessageUppercase(str) {
  if (!str) return 'String is not a defined';
  if (str.length < 5) return 'String is too short'

  return str.length > 5 ? 'String is too long' : str.toUpperCase();
}
