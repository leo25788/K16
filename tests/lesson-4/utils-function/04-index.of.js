const name = "Nguyễn Văn A";
const email = "example@gmail.com";
const productName = "MacBook Pro";
const description = "Khóa học JavaScript cơ bản";


// 2.1 Tìm vị trí "a" trong name
const positionAInName = name.indexOf("a");
console.log("2.1 Vị trí 'a' trong name:", positionAInName); // → 9

// 2.2 Tìm vị trí "@" trong email
const positionAtInEmail = email.indexOf("@");
console.log("2.2 Vị trí '@' trong email:", positionAtInEmail); // → 7

// 2.3 Tìm vị trí "JavaScript" trong description
const positionJSInDesc = description.indexOf("JavaScript");
console.log("2.3 Vị trí 'JavaScript' trong description:", positionJSInDesc); // → 10