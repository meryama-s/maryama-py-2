//? import lodash library
import _ from 'lodash';
import { add, multiply } from './math.js';

const sum = add(10, 5);
const product = multiply(10, 5);

const numbers = [sum, product, 20, 50, 30];
const maxNum = _.max(numbers);
const minNum = _.min(numbers);

console.log('Results:');
console.log(`Addition: ${sum}`);
console.log(`Multiplication: ${product}`);
console.log(`Max: ${maxNum}`);
console.log(`Min: ${minNum}`);
