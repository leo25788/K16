const numbers = [1, 2, 3];
const str = "Playwright";
const student = { "name": "Alex", "age": 10, "salary": 20 };
const arr = [1, 2, 3, 4, 3, 55, 23];
const dupArr = [1, 2, 3, 1, 2, 4, 5];

//Bai 1:


//numbers.forEach(element => console.log(element));
//1.1
numbers.forEach(num => 
    {
  console.log(num);
});

//1.2
let sum = 0;
numbers.forEach(num =>
{
    sum+=num;

});
console.log("Tổng:",sum);

let max = numbers[0];
let min = numbers[0];
numbers.forEach(num =>
{
    if(num > max){
        max = num;
    }
    if (num < min){
        min=num;
    }
}
);
console.log("Giá trị lớn nhất của numbers:", max);
console.log("Giá trị nhỏ nhất của numbers:", min);

//1.3
let doubleNumer = [];
numbers.forEach(num =>
{
    doubleNumer.push(num * 2);
}
);

console.log("Giá trị mảng mới :",doubleNumer)
