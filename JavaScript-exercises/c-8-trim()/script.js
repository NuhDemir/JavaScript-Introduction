const str1 = "   Merhaba Dünya!   ";
console.log(str1.length); // 21
console.log(str1.trim().length); // 15

const str2 = "Merhaba\nDünya!";
console.log(str2.trim()); // "Merhaba Dünya!"

const email = "    johndoe@example.com    ";
const trimmedEmail = email.trim();
console.log(trimmedEmail); // "johndoe@example.com"

const name = "   Ali Can   ";
const trimmedName = name.trim().toUpperCase();
console.log(trimmedName); // "ALI CAN"