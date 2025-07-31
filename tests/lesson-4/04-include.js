const name = "Nguyễn Văn A";
const email = "example@gmail.com";
const productName = "MacBook Pro";
const description = "Khóa học JavaScript cơ bản";


// 1.1 Kiểm tra "Nguyễn" trong name
const isNameIncludes = name.includes("Nguyễn");
console.log("1.1 Name includes 'Nguyễn':", isNameIncludes); // true

// 1.2 Kiểm tra "@" trong email
const isEmailIncludes = email.includes("@");
console.log("1.2 Email includes '@':", isEmailIncludes); // true

// 1.3 Kiểm tra "Pro" trong productName
const isProductIncludes = productName.includes("Pro");
console.log("1.3 Product name includes 'Pro':", isProductIncludes); // true