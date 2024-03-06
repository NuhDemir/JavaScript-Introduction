// Hedef toplam
const target = 9;

// Dizi
const numbers = [2, 7, 11, 15];

// Diziyi dolaşmak için bir sayaç
let i = 0;

// While döngüsü, sayaç dizinin uzunluğundan küçük olduğu sürece devam eder
while (i < numbers.length) {

  // Sayaçtan sonraki her sayı için
  for (let j = i + 1; j < numbers.length; j++) {

    // İki sayının toplamı hedefe eşitse
    if (numbers[i] + numbers[j] === target) {

      // Bulunan sayıları konsola yazdır
      console.log(`İki sayı bulundu: ${numbers[i]} ve ${numbers[j]}`);

      // Döngüden çık
      break;
    }
  }

  // Sayaç 1 artırılır
  i++;
}
