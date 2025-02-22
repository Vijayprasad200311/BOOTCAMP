const x = process.argv.slice(2); 
const num1 = parseFloat(x[0]);
const num2 = parseFloat(x[1]);

const sum = num1 + num2;
console.log('the sum of two args is '+sum);
