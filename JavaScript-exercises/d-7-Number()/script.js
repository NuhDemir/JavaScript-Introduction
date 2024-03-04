const str = "123";
const num = Number(str); // 123

const bool = true;
const num2 = Number(bool); // 1

const obj = { name: "John Doe" };
const num3 = Number(obj); // NaN (Not a Number)

const date = new Date();
const num4 = Number(date); // NaN

const array = [1, 2, 3];
const num5 = Number(array); // NaN

const nullValue = null;
const num6 = Number(nullValue); // 0

const undefinedValue = undefined;
const num7 = Number(undefinedValue); // NaN