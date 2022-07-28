import { div, sum } from './helper';
import { message, toUpperCase } from './helper2';

//Task: Assume that for some reason we cannot launch functions from "helper" and "helper2".\
// Mock that functions and test the code

export function main(a, b) {
  return sum(a, b) + div(a, b);
}

export function getMessage(name, num) {
  return `Hello, ${name}. ` + toUpperCase(message(num))
}
