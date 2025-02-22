const args = process.argv.slice(2);
const inputString = args.join(" ");


const reversedString = inputString.split("").reverse().join("");
console.log('reversed : '+reversedString);
