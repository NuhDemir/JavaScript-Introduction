## JavaScript unescape() Metodu

**unescape()** metodu, "%xx" biçiminde kodlanmış karakterleri, orijinal karakterlerine dönüştürerek bir dizeyi çözer.




## JavaScript Dilinde unescape() Metodu

| Özellik | Açıklama |
|---|---|
| **Amaç** | "%xx" biçiminde kodlanmış karakterleri orijinal karakterlerine dönüştürerek bir dizeyi çözmek. |
| **Kullanım Alanları** | HTML metinlerini çözmek, URL'leri çözmek, özel karakterleri HTML'den ayıklamak |
| **Çalışma Mantığı** | "%xx" biçiminde kodlanmış karakterleri orijinal karakterlerine dönüştürür. Burada xx, karakterin ondalık kodunun onaltılık gösterimidir. |
| **Örnekler** | |
| **HTML Metnini Çözmek** | |
| `const escapedText = "Merhaba%20D%C3%BCnya!"` | |
| `const text = unescape(escapedText)` | |
| `console.log(text)` | Yazdırır: "Merhaba Dünya!" |
| **URL'yi Çözmek** | |
| `const escapedUrl = "https%3A%2F%2Fwww.example.com%2F%3Fq%3DMerhaba%20D%C3%BCnya"` | |
| `const url = unescape(escapedUrl)` | |
| `console.log(url)` | Yazdırır: "[https://www.example.com/?q=Merhaba](https://www.example.com/?q=Merhaba) Dünya" |
| **Ek Örnekler** | |
| `const str = "Merhaba%20%3CD%C3%BCnya%3E"` | |
| `const unescapedStr = unescape(str)` | |
| `console.log(unescapedStr)` | Yazdırır: "Merhaba <Dünya>" |
| **Notlar** | |
| - **unescape()** metodu, **decodeURIComponent()** metoduna benzer şekilde çalışır. Fakat **unescape()** metodu, daha az sayıda karakteri çözer. | |
| - **unescape()** metodu, günümüzde **decodeURIComponent()** metoduna göre daha az tercih edilir. | |
| **Alternatif:** | |
| `const str = "Merhaba%20%3CD%C3%BCnya%3E"` | |
| `const decodedStr = decodeURIComponent(str)` | |
| `console.log(decodedStr)` | Yazdırır: "Merhaba <Dünya>" | |

**Ek Bilgiler:**

* **unescape()** metodu, günümüzde pek kullanılmamaktadır.
* **decodeURIComponent()** metodu, URL'leri çözmek için daha güvenli bir yöntemdir.






**Kullanım Alanları:**

* HTML metinlerini çözmek
* URL'leri çözmek
* Özel karakterleri HTML'den ayıklamak

**Çalışma Mantığı:**

**unescape()** metodu, bir dizedeki "%xx" biçiminde kodlanmış karakterleri orijinal karakterlerine dönüştürür. Burada xx, karakterin ondalık kodunun onaltılık gösterimidir.

**Detaylı Örnekler:**

**1. Örnek:** Bir HTML metnini çözmek

```javascript
const escapedText = "Merhaba%20D%C3%BCnya!";
const text = unescape(escapedText);

console.log(text); // "Merhaba Dünya!"
```

Bu örnekte, **escapedText** değişkeni HTML'de kodlanmış "Merhaba Dünya!" metnini içerir. **unescape()** metodu **escapedText** üzerinde çalıştırılır ve "%xx" biçiminde kodlanmış karakterleri orijinal karakterlerine dönüştürerek çözer.

**2. Örnek:** Bir URL'yi çözmek

```javascript
const escapedUrl = "https%3A%2F%2Fwww.example.com%2F%3Fq%3DMerhaba%20D%C3%BCnya";
const url = unescape(escapedUrl);

console.log(url); // "https://www.example.com/?q=Merhaba Dünya"
```

Bu örnekte, **escapedUrl** değişkeni HTML'de kodlanmış "[https://www.example.com/?q=Merhaba](https://www.example.com/?q=Merhaba) Dünya" URL'sini içerir. **unescape()** metodu **escapedUrl** üzerinde çalıştırılır ve "%xx" biçiminde kodlanmış karakterleri orijinal karakterlerine dönüştürerek çözer.

**Ek Örnekler:**

```javascript
const str = "Merhaba%20%3CD%C3%BCnya%3E";
const unescapedStr = unescape(str);

console.log(unescapedStr); // "Merhaba <Dünya>"
```

**Notlar:**

* **unescape()** metodu, **decodeURIComponent()** metoduna benzer şekilde çalışır. Fakat **unescape()** metodu, daha az sayıda karakteri çözer.
* **unescape()** metodu, günümüzde **decodeURIComponent()** metoduna göre daha az tercih edilir.

**Alternatif:**

```javascript
const str = "Merhaba%20%3CD%C3%BCnya%3E";
const decodedStr = decodeURIComponent(str);

console.log(decodedStr); // "Merhaba <Dünya>"
```
