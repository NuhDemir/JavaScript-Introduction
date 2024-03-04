## JavaScript Dilinde match() Metodu

**match()** metodu, bir dizinin belirli bir desenle eşleşip eşleşmediğini kontrol etmenizi sağlar. Eşleşme varsa, eşleşen öğelerin bir dizisini içeren bir **RegExpResult** nesnesi döndürür. Eşleşme yoksa **null** döndürür.

**Kullanım Alanları:**

* Bir metnin belirli bir kelime veya ifadeyi içerip içermediğini kontrol etmek
* Veri ayıklama ve metin işleme
* Kullanıcıdan gelen girdinin geçerliliğini doğrulamak
* Dinamik içerik oluşturma

**Çalışma Mantığı:**

**match()** metodu, arama yapmak için bir **RegExp** nesnesi kullanır. **RegExp** nesnesi, bir desenin nasıl temsil edileceğini tanımlar. **match()** metodu, dizeyi **RegExp** nesnesiyle karşılaştırır ve eşleşen tüm öğeleri bir **RegExpResult** nesnesinde toplar.

**Tablo:**

| Özellik | Açıklama |
|---|---|
| **Amaç** | Bir dizinin belirli bir desenle eşleşip eşleşmediğini kontrol etmek |
| **Dönüş Değeri** | Eşleşme varsa eşleşen öğelerin bir dizisini içeren bir **RegExpResult** nesnesi, yoksa **null** |
| **Parametreler** | 1. Aranacak desen (**RegExp** nesnesi veya dize) |
| **Büyük/Küçük Harf Duyarlılığı** | **RegExp** nesnesinin ayarlarına bağlıdır |
| **NaN Değeri** | Kullanılamaz |
| **Arama Yönü** | Soldan sağa |

**Ek Bilgiler:**

* **match()** metodu, dizinin tamamını veya bir kısmını arayabilir.
* **match()** metodu, birden fazla eşleşmeyi de bulabilir.
* **RegExpResult** nesnesi, eşleşen öğelere ve ilgili bilgilere erişmenizi sağlar.

**Daha fazla bilgi için:**

* MDN Web Docs: match(): [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)
* W3Schools: match(): [geçersiz URL kaldırıldı]

**Detaylı Örnekler:**

```javascript
// 1. Örnek: Bir metnin belirli bir kelimeyi içerip içermediğini kontrol etmek

const str = "Merhaba Dünya";

const regex = /Merhaba/;

const result = str.match(regex);

if (result) {
  console.log("Metin 'Merhaba' kelimesini içeriyor.");
} else {
  console.log("Metin 'Merhaba' kelimesini içermiyor.");
}
```

Bu örnekte, **str** değişkeni "Merhaba Dünya" metnini içerir. **regex** değişkeni, "Merhaba" kelimesini temsil eden bir **RegExp** nesnesi oluşturur. **match()** metodu **str** üzerinde çalıştırılır ve "Merhaba" kelimesini bulduğu için bir **RegExpResult** nesnesi döndürür. **if** bloğu çalışır ve "Metin 'Merhaba' kelimesini içeriyor." mesajı yazdırılır.

```javascript
// 2. Örnek: Bir metinden e-posta adreslerini ayıklamak

const str = "Bu metin johndoe@example.com ve janedoe@example.com gibi e-posta adresleri içeriyor.";

const regex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/;

const result = str.match(regex);

console.log(result); // ["johndoe@example.com", "janedoe@example.com"]
```

Bu örnekte, **str** değişkeni e-posta adresleri içeren bir metin içerir. **regex** değişkeni, e-posta adreslerini temsil eden bir **RegExp** nesnesi oluşturur. **match()** metodu **str** üzerinde çalıştırılır ve iki e-posta adresini de içeren bir **RegExpResult** nesnesi döndürür.

**Ek Örnekler:**

```javascript
const str = "Merhaba Dünya!";

console.log(str.match(/!/)); // ["!"]
console.log(str.match(/Dünya/)); // ["Dü