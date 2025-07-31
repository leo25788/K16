const numbers = [1, 2, 3];
const names = ["Alice", "Bob", "Charlie"];


// 1. push
numbers.push(4);
names.push("David");
console.log("Sau push:", numbers, names);

// 2. pop
numbers.pop();
console.log("Sau pop:", numbers);

// 3. unshift
numbers.unshift(0);
names.unshift("David");
console.log("Sau unshift:", numbers, names);

// 4. shift
numbers.shift();
console.log("Sau shift:", numbers);