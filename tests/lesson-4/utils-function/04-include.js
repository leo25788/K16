const name = "Nguyễn Văn A";
const email = "example@gmail.com";
const productName = "MacBook Pro";
const description = "Khóa học JavaScript cơ bản";


// 1.1 Kiểm tra "Nguyễn" trong name
const hasNguyen = name.includes("Nguyễn");
console.log("1.1 name includes 'Nguyễn'? :", hasNguyen); // true

// 1.2 Kiểm tra "@" trong email
const hasAtSymbol = email.includes("@");
console.log("1.2 email includes '@'? :", hasAtSymbol); // true

// 1.3 Kiểm tra "Pro" trong productName
const hasPro = productName.includes("Pro");
console.log("1.3 productName includes 'Pro'? :", hasPro); // true