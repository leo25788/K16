const numbers = [1, 2, 3];
const str = "Playwright";
const student = { "name": "Alex", "age": 10, "salary": 20 };
const arr = [1, 2, 3, 4, 3, 55, 23];
const dupArr = [1, 2, 3, 1, 2, 4, 5];

// 3.1 In tên và giá trị mỗi thuộc tính của student

console.log("=== 3.1 Tên và giá trị thuộc tính ===");
for (let key in student) {
  console.log(`${key}: ${student[key]}`);
}

// 3.2 Tính tổng các giá trị số trong student
let sum = 0;
for (let key in student) {
  if (typeof student[key] === "number") {
    sum += student[key];
  }
}
console.log("Tổng =", sum);

// 3.3 Tạo mảng chứa tên các thuộc tính của student
let keysArray = [];
for (let key in student) {
  keysArray.push(key);
}
console.log(keysArray);