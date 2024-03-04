const fruits = ["elma", "muz", "portakal"];

console.log(fruits.includes("muz", 1)); // true

// 3. Örnek: Bir öğenin bir listeye ait olup olmadığını kontrol etmek

const fruits1 = ["elma", "muz", "portakal"];
const selectedFruit = "muz";

console.log(fruits.includes(selectedFruit)); // true

if (fruits1.includes(selectedFruit)) {
  console.log(`${selectedFruit} seçilen meyveler arasında.`);
} else {
  console.log(`${selectedFruit} seçilen meyveler arasında değil.`);
}

// 2. Örnek: Birden fazla dizide arama yapmak

const fruits2 = ["elma", "muz", "portakal"];
const vegetables = ["havuç", "patates", "domates"];

const searchValue = "elma";

console.log(fruits2.includes(searchValue)); // true
console.log(vegetables.includes(searchValue)); // false