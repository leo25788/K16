const name = "Nguyễn Văn A";
const emails = "example1@gmail.com,example2@gmail.com,example3@gmail.com";
const date = "2024-05-19";

// 1. Chia name thành mảng các từ (dùng khoảng trắng)
const nameWords = name.split(" ");
console.log("Mảng các từ trong name:", nameWords);
// Output: ["Nguyễn", "Văn", "A"]

// 2. Chia emails thành mảng các email (dùng dấu phẩy)
const emailList = emails.split(",");
console.log("Mảng các email:", emailList);
// Output: ["example1@gmail.com", "example2@gmail.com", "example3@gmail.com"]

// 3. Chia date thành mảng ngày, tháng, năm (dùng dấu gạch ngang)
const dateParts = date.split("-");
console.log("Mảng ngày, tháng, năm:", dateParts);
// Output: ["2024", "05", "19"]