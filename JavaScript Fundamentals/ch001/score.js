const scoreDolphins = [96, 108, 89];
const scoreKoalas = [88, 91, 110];

let averageDolphins = 0;
let averageKoalas = 0;

let i = 0;

// Dolphins için toplam hesaplama
while (i < scoreDolphins.length) {
  averageDolphins += scoreDolphins[i];
  i++;
}

// Ortalama hesaplama
averageDolphins /= scoreDolphins.length;

i = 0; // Koalas için sıfırdan başlat

// Koalas için toplam hesaplama
while (i < scoreKoalas.length) {
  averageKoalas += scoreKoalas[i];
  i++;
}

// Ortalama hesaplama
averageKoalas /= scoreKoalas.length;

if (averageDolphins > averageKoalas) {
  console.log("Dolphins win the trophy");
} else if (averageDolphins == averageKoalas) {
  console.log("Both win the trophy");
} else {
  console.log("Koalas win the trophy");
}

console.log("Dolphins'in ortalama skoru:", averageDolphins);
console.log("Koalas'in ortalama skoru:", averageKoalas);
