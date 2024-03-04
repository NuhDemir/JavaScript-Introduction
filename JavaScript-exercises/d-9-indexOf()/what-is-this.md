## JavaScript indexOf() Metodu: Örnekler ve Detaylı Kaynakça

**indexOf() metodu**, bir metin içinde belirli bir karakterin veya alt metnin ilk bulunduğu indeksi döndürür. Bulunamadığında -1 döner.

**Örnek:**

```javascript
const str = "Merhaba Dünya!";
const index = str.indexOf("Dünya"); // 7
```

**Çıktı:**

```
7
```

**indexOf() metodunun bazı önemli noktaları:**

* **Büyük/küçük harf duyarlılığı:** indexOf() metodu, büyük/küçük harf duyarlıdır.
* **Başlangıç ​​indeksi:** indexOf() metoduna opsiyonel bir başlangıç ​​indeksi parametresi geçebilirsiniz. Arama bu indeksten itibaren başlayacaktır.
* **Bulunamadı:** Aranan karakter veya alt metin bulunamadıysa, indexOf() metodu -1 döndürür.
* **Tüm tarayıcılar tarafından desteklenmez:** indexOf() metodu, ECMAScript 1'den beri mevcuttur. Bu nedenle, tüm tarayıcılar tarafından desteklenir.

**Örnek Kullanım Alanları:**

* Metin arama
* Alt metinleri bulma
* Karakterlerin konumlarını belirleme
* Hata ayıklama

**Ekstra Örnekler:**

```javascript
const str = "Merhaba Dünya! Dünya";
const index2 = str.indexOf("Dünya", 8); // 15

const str2 = "Merhaba Dünya!";
const index3 = str2.indexOf("x"); // -1

const str3 = "";
const index4 = str3.indexOf("Merhaba"); // -1
```

**Detaylı Kaynakça:**

* **MDN Web Docs:** String.prototype.indexOf(): [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)
* **W3Schools:** JavaScript indexOf() Method: [https://www.w3schools.com/js/js_string_methods.asp](https://www.w3schools.com/js/js_string_methods.asp)

**Ek Bilgiler:**

* indexOf() metodu, RegExp nesneleri ile de kullanılabilir.
* indexOf() metodu, `includes()` ve `startsWith()` metodlarına benzer işlevlere sahiptir.

