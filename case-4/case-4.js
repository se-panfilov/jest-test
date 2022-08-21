// Task: create unit tests for "sum()" and for "div()" functions.
// hint: "div()" might be hard to test, so it should be rewritten.

export class Case4 {
  a = 0;
  b = 0;
  c = 2;
  d = 0;

  constructor(a, b) {
    this.a = a;
    this.b = b;
    this.d = Math.random();
  }

  sum() {
    return this.a + this.b;
  }

  div() {
    return this.c / this.d;
  }
}
