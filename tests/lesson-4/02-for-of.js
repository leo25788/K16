const numbers = [1, 2, 3];
const str = "Playwright";
const student = { "name": "Alex", "age": 10, "salary": 20 };
const arr = [1, 2, 3, 4, 3, 55, 23];
const dupArr = [1, 2, 3, 1, 2, 4, 5];

//2.1 In lần lượt từng ký tự của str
for (const char of str) {
  console.log(char);
}
//2.2 Tạo mảng đảo ngược từ str:
let reverseArr = [];

for (const char of str) {
  reverseArr.unshift(char); // Add to the beginning to reverse
}
console.log(reverseArr);

// 2.3 Tìm và in vị trí đầu tiên và cuối cùng của giá trị 3 trong arr

let firstIndex = -1;
let lastIndex = -1;
let index = 0;
for (const value of arr) {
  if (value === 3) {
    if (firstIndex === -1)
         firstIndex = index;
    lastIndex = index;
  }
  index++;
}

console.log(`Vị trí đầu tiên của 3: ${firstIndex}`);
console.log(`Vị trí cuối cùng của 3: ${lastIndex}`);


//2.4 Lọc các phần tử xuất hiện 1 lần trong dupArr

let uniqueValues = [];
for (const value of dupArr) {
  if (dupArr.indexOf(value) === dupArr.lastIndexOf(value)) {
    uniqueValues.push(value);
  }
}
console.log("Lọc ra:",uniqueValues);