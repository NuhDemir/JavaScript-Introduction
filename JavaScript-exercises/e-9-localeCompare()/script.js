
const str = "100.000";
const str2 = "1.000.000";

document.write(str.localeCompare(str2)); // -1

const str3 = "straße";
const str4 = "strasse";

document.write(str3.localeCompare(str4)); // 0

const fruits = ["elma", "pomme", "apple"];

fruits.sort((a, b) => a.localeCompare(b));

document.write(fruits); // ["apple", "elma", "po