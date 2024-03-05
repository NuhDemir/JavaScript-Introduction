const data = "isim:Ahmet,yaş:25";
const name = data.sub(0, 5); // "isim:" ayıklanır.
const age = data.sub(9, 2); // "25" ayıklanır.

console.log(name, age); // Yazdırır: "isim: 25"

const dateString = "2023-11-16";
const year = dateString.sub(0, 4); // "2023" ayıklanır.
const month = dateString.sub(5, 2); // "11" ayıklanır.
const day = dateString.sub(8, 2); // "16" ayıklanır.

console.log(year, month, day); // Yazdırır: "2023 11 16"