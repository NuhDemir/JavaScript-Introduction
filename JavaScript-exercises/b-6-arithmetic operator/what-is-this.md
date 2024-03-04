## JavaScript Aritmetik Operatörleri

JavaScript'te, sayılar üzerinde matematiksel işlemler gerçekleştirmek için kullanılan bir dizi aritmetik operatör bulunur. Bu operatörler, iki veya daha fazla operant (değer veya değişken) üzerinde işlem yapar ve sonucu bir değer olarak döndürür.

**Aritmetik Operatörler:**

* `+`: Toplama operatörü. İki operantı toplar ve sonucu döndürür.
* `-`: Çıkarma operatörü. Soldaki operanttan sağdaki operantı çıkarır ve sonucu döndürür.
* `*`: Çarpma operatörü. İki operantı çarpar ve sonucu döndürür.
* `/`: Bölme operatörü. Soldaki operantı sağdaki operanta böler ve sonucu döndürür.
* `%`: Mod alma operatörü. Soldaki operantın sağdaki operanta göre bölümünden kalanı döndürür.
* `++`: Birleştirme operatörü. Değişkenin değerini 1 artırır.
* `--`: Eksiltme operatörü. Değişkenin değerini 1 azaltır.

**Örnekler:**

```javascript
// Toplama
var x = 10;
var y = 5;

var sum = x + y; // sum = 15

// Çıkarma
var difference = x - y; // difference = 5

// Çarpma
var product = x * y; // product = 50

// Bölme
var quotient = x / y; // quotient = 2

// Mod alma
var remainder = x % y; // remainder = 0

// Birleştirme
x++; // x = 11

// Eksiltme
y--; // y = 4
```

**Kullanım Alanları:**

Aritmetik operatörler, aşağıdakiler de dahil olmak üzere çeşitli alanlarda kullanılır:

* **Hesaplamalar yapmak**
* **Değişkenlerin değerlerini güncellemek**
* **Koşul ifadelerinde**
* **Döngülerde**
* **Diziler ve nesneler üzerinde işlemler gerçekleştirmek**

**Önemli Noktalar:**

* Aritmetik operatörler, tamsayı, ondalıklı sayı ve Boolean gibi farklı veri türleri üzerinde kullanılabilir.
* Operatörlerin öncelik sırasını bilmek önemlidir.
* Karmaşık işlemler için parantez kullanarak öncelik sırasını netleştirmek önemlidir.

**Ek Kaynaklar:**

* JavaScript Aritmetik Operatörleri: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)
* Operatör Önceliği: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

**Ek Bilgiler:**

* Aritmetik operatörler, üslü sayıları hesaplamak için de kullanılabilir. Örneğin, `2 ** 3` ifadesi 2'nin 3. kuvvetini (8) verir.
* Negatif sayılarla çalışırken dikkatli olunmalıdır. Örneğin, `-5 + 3` ifadesi -2 sonucunu verir.
* Bölme işleminde, sağdaki operant 0 ise hata oluşur.