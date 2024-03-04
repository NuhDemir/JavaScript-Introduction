const str = "Merhaba Dünya!";
const index = str.search("Dünya"); // 7

const str1 = "Merhaba Dünya!";
const index1 = str.search("dünya"); // 7

const str2 = "Merhaba Dünya!";
const index2 = str2.search(/dünya/i); // 7

const str3 = "Merhaba Dünya! Dünya";
const index3 = str.search(/d.nya/); // 7

const str4 = "Merhaba Dünya! Dünya";
const index4 = str2.search(/Dünya/i); 