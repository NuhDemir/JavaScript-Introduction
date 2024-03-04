## JavaScript Karşılaştırma Operatörleri

JavaScript'te, iki değer arasında çeşitli ilişkileri kontrol etmek için kullanılan bir dizi karşılaştırma operatörü bulunur. Bu operatörler, true veya false değerini döndüren mantıksal ifadeler oluşturmak için kullanılır.

**Karşılaştırma Operatörleri:**

* `==`: Eşitlik operatörü. İki operantın değerlerinin eşit olup olmadığını kontrol eder.
* `===`: Hem değer hem de tür eşitliği operatörü. İki operantın değerlerinin ve türlerinin eşit olup olmadığını kontrol eder.
* `!=`: Eşitsizlik operatörü. İki operantın değerlerinin eşit olup olmadığını kontrol eder ve eşit değilse true döndürür.
* `!==`: Hem değer hem de tür eşitsizliği operatörü. İki operantın değerlerinin ve türlerinin eşit olup olmadığını kontrol eder ve eşit değilse true döndürür.
* `<`: Küçükten büyüklüğe operatörü. Soldaki operantın sağdaki operanttan küçük olup olmadığını kontrol eder.
* `<=`: Küçük veya eşit operatörü. Soldaki operantın sağdaki operanta eşit veya küçük olup olmadığını kontrol eder.
* `>`: Büyükten küçüklüğe operatörü. Soldaki operantın sağdaki operanttan büyük olup olmadığını kontrol eder.
* `>=`: Büyük veya eşit operatörü. Soldaki operantın sağdaki operanta eşit veya büyük olup olmadığını kontrol eder.

**Örnekler:**

```javascript
// Eşitlik
var x = 10;
var y = "10";

console.log(x == y); // true

// Hem değer hem de tür eşitliği
console.log(x === y); // false

// Eşitsizlik
console.log(x != y); // false

// Hem değer hem de tür eşitsizliği
console.log(x !== y); // true

// Küçükten büyüklüğe
console.log(x < y); // false

// Küçük veya eşit
console.log(x <= y); // true

// Büyükten küçüklüğe
console.log(x > y); // false

// Büyük veya eşit
console.log(x >= y); // true
```

**Kullanım Alanları:**

Karşılaştırma operatörleri, aşağıdakiler de dahil olmak üzere çeşitli alanlarda kullanılır:

* **Koşul ifadelerinde:** Bir kod bloğunun ne zaman yürütüleceğini belirlemek için.
* **Döngülerde:** Döngünün ne zaman durdurulacağını belirlemek için.
* **Fonksiyonlarda:** Argümanların geçerliliğini kontrol etmek için.
* **Diziler ve nesneler üzerinde işlemler gerçekleştirmek için.**

**Önemli Noktalar:**

* Karşılaştırma operatörleri, tamsayı, ondalıklı sayı, metin ve Boolean gibi farklı veri türleri üzerinde kullanılabilir.
* Operatörlerin öncelik sırasını bilmek önemlidir.
* Karmaşık işlemler için parantez kullanarak öncelik sırasını netleştirmek önemlidir.

**Ek Kaynaklar:**

* JavaScript Karşılaştırma Operatörleri: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)

