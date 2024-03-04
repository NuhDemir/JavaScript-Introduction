const str = "Merhaba Dünya";

document.write(str.charCodeAt(15)); // NaN

const str1 = "Merhaba Dünya";

document.write(str1.charCodeAt()); // 77

const str2 = "Merhaba Dünya!";

document.write(str2.charCodeAt(5)); // 97
document.write(str2.charCodeAt(12)); // 33

const str3 = "Merhaba Dünya";

const lastCharCode = str3.charCodeAt(str3.length - 1);

document.write(lastCharCode); // 97

const str4 = "Merhaba Dünya";

const firstCharCode = str4.charCodeAt(0);

document.write(firstCharCode); // 77