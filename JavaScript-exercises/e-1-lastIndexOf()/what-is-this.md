## JavaScript lastIndexOf() Metodu:

**lastIndexOf() metodu**, bir metin içinde belirli bir karakterin veya alt metnin son bulunduğu indeksi döndürür. Bulunamadığında -1 döner.

**Örnek:**

```javascript
const str = "Merhaba Dünya! Dünya";
const index = str.lastIndexOf("Dünya"); // 15
```

**Çıktı:**

```
15
```

**lastIndexOf() metodunun bazı önemli noktaları:**

* **Büyük/küçük harf duyarlılığı:** lastIndexOf() metodu, büyük/küçük harf duyarlıdır.
* **Başlangıç ​​indeksi:** lastIndexOf() metoduna opsiyonel bir başlangıç ​​indeksi parametresi geçebilirsiniz. Arama bu indeksten itibaren başlayacak ve ters yönde ilerleyecektir.
* **Bulunamadı:** Aranan karakter veya alt metin bulunamadıysa, lastIndexOf() metodu -1 döndürür.
* **Tüm tarayıcılar tarafından desteklenmez:** lastIndexOf() metodu, ECMAScript 1'den beri mevcuttur. Bu nedenle, tüm tarayıcılar tarafından desteklenir.

**Örnek Kullanım Alanları:**

* Metin arama
* Alt metinleri bulma
* Karakterlerin konumlarını belirleme
* Hata ayıklama

**Ekstra Örnekler:**

```javascript
const str = "Merhaba Dünya! Dünya";
const index2 = str.lastIndexOf("Dünya", 8); // 7

const str2 = "Merhaba Dünya!";
const index3 = str2.lastIndexOf("x"); // -1

const str3 = "";
const index4 = str3.lastIndexOf("Merhaba"); // -1

const str1 = "Merhaba Dünya! Dünya";
const index = str1.lastIndexOf("Dünya"); // 15
```

**Detaylı Kaynakça:**

* **MDN Web Docs:** String.prototype.lastIndexOf(): [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf)
* **W3Schools:** JavaScript lastIndexOf() Method: [https://www.w3schools.com/js/js_string_methods.asp](https://www.w3schools.com/js/js_string_methods.asp)


**Ek Bilgiler:**

* lastIndexOf() metodu, RegExp nesneleri ile de kullanılabilir.
* lastIndexOf() metodu, `includes()` ve `endsWith()` metodlarına benzer işlevlere sahiptir.
