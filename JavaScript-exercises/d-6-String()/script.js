const number = 123;
const str = String(number); // "123"

const bool = true;
const str2 = String(bool); // "true"

const obj = { name: "John Doe" };
const str3 = String(obj); // "[object Object]"

const date = new Date();
const str4 = String(date); // "Tue Mar 07 2023 15:29:01 GMT+0300 (Türkiye Saati)"

const array = [1, 2, 3];
const str5 = String(array); // "1,2,3"

const nullValue = null;
const str6 = String(nullValue); // "null"