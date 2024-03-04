## Programlamada Sayılar ve İkili Taban Sistemi (Binary)

Bilgisayarlar, sayıları ikili taban sisteminde (binary) işler. Bu sistemde, sadece 0 ve 1 rakamları kullanılır.

**Sayı Türleri:**

Programlamada farklı sayı türleri kullanılır:

* **Tam Sayılar:** Ondalıklı olmayan sayılardır. Örnek: 1, 2, 3, -10.
* **Ondalıklı Sayılar:** Ondalık basamak içeren sayılardır. Örnek: 3.14, -5.25.
* **Karmaşık Sayılar:** Gerçek ve sanal kısımdan oluşan sayılardır. Örnek: 2 + 3i, 4 - 5i.

**İkili Taban Sistemi:**

İkili taban sisteminde, her basamak 2'nin bir kuvvetini temsil eder. Sağdan sola doğru, 2^0, 2^1, 2^2, ... şeklinde artar.

Örnek:

* 1001 sayısı, 1 * 2^3 + 0 * 2^2 + 0 * 2^1 + 1 * 2^0 = 8 + 1 = 9 sayısına eşittir.
* 1101 sayısı, 1 * 2^3 + 1 * 2^2 + 0 * 2^1 + 1 * 2^0 = 8 + 4 + 1 = 13 sayısına eşittir.

**Sayıların İkili Gösterimi:**

Ondalık bir sayıyı ikili sisteme dönüştürmek için şu adımları izleyebilirsiniz:

1. Sayıyı 2'ye bölün.
2. Bölüm sonucunu tekrar 2'ye bölün.
3. Bu işlemi kalan 0 olana kadar devam ettirin.
4. Kalanları sağdan sola doğru sıralayın.

Örnek:

10 sayısını ikili sisteme dönüştürmek için:

10 / 2 = 5 (kalan 0)
5 / 2 = 2 (kalan 1)
2 / 2 = 1 (kalan 0)
1 / 2 = 0 (kalan 1)

Kalanları sağdan sola doğru sıralayınca: 1010

**Programlamada İkili Taban Sistemi:**

Programlamada, sayıları ikili gösterimde kullanmanın birçok avantajı vardır:

* Bellekte daha az yer kaplarlar.
* İşlemci tarafından daha hızlı işlenirler.
* Bitwise işlemler için kullanılırlar.

**Örnek Kod:**

```javascript
// 10 sayısını ikili sisteme dönüştürme
var num = 10;
var binaryStr = "";

while (num > 0) {
  binaryStr += num % 2;
  num = Math.floor(num / 2);
}

binaryStr = binaryStr.split("").reverse().join("");
console.log(binaryStr); // 1010

// Bitwise işlemler
var a = 5; // 0101
var b = 3; // 0011

var andResult = a & b; // 0001
var orResult = a | b; // 0111
var xorResult = a ^ b; // 0110

console.log(andResult); // 1
console.log(orResult); // 7
console.log(xorResult); // 6
```

**Özet:**

* Programlamada farklı sayı türleri kullanılır.
* İkili taban sistemi, bilgisayarlarda sayıları temsil etmek için kullanılır.
* Sayıları ikili sisteme dönüştürmek için basit bir algoritma kullanılabilir.
* İkili taban sisteminin programlamada birçok avantajı vardır.
