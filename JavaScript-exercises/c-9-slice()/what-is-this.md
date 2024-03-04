## JavaScript'te slice() Özelliği

**slice()** özelliği, bir dizinin belirli bir bölümünü kopyalamak için kullanılır. Bu sayede, bir dizinin belirli bir bölümünü yeni bir dizi olarak alabilirsiniz.

**Örnek:**

```javascript
const fruits = ["elma", "armut", "muz", "portakal", "ananas"];

// 2. indexten başlayarak 3 öğeyi kopyala
const newFruits = fruits.slice(2, 5);
console.log(newFruits); // ["muz", "portakal", "ananas"]

// Başlangıç ​​indeksi 0, bitiş indeksi dizinin sonu
const allFruits = fruits.slice();
console.log(allFruits); // ["elma", "armut", "muz", "portakal", "ananas"]

// Bitiş indeksi opsiyoneldir. Belirtilmezse dizinin sonuna kadar kopyalar.
const lastFruit = fruits.slice(4);
console.log(lastFruit); // ["ananas"]
```

**Çıktı:**

```
["muz", "portakal", "ananas"]
["elma", "armut", "muz", "portakal", "ananas"]
["ananas"]
```

**slice() özelliğinin bazı önemli noktaları:**

* **Orijinal diziyi değiştirmez:** slice() özelliği, orijinal diziyi değiştirmez. Yeni bir dizi oluşturur ve kopyalanmış öğeleri içerir.
* **Negatif indeksler:** Negatif indeksler kullanarak dizinin sonundan başlayabilirsiniz. -1 son öğeyi, -2 sondan ikinci öğeyi vb. temsil eder.
* **Üçüncü parametre:** slice() özelliği, üçüncü bir parametre alarak kopyalama sırasında atlanacak öğelerin sayısını belirleyebilirsiniz.
* **Tüm tarayıcılar tarafından desteklenmez:** slice() özelliği, ECMAScript 5'te tanıtıldı. Bu nedenle, eski tarayıcılar tarafından desteklenmeyebilir.

**Örnek Kullanım Alanları:**

* Dizi parçalarını ayıklama
* Dizileri sıralama
* Dizileri filtreleme
* Yeni diziler oluşturma

**Ekstra Örnekler:**

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Çift sayıları içeren yeni bir dizi oluştur
const evenNumbers = numbers.slice(1, 9, 2);
console.log(evenNumbers); // [2, 4, 6, 8]

// Dizinin ilk ve son öğelerini sil
const trimmedNumbers = numbers.slice(1, -1);
console.log(trimmedNumbers); // [2, 3, 4, 5, 6, 7, 8, 9]

// Dizinin tersini oluştur
const reversedNumbers = numbers.slice().reverse();
console.log(reversedNumbers); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
```

**Daha Fazla Bilgi:**

* Array.prototype.slice() - JavaScript | MDN: [geçersiz URL kaldırıldı]
* JavaScript Array slice() Method - W3Schools: [https://www.w3schools.com/jsref/jsref_slice_array.asp](https://www.w3schools.com/jsref/jsref_slice_array.asp)
