# Javascript Dilinde startsWith() Metodu

**startsWith()** metodu, bir dizinin belirli bir dizeyle başlayıp başlamadığını kontrol etmenizi sağlar. Dizeyle başlıyorsa **true**, başlamıyorsa **false** döndürür.

**Kullanım Alanları:**

* Bir metnin belirli bir kelime veya ifadeyle başlayıp başlamadığını kontrol etmek
* Kullanıcıdan gelen girdinin geçerliliğini doğrulamak
* Veri filtreleme ve sıralama
* Metin işlemleri ve manipülasyonu

**Çalışma Mantığı:**

**startsWith()** metodu, arama yapmak için dizideki ilk karakterleri karşılaştırır. Aranan dize, dizinin ilk karakterleriyle tam olarak eşleşirse **true** döndürür. Eşleşme yoksa **false** döndürür.

**Örnek:**

```javascript
const str = "Merhaba Dünya";

console.log(str.startsWith("Merhaba")); // true
console.log(str.startsWith("Dünya")); // false
```

Bu örnekte, **str** değişkeni "Merhaba Dünya" metnini içerir. **startsWith()** metodu "Merhaba" ve "Dünya" için ayrı ayrı çalıştırılır. "Merhaba" metni **str** dizisinin ilk karakterleriyle eşleştiği için **true**, "Dünya" ise eşleşmediği için **false** döndürülür.

**Tablo:**

| Özellik | Açıklama |
|---|---|
| **Amaç** | Bir dizinin belirli bir dizeyle başlayıp başlamadığını kontrol etmek |
| **Dönüş Değeri** | Dizeyle başlıyorsa **true**, başlamıyorsa **false** |
| **Parametreler** | 1. Aranacak dize (zorunlu) 2. Aramanın başlangıç ​​noktası (isteğe bağlı) |
| **Büyük/Küçük Harf Duyarlılığı** | Evet |
| **NaN Değeri** | Kullanılamaz |
| **Arama Yönü** | Soldan sağa |

**Ek Bilgiler:**

* **startsWith()** metodu, dizinin ilk karakterinden aramaya başlar.
* **startsWith()** metoduna ikinci bir parametre göndererek aramanın başlangıç ​​noktasını belirleyebilirsiniz.
* **startsWith()** metodu, `String.prototype` üzerinde bir yöntemdir. Bu nedenle, herhangi bir metin üzerinde kullanılabilir.

**Daha fazla bilgi için:**

* MDN Web Docs: startsWith(): [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith)
* W3Schools: startsWith(): [geçersiz URL kaldırıldı]

**Detaylı Örnekler:**

```javascript
// 1. Örnek: Bir metnin belirli bir kelimeyle başlayıp başlamadığını kontrol etmek

const str = "Merhaba Dünya";

console.log(str.startsWith("Merhaba")); // true

if (str.startsWith("Merhaba")) {
  console.log("Metin 'Merhaba' ile başlıyor.");
} else {
  console.log("Metin 'Merhaba' ile başlamıyor.");
}
```

Bu örnekte, **str** değişkeni "Merhaba Dünya" metnini içerir. **startsWith()** metodu **str** üzerinde çalıştırılır ve "Merhaba" ile başladığı için **true** döndürülür. **if** bloğu çalışır ve "Metin 'Merhaba' ile başlıyor." mesajı yazdırılır.

```javascript
// 2. Örnek: Kullanıcıdan gelen girdinin geçerliliğini doğrulamak

const input = prompt("Lütfen adınızı giriniz:");

if (input.startsWith("a")) {
  console.log("Girilen isim 'a' harfi ile başlıyor.");
} else {
  console.log("Girilen isim 'a' harfi ile başlamıyor.");
}
```

Bu örnekte, kullanıcıdan **input** değişkeni aracılığıyla adı istenir. **startsWith()** metodu **input** üzerinde çalıştırılır ve "a" harfi ile başladığı için **true** döndürülür. 