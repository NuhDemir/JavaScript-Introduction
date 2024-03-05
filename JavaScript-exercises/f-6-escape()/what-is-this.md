## JavaScript escape() Metodu

**escape()** metodu, bir dizedeki karakterleri, HTML'de özel karakterler olarak kabul edilen karakterleri "%xx" biçiminde kodlayarak kodlamanıza olanak tanır.

**Kullanım Alanları:**

* HTML metinlerini kodlamak
* URL'leri kodlamak
* Özel karakterleri HTML'de güvenli bir şekilde kullanmak

**Çalışma Mantığı:**

**escape()** metodu, bir dizedeki aşağıdaki karakterleri "%xx" biçiminde kodlar:

* Boşluk (" ")
* Tırnak işareti ("'")
* İkili tırnak işareti ("")
* Küçük eşittir işareti (<)
* Büyük eşittir işareti (>)
* Ampersant (&)

**Detaylı Örnekler:**

**1. Örnek:** Bir HTML metnini kodlamak

```javascript
const text = "Merhaba Dünya!";
const escapedText = escape(text);

document.write(escapedText); // "Merhaba%20D%C3%BCnya!"
```

Bu örnekte, **text** değişkeni "Merhaba Dünya!" metnini içerir. **escape()** metodu **text** üzerinde çalıştırılır ve HTML'de özel karakterler olarak kabul edilen karakterleri "%xx" biçiminde kodlar.

**2. Örnek:** Bir URL'yi kodlamak

```javascript
const url = "https://www.example.com/?q=Merhaba Dünya";
const escapedUrl = escape(url);

document.write(escapedUrl); // "https%3A%2F%2Fwww.example.com%2F%3Fq%3DMerhaba%20D%C3%BCnya"
```

Bu örnekte, **url** değişkeni "[https://www.example.com/?q=Merhaba](https://www.example.com/?q=Merhaba) Dünya" URL'sini içerir. **escape()** metodu **url** üzerinde çalıştırılır ve HTML'de özel karakterler olarak kabul edilen karakterleri "%xx" biçiminde kodlar.

**Ek Örnekler:**

```javascript
const str = "Merhaba <Dünya>";
const escapedStr = escape(str);

document.write(escapedStr); // "Merhaba%20%3CD%C3%BCnya%3E"
```

**Notlar:**

* **escape()** metodu, **encodeURIComponent()** metoduna benzer şekilde çalışır. Fakat **escape()** metodu, daha az sayıda karakteri kodlar.
* **escape()** metodu, günümüzde **encodeURIComponent()** metodundan daha az tercih edilir.

**Alternatif:**

```javascript
const str = "Merhaba <Dünya>";
const encodedStr = encodeURIComponent(str);

document.write(encodedStr); // "Merhaba%20%3CD%C3%BCnya%3E"
```

