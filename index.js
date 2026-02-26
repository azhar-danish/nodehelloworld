console.log('Hello World!');
const number = [1, 2, 3, 4, 5];
const sum = number.reduce((acc, curr) => acc + curr, 0);
console.log('Sum:', sum);

console.log('This is a new line of code added to the index.js file.');

const num = [ 10, 20, 30, 40, 50];
const average = num.reduce((acc, curr) => acc + curr, 0) / num.length;
console.log('Average:', average);