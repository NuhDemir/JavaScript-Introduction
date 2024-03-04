## JavaScript'te substring() Özelliği

**substring()** özelliği, bir dizinin belirli bir bölümünü ayıklamak için kullanılır. Bu sayede, bir dizinin başlangıç ​​ve bitiş indeksleri arasında kalan kısmı yeni bir metin olarak alabilirsiniz.

**Örnek:**

```javascript
const str = "Merhaba Dünya!";

// 7. indexten başlayarak 5 karakteri ayıkla
const newStr = str.substring(7, 12);
console.log(newStr); // "Dünya"

// Başlangıç ​​indeksi 0 olarak varsayılır
const firstWord = str.substring(0, 7);
console.log(firstWord); // "Merhaba"

// Bitiş indeksi opsiyoneldir. Belirtilmezse dizinin sonuna kadar ayıklar.
const lastWord = str.substring(7);
console.log(lastWord); // "Dünya!"
```

**Çıktı:**

```
Dünya
Merhaba
Dünya!
```

**substring() özelliğinin bazı önemli noktaları:**

* **Orijinal metni değiştirmez:** substring() özelliği, orijinal metni değiştirmez. Yeni bir metin oluşturur ve ayıklanan kısmı içerir.
* **Negatif indeksler:** Negatif indeksler kullanarak dizinin sonundan başlayabilirsiniz. -1 son karakteri, -2 sondan ikinci karakteri vb. temsil eder.
* **Parametreler:** substring() özelliği iki parametre alır:
    * **Başlangıç ​​indeksi:** Ayıklama işleminin başlayacağı karakterin indeksi.
    * **Bitiş indeksi (opsiyonel):** Ayıklama işleminin sona ereceği karakterin indeksi.
* **Tüm tarayıcılar tarafından desteklenmez:** substring() özelliği, ECMAScript 1'den beri mevcuttur. Bu nedenle, tüm tarayıcılar tarafından desteklenir.

**Örnek Kullanım Alanları:**

* Metin parçalarını ayıklama
* Metinleri kısaltma
* Metinleri birleştirme
* Yeni metinler oluşturma

**Ekstra Örnekler:**

```javascript
const email = "johndoe@example.com";

// Kullanıcı adını ayıkla
const username = email.substring(0, email.indexOf("@"));
console.log(username); // "johndoe"

// Alan adını ayıkla
const domain = email.substring(email.indexOf("@") + 1);
console.log(domain); // "example.com"

// Metni büyük harfe çevir ve ilk 10 karakteri ayıkla
const upperCaseStr = str.toUpperCase().substring(0, 10);
console.log(upperCaseStr); // "MERHABA D"
```

**Daha Fazla Bilgi:**

* String.prototype.substring() - JavaScript | MDN: [geçersiz URL kaldırıldı]
* JavaScript String substring() Method - W3Schools: [geçersiz URL kaldırıldı]

**Karşılaştırma:**

**slice()** ve **substring()** fonksiyonları bir dizinin belirli bir bölümünü ayıklamak için kullanılır. Fakat bazı farkları vardır:

* **Parametreler:** slice() fonksiyonu 3 parametre alırken substring() fonksiyonu 2 parametre alır.
* **Negatif indeksler:** slice() fonksiyonunda negatif indeksler kullanılabilirken substring() fonksiyonunda kullanılamaz.
* **Dizi değişimi:** slice() fonksiyonu orijinal diziyi değiştirmezken substring() fonksiyonu orijinal diziyi değiştirir.

Genellikle slice() fonksiyonu substring() fonksiyonuna göre daha kullanışlıdır.