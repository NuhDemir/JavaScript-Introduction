## JavaScript Dilinde italic() Metodu

**Amaç:** Bir metni italik yapmak.

**Kullanım Alanları:**

* Metni vurgulamak
* Özel metinler oluşturmak
* Kitap isimleri ve alıntıları için metin oluşturmak

**Çalışma Mantığı:**

**italic()** metodu, bir metni HTML `<i>` etiketiyle sararak italik yapar.

**Kodlama Örnekleri:**

**1. Metni Vurgulamak:**

```javascript
const text = "Merhaba Dünya!";
const italicText = text.italic();

console.log(italicText); // Yazdırır: "<i>Merhaba Dünya!</i>"
```

**2. Özel Metinler Oluşturmak:**

```javascript
const quote = "Hayat kısa, sanat uzun.";
const italicQuote = quote.italic();

document.getElementById("quote").innerHTML = italicQuote;
```

**3. Kitap İsimleri ve Alıntılar için Metin Oluşturmak:**

```javascript
const bookTitle = "Savaş ve Barış";
const italicBookTitle = bookTitle.italic();

document.getElementsByTagName("h2")[0].innerHTML = italicBookTitle;
```

**Özet:**

| Özellik | Açıklama |
|---|---|
| **Amaç** | Bir metni italik yapmak. |
| **Kullanım Alanları** | Metni vurgulamak, özel metinler oluşturmak, kitap isimleri ve alıntıları için metin oluşturmak |
| **Çalışma Mantığı** | Bir metni HTML `<i>` etiketiyle sararak italik yapar. |

**Ek Bilgiler:**

* **italic()** metodu, CSS'nin `font-style` özelliğini kullanarak da yazı tipi stilini değiştirebilirsiniz.
* **italic()** metodu, modern tarayıcılarda pek kullanılmamaktadır.

**Karşılaştırma:**

| Metod | Etki | HTML Etiketi |
|---|---|---|
| **big()** | Metni büyütmek ve kalınlaştırmak | `<big>` |
| **small()** | Metni küçültmek | `<small>` |
| **bold()** | Metni kalınlaştırmak | `<b>` |
| **italic()** | Metni italik yapmak | `<i>` |

Umarım bu bilgiler JavaScript'te **italic()** metodunu anlamanıza yardımcı olmuştur.
