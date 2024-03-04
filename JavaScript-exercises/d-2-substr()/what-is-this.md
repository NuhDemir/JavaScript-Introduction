## JavaScript'te substr() Özelliği

**substr()** özelliği, bir metnin belirli bir bölümünü ayıklamak için kullanılır. Bu sayede, bir metnin başlangıç ​​indeksi ve karakter sayısı belirterek o kısmı yeni bir metin olarak alabilirsiniz.

**Örnek:**

```javascript
const str = "Merhaba Dünya!";

// 7. indexten başlayarak 5 karakteri ayıkla
const newStr = str.substr(7, 5);
console.log(newStr); // "Dünya"

// Başlangıç ​​indeksi 0 olarak varsayılır
const firstWord = str.substr(0, 7);
console.log(firstWord); // "Merhaba"

// Karakter sayısı opsiyoneldir. Belirtilmezse dizinin sonuna kadar ayıklar.
const lastWord = str.substr(7);
console.log(lastWord); // "Dünya!"
```

**Çıktı:**

```
Dünya
Merhaba
Dünya!
```

**substr() özelliğinin bazı önemli noktaları:**

* **Orijinal metni değiştirmez:** substr() özelliği, orijinal metni değiştirmez. Yeni bir metin oluşturur ve ayıklanan kısmı içerir.
* **Negatif indeksler:** Negatif indeksler kullanılamaz.
* **Parametreler:** substr() özelliği iki parametre alır:
    * **Başlangıç ​​indeksi:** Ayıklama işleminin başlayacağı karakterin indeksi.
    * **Karakter sayısı (opsiyonel):** Ayıklanacak karakterlerin sayısı.
* **Tüm tarayıcılar tarafından desteklenmez:** substr() özelliği, ECMAScript 1'den beri mevcuttur. Bu nedenle, tüm tarayıcılar tarafından desteklenir.

**Örnek Kullanım Alanları:**

* Metin parçalarını ayıklama
* Metinleri kısaltma
* Metinleri birleştirme
* Yeni metinler oluşturma

**Ekstra Örnekler:**

```javascript
const email = "johndoe@example.com";

// Kullanıcı adını ayıkla
const username = email.substr(0, email.indexOf("@"));
console.log(username); // "johndoe"

// Alan adını ayıkla
const domain = email.substr(email.indexOf("@") + 1);
console.log(domain); // "example.com"

// Metni büyük harfe çevir ve ilk 10 karakteri ayıkla
const upperCaseStr = str.toUpperCase().substr(0, 10);
console.log(upperCaseStr); // "MERHABA D"
```

**Daha Fazla Bilgi:**

* String.prototype.substr() - JavaScript | MDN: [https://www.w3schools.com/jsref/jsref_substr.asp](https://www.w3schools.com/jsref/jsref_substr.asp)
* JavaScript String substr() Method - W3Schools: [https://www.w3schools.com/jsref/jsref_substr.asp](https://www.w3schools.com/jsref/jsref_substr.asp)

**Karşılaştırma:**

**slice()** ve **substr()** fonksiyonları bir metnin belirli bir bölümünü ayıklamak için kullanılır. Fakat bazı farkları vardır:

* **Parametreler:** slice() fonksiyonu 3 parametre alırken substr() fonksiyonu 2 parametre alır.
* **Negatif indeksler:** slice() fonksiyonunda negatif indeksler kullanılabilirken substr() fonksiyonunda kullanılamaz.
* **Dizi değişimi:** slice() fonksiyonu orijinal diziyi değiştirmezken substr() fonksiyonu orijinal diziyi değiştirir.

Genellikle slice() fonksiyonu substr() fonksiyonuna göre daha kullanışlıdır.

**Not:** substr() fonksiyonu, slice() fonksiyonuna göre daha eski bir fonksiyondur. slice() fonksiyonu daha modern ve daha kullanışlıdır. Bu nedenle, yeni kodlarda substr() fonksiyonu yerine slice() fonksiyonunun kullanılması önerilmektedir.
