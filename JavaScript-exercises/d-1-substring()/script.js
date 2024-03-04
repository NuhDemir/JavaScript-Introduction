const str = "Merhaba Dünya!";

// 7. indexten başlayarak 5 karakteri ayıkla
const newStr = str.substring(7, 12);
console.log(newStr); // "Dünya"

// Başlangıç ​​indeksi 0 olarak varsayılır
const firstWord = str.substring(0, 7);
console.log(firstWord); // "Merhaba"

// Bitiş indeksi opsiyoneldir. Belirtilmezse dizinin sonuna kadar ayıklar.
const lastWord = str.substring(7);
console.log(lastWord); // "Dünya!