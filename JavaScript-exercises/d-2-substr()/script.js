const email = "johndoe@example.com";

// Kullanıcı adını ayıkla
const username = email.substr(0, email.indexOf("@"));
console.log(username); // "johndoe"

// Alan adını ayıkla
const domain = email.substr(email.indexOf("@") + 1);
console.log(domain); // "example.com"

// Metni büyük harfe çevir ve ilk 10 karakteri ayıkla
const upperCaseStr = str.toUpperCase().substr(0, 10);
console.log(upperCaseStr); // "MERHABA D"

const str = "Merhaba Dünya!";

// 7. indexten başlayarak 5 karakteri ayıkla
const newStr = str.substr(7, 5);
console.log(newStr); // "Dünya"

// Başlangıç ​​indeksi 0 olarak varsayılır
const firstWord = str.substr(0, 7);
console.log(firstWord); // "Merhaba"

// Karakter sayısı opsiyoneldir. Belirtilmezse dizinin sonuna kadar ayıklar.
const lastWord = str.substr(7);
console.log(lastWord); // "Dünya!"