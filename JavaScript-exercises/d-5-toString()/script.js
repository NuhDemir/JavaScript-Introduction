const date = new Date();
const str4 = date.toString();
console.log(str4); // "Tue Mar 07 2023 15:29:01 GMT+0300 (Türkiye Saati)"

const array = [1, 2, 3];
const str5 = array.toString();
console.log(str5); // "1,2,3"

const nullValue = null;
const str6 = nullValue.toString();
console.log(str6); // "null"

const number = 123;
const str = number.toString();
console.log(str); // "123"

const bool = true;
const str2 = bool.toString();
console.log(str2); // "true"

const obj = { name: "John Doe" };
const str3 = obj.toString();
console.log(str3); // "[object Object]"