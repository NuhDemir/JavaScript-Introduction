## Javascript Dilinde endsWith() Metodu

**endsWith()** metodu, bir dizinin belirli bir dizeyle bitip bitmediğini kontrol etmenizi sağlar. Dizeyle bitiyorsa **true**, bitmiyorsa **false** döndürür.

**Kullanım Alanları:**

* Bir metnin belirli bir kelime veya ifadeyle bitip bitmediğini kontrol etmek
* Kullanıcıdan gelen girdinin geçerliliğini doğrulamak
* Veri filtreleme ve sıralama
* Metin işlemleri ve manipülasyonu

**Çalışma Mantığı:**

**endsWith()** metodu, arama yapmak için dizideki son karakterleri karşılaştırır. Aranan dize, dizinin son karakterleriyle tam olarak eşleşirse **true** döndürür. Eşleşme yoksa **false** döndürür.

**Tablo:**

| Özellik | Açıklama |
|---|---|
| **Amaç** | Bir dizinin belirli bir dizeyle bitip bitmediğini kontrol etmek |
| **Dönüş Değeri** | Dizeyle bitiyorsa **true**, bitmiyorsa **false** |
| **Parametreler** | 1. Aranacak dize (zorunlu) 2. Aramanın başlangıç ​​noktası (isteğe bağlı) |
| **Büyük/Küçük Harf Duyarlılığı** | Evet |
| **NaN Değeri** | Kullanılamaz |
| **Arama Yönü** | Sağdan sola |

**Ek Bilgiler:**

* **endsWith()** metodu, dizinin son karakterinden aramaya başlar.
* **endsWith()** metoduna ikinci bir parametre göndererek aramanın başlangıç ​​noktasını belirleyebilirsiniz.
* **endsWith()** metodu, `String.prototype` üzerinde bir yöntemdir. Bu nedenle, herhangi bir metin üzerinde kullanılabilir.

**Daha fazla bilgi için:**

* MDN Web Docs: endsWith(): [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith)
* W3Schools: endsWith(): [geçersiz URL kaldırıldı]

**Detaylı Örnekler:**

```javascript
// 1. Örnek: Bir metnin belirli bir kelimeyle bitip bitmediğini kontrol etmek

const str = "Merhaba Dünya";

document.write(str.endsWith("Dünya")); // true

if (str.endsWith("Dünya")) {
  document.write("Metin 'Dünya' ile bitiyor.");
} else {
  document.write("Metin 'Dünya' ile bitmiyor.");
}
```

Bu örnekte, **str** değişkeni "Merhaba Dünya" metnini içerir. **endsWith()** metodu **str** üzerinde çalıştırılır ve "Dünya" ile bittiği için **true** döndürülür. **if** bloğu çalışır ve "Metin 'Dünya' ile bitiyor." mesajı yazdırılır.

```javascript
// 2. Örnek: Kullanıcıdan gelen girdinin geçerliliğini doğrulamak

const input = prompt("Lütfen e-posta adresinizi giriniz:");

if (input.endsWith(".com")) {
  document.write("Girilen e-posta adresi '.com' ile bitiyor.");
} else {
  document.write("Girilen e-posta adresi '.com' ile bitmiyor.");
}
```

Bu örnekte, kullanıcıdan **input** değişkeni aracılığıyla e-posta adresi istenir. **endsWith()** metodu **input** üzerinde çalıştırılır ve ".com" ile bittiği için **true** döndürülür. **if** bloğu çalışır ve "Girilen e-posta adresi '.com' ile bitiyor." mesajı yazdırılır.

**Ek Örnekler:**

```javascript
const str = "Merhaba Dünya!";

document.write(str.endsWith("!")); // true
document.write(str.endsWith("Dünya", 12)); // true
document.write(str.endsWith("Merhaba", 5)); // false
```

**Not:** **endsWith()** metodu, büyük/küçük harf duyarlıdır.

