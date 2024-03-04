## JavaScript'te repeat() Özelliği

**repeat()** özelliği, bir metni belirli sayıda tekrarlamak için kullanılır. Bu sayede, bir metni birden fazla kez yazmadan kolayca çoğaltabilirsiniz.

**Örnek:**

```javascript
const str = "Merhaba";

// Metni 3 kez tekrarla
const repeatedStr = str.repeat(3);
console.log(repeatedStr); // "MerhabaMerhabaMerhaba"

// Tekrarlama sayısı 0 veya negatif ise boş metin döner
const emptyStr = str.repeat(0);
console.log(emptyStr); // ""
```

**Çıktı:**

```
MerhabaMerhabaMerhaba
```

**repeat() özelliğinin bazı önemli noktaları:**

* **Orijinal metni değiştirmez:** repeat() özelliği, orijinal metni değiştirmez. Yeni bir metin oluşturur ve tekrarlanan metni içerir.
* **Parametre:** repeat() özelliği tek bir parametre alır:
    * **Tekrarlama sayısı:** Metnin tekrarlanma sayısını belirten bir tamsayı.
* **Tüm tarayıcılar tarafından desteklenmez:** repeat() özelliği, ECMAScript 6'da tanıtıldı. Bu nedenle, eski tarayıcılar tarafından desteklenmeyebilir.

**Örnek Kullanım Alanları:**

* Metinleri çoğaltma
* Desenler oluşturma
* Boşluklar oluşturma
* Doldurma efektleri oluşturma

**Ekstra Örnekler:**

```javascript
const stars = "*";

// 10 tane yıldız yazdır
console.log(stars.repeat(10)); // "**********"

const line = "-";

// 50 tane çizgi yazdır
console.log(line.repeat(50)); // "--------------------------------------------------"

const message = "Tekrarlanan metin: ";

// Mesajı 5 kere tekrarla
const repeatedMessage = message.repeat(5);
console.log(repeatedMessage); // "Tekrarlanan metin: Tekrarlanan metin: Tekrarlanan metin: Tekrarlanan metin: Tekrarlanan metin: "
```

**Daha Fazla Bilgi:**

* String.prototype.repeat() - JavaScript | MDN: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)
* JavaScript String repeat() Method - W3Schools: [geçersiz URL kaldırıldı]

**Karşılaştırma:**

**repeat()** ve **join()** fonksiyonları bir metni tekrarlamak için kullanılabilir. Fakat bazı farkları vardır:

* **Parametreler:** repeat() fonksiyonu sadece bir parametre alırken join() fonksiyonu iki parametre alır.
* **Ayırıcı:** join() fonksiyonu, tekrarlanan öğeler arasına bir ayırıcı eklemenize izin verir. repeat() fonksiyonunda böyle bir özellik yoktur.
* **Dizi değişimi:** repeat() fonksiyonu orijinal diziyi değiştirmezken join() fonksiyonu orijinal diziyi değiştirir.

Genellikle, repeat() fonksiyonu join() fonksiyonuna göre daha kullanışlıdır. Özellikle, metni birden fazla kez tekrarlamak ve orijinal metni korumak istediğiniz durumlarda repeat() fonksiyonunu kullanmalısınız.
