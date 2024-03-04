const date = new Date();
const num4 = date.valueOf(); // NaN

const array = [1, 2, 3];
const num5 = array.valueOf(); // NaN

const nullValue = null;
const num6 = nullValue.valueOf(); // null

const undefinedValue = undefined;
const num7 = undefinedValue.valueOf(); // undefined

const str = "123";
const num = str.valueOf(); // "123"

const bool = true;
const num2 = bool.valueOf(); // true

const obj = { name: "John Doe" };
const num3 = obj.valueOf(); // "[object Object]"