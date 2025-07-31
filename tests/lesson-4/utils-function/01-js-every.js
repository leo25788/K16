const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150];

// 1.1 Kiểm tra tất cả giá trị trong scores > 70
const checkScores = scores.every(score => score > 70);
console.log(checkScores); 

// 1.2 Kiểm tra tất cả giá trị trong ages  > 15
const checAge = ages.every(age => age > 15);
console.log(checAge); 


// 1.3 Kiểm tra tất cả từ trong words có độ dài > 3

const checkWord = words.every(word => word.length > 3);
console.log(checkWord); 

// 3.1 Tìm giá trị đầu tiên trong scores > 80
console.log("Find");
const checkfindScores = scores.find(score => score > 80);
console.log(checkfindScores); 

// 3.2 Tìm giá trị đầu tiên trong ages > 20

const checkfindAges = ages.find(age => age > 20);
console.log(checkfindAges); 

// 3.3 Tìm từ đầu tiên trong words có độ dài > 5

const checkfindWord = words.find(word => word.length > 5);
console.log(checkfindWord); 


// 4.1 Từ scores: tăng 10% nếu < 90, giảm 5% nếu ≥ 90
console.log("=== 4.1 Adjusted scores ===");
const adjustedScores = scores.map(score => {
  if (score < 90) {
    return score * 1.1; // tăng 10%
  } else {
    return score * 0.95; // giảm 5%
  }
});
console.log(adjustedScores);

// 4.2 Từ numbers, chuyển thành mảng chuỗi
console.log("\n=== 4.2 Numbers to strings ===");
const stringNumbers = numbers.map(num => num.toString());
console.log(stringNumbers);

// 4.3 Từ numbers, nhân đôi mỗi giá trị
console.log("\n=== 4.3 Doubled numbers ===");
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers);

// 5.1 Kiểm tra scores có giá trị nào > 80 không
console.log("=== 5.1 Any score > 80 ===");
const hasScoreAbove80 = scores.some(score => score > 80);
console.log(hasScoreAbove80); // true

// 5.2 Kiểm tra ages có giá trị nào < 18 không
console.log("\n=== 5.2 Any age < 18 ===");
const hasAgeBelow18 = ages.some(age => age < 18);
console.log(hasAgeBelow18); // true

// 5.3 Kiểm tra words có từ nào dài > 5 không
console.log("\n=== 5.3 Any word length > 5 ===");
const hasWordLengthAbove5 = words.some(word => word.length > 5);
console.log(hasWordLengthAbove5); 


// 6.1 Tính tổng các giá trị trong scores
const totalScores = scores.reduce((sum, score) => sum + score, 0);
console.log("Tổng scores:", totalScores);

// 6.2 Tính tích các giá trị trong numbers
const productNumbers = numbers.reduce((product, num) => product * num, 1);
console.log("Tích numbers:", productNumbers);

// 6.3 Tính tổng các giá trị trong expenses
const totalExpenses = expenses.reduce((sum, expense) => sum + expense, 0);
console.log("Tổng expenses:", totalExpenses);