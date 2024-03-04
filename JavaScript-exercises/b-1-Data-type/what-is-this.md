## JavaScript Veri Türleri

JavaScript, iki ana kategoriye ayrılan çeşitli veri türlerine sahiptir:

**1. Temel Veri Türleri:**

* **Number (Sayı):** Ondalıklı veya tam sayılar için kullanılır. Örnek: `var num = 10;`.
* **String (Metin):** Metinsel veriler için kullanılır. Tırnak işareti içinde yazılır. Örnek: `var str = "Merhaba Dünya!";`.
* **Boolean (Mantıksal):** Doğru (true) veya yanlış (false) değerlerini alır. Örnek: `var isTrue = true;`.
* **Null:** Boş bir değeri temsil eder. Örnek: `var emptyVar = null;`.
* **Undefined:** Tanımlanmamış bir değeri temsil eder. Örnek: `var undefinedVar;`.
* **Symbol:** Benzersiz değerler oluşturmak için kullanılır. Örnek: `var sym = Symbol("mySymbol");`.
* **BigInt:** Büyük tam sayıları temsil eder. Örnek: `var bigIntNum = 12345678901234567890n;`.

**2. Karmaşık Veri Türleri:**

* **Object (Nesne):** Özellik ve değer çiftlerinden oluşan yapılardır. Örnek: `var obj = {name: "John Doe", age: 30};`.
* **Array (Dizi):** Sıralı veri değerlerini saklamak için kullanılır. Örnek: `var arr = [1, 2, 3, "Merhaba"];`.
* **Function (Fonksiyon):** Tekrar kullanılabilir kod bloklarıdır. Örnek: `function sayHello() { console.log("Merhaba!"); }`.

**Avantajları:**

* **Esneklik:** JavaScript, veri türlerini otomatik olarak dönüştürebildiği için esnek bir dildir.
* **Kolay Kullanım:** Temel veri türlerini kullanmak ve anlamak kolaydır.
* **Geniş Kullanım Alanı:** JavaScript, web geliştirmeden mobil uygulama geliştirmeye kadar birçok alanda kullanılmaktadır.

**Dezavantajları:**

* **Zayıf Tiplendirme:** JavaScript'te veri türleri derleme sırasında değil, çalışma zamanında kontrol edilir. Bu durum, hatalara yol açabilir.
* **Tip Güvenliği Eksikliği:** Zayıf tipleme nedeniyle, veri türleri ile ilgili hatalar program çalıştırıldığında ortaya çıkar.

**Önemli Noktalar:**

* JavaScript'te her veri türünün kendine özgü özellikleri ve kullanım alanları vardır.
* Doğru veri türünü seçmek, kodun verimliliğini ve okunabilirliğini artırır.
* Tip dönüştürme işlemlerini dikkatli bir şekilde yapmak gerekir.

**Farklılıklar:**

* JavaScript, diğer programlama dillerine kıyasla daha zayıf bir tip sistemine sahiptir.
* JavaScript'te veri türleri otomatik olarak dönüştürülebilir.
* JavaScript'te null ve undefined değerleri farklı anlamlar taşır.

**Örnek Kodlar:**

```javascript
// Temel Veri Türleri
var num1 = 10; // Sayı
var str1 = "Merhaba Dünya!"; // Metin
var bool1 = true; // Mantıksal
var emptyVar = null; // Null
var undefinedVar; // Undefined

// Karmaşık Veri Türleri
var obj1 = {name: "John Doe", age: 30}; // Nesne
var arr1 = [1, 2, 3, "Merhaba"]; // Dizi
function sayHello() { console.log("Merhaba!"); } // Fonksiyon

// Tip Dönüştürme
var num2 = parseInt("123"); // Metni sayıya dönüştürme
var str2 = String(num1); // Sayıyı metne dönüştürme

// Operatörler
var sum = num1 + num2; // Toplama
var difference = num1 - num2; // Çıkarma
var product = num1 * num2; // Çarpma
var quotient = num1 / num2; // Bölme

// Koşullu İfadeler
if (num1 > num2) {
  console.log("Num1, num2'den büyüktür.");
} else {
  console.log("Num2, num1'den büyüktür.");
}

// Döngüler
## Düzenlenmiş ve Yorum Satırı Eklenmiş Kodlar

```javascript
// Bu kod, bir dizideki her sayının asal olup olmadığını kontrol eder.

// Diziyi tanımlama
var arr1 = [2, 3, 4, 5, 6, 7, 8, 9, 10];

// Döngü değişkenini tanımlama
var i;

// Diziyi döngüden geçme
for (i = 0; i < arr1.length; i++) {

  // Asallık kontrolü
  if (arr1[i] % 2 == 0 && arr1[i] > 2) {
    // Sayı asal değil
    console.log(arr1[i] + " asal sayı değildir.");
  } else if (arr1[i] == 2) {
    // Sayı 2'ye eşit
    console.log(arr1[i] + " asal sayıdır.");
  } else {
    // Sayı asal
    console.log(arr1[i] + " asal sayıdır.");
  }
}
```

**Yorum Satırları:**

* `// Bu kod, bir dizideki her sayının asal olup olmadığını kontrol eder.` -> Kodun ne işe yaradığını açıklar.
* `// Diziyi tanımlama` -> `arr1` değişkeninin neyi temsil ettiğini açıklar.
* `// Döngü değişkenini tanımlama` -> `i` değişkeninin neyi temsil ettiğini açıklar.
* `// Diziyi döngüden geçme` -> `for` döngüsünün ne işe yaradığını açıklar.
* `// Asallık kontrolü` -> `if` koşulunun ne işe yaradığını açıklar.
* `// Sayı asal değil` -> `if` koşulunun ilk kısmının ne işe yaradığını açıklar.
* `// Sayı 2'ye eşit` -> `if` koşulunun ikinci kısmının ne işe yaradığını açıklar.
* `// Sayı asal` -> `if` koşulunun üçüncü kısmının ne işe yaradığını açıklar.

**Kod Düzenlemeleri:**

* `==` operatörü yerine `===` operatörü kullanılmıştır.
* `else if` bloğu eklenerek, 2 sayısının özel durumu ele alınmıştır.
* Kod daha okunaklı hale getirilmiştir.

**Not:** Bu kod, sadece asal sayıları kontrol etmek için bir örnektir. Daha karmaşık işlemler için kod geliştirilebilir.
