const numbers = [1, 2, 3];
const letters = ["a", "b", "c"];

// Diziyi sayılarla ve harflerle birleştir
const allData = numbers.concat(letters, true);
document.write(allData); // [1, 2, 3, "a", "b", "c", true]

const obj1 = { name: "John Doe" };
const obj2 = { age: 30 };

// Nesneleri birleştir
const combinedObj = obj1.concat(obj2); // Hata: concat() nesneleri birleştiremez

// Nesneleri birleştirmek için spread operatörünü kullanın
const combinedObj2 = {...obj1, ...obj2};
document.write(combinedObj2); // {name: "John Doe", age: 30}
/*-----------------------------------------------*/
const fruits = ["elma", "armut"];
const vegetables = ["havuç", "patates"];

// İki diziyi birleştir
const allFood = fruits.concat(vegetables);
document.write(allFood); // ["elma", "armut", "havuç", "patates"]

const str1 = "Merhaba";
const str2 = " Dünya!";

// İki metni birleştir
const fullStr = str1.concat(str2);
document.write(fullStr); // "Merhaba Dünya!"