const str1 = "Bu metin 12345 gibi sayılar içeriyor.";

const newStr = str1.replace(/\d/g, "");

document.write(newStr); // "Bu metin  gibi sayılar içeriyor."

const str = "Merhaba Dünya!";

document.write(str.replace(/!/g, "?")); // "Merhaba Dünya?"
document.write(str.replace(/Dünya/g, "Evren")); // "Merhaba Evren!"