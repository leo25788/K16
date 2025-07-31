const fullName = "Nguyễn Văn A";
const date = "2024-05-19";
const email = "example@gmail.com";

// 1. Trích xuất họ từ fullName (từ đầu đến ký tự thứ 6)
const ho = fullName.substring(0, 6);
console.log("1. Họ là:", ho); // Kết quả: "Nguyễn"

// 2. Trích xuất năm từ date (4 ký tự đầu)
const nam = date.substring(0, 4);
console.log("2. Năm là:", nam); // Kết quả: "2024"

// 3. Trích xuất tên miền từ email (từ sau "@")
const tenMien = email.substring(email.indexOf("@") + 1);
console.log("3. Tên miền là:", tenMien); // Kết quả: "gmail.com"