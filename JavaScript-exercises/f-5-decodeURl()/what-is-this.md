## JavaScript Dilinde decodeURIComponent() Metodu

**decodeURIComponent()** metodu, URL'lerde kodlanmış bir bileşeni, orijinal dizesine dönüştürmenize olanak tanır.

**Kullanım Alanları:**

* URL parametrelerini çözmek
* Form verilerini çözmek
* URL'lerde özel karakterleri çözmek
* Web API'lerinden gelen verileri çözmek

**Çalışma Mantığı:**

**decodeURIComponent()** metodu, "%xx" biçiminde kodlanmış karakterleri, orijinal karakterlerine dönüştürerek bir dizeyi çözer. Burada xx, karakterin ondalık kodunun onaltılık gösterimidir.

**Detaylı Örnekler:**

**1. Örnek:** Bir URL parametresini çözmek

```javascript
const encodedParam = "Merhaba%20D%C3%BCnya";
const param = decodeURIComponent(encodedParam);

console.log(param); // "Merhaba Dünya"
```

Bu örnekte, **encodedParam** değişkeni URL'de kodlanmış "Merhaba Dünya" metnini içerir. **decodeURIComponent()** metodu **encodedParam** üzerinde çalıştırılır ve "%xx" biçiminde kodlanmış karakterleri orijinal karakterlerine dönüştürerek çözer.

**2. Örnek:** Bir form veri değerini çözmek

```javascript
const encodedValue = "Merhaba%20D%C3%BCnya%21";
const formValue = decodeURIComponent(encodedValue);

console.log(formValue); // "Merhaba Dünya!"
```

Bu örnekte, **encodedValue** değişkeni URL'de kodlanmış "Merhaba Dünya!" metnini içerir. **decodeURIComponent()** metodu **encodedValue** üzerinde çalıştırılır ve "%xx" biçiminde kodlanmış karakterleri orijinal karakterlerine dönüştürerek çözer.

**Ek Örnekler:**

```javascript
const url = "https://www.example.com/?q=Merhaba%2520D%25C3%25BCnya";

const decodedUrl = decodeURIComponent(url);

console.log(decodedUrl); // "https://www.example.com/?q=Merhaba Dünya"
```

**Notlar:**

* **decodeURIComponent()** metodu, "+" sembolünü boşluk karakterine dönüştürür.
* **decodeURIComponent()** metodu, "%xx" biçiminde kodlanmamış karakterleri olduğu gibi bırakır.

**Kodlanmamış karakterler örneği:**

```javascript
const encodedParam = "Merhaba%20Dünya!";
const param = decodeURIComponent(encodedParam);

console.log(param); // "Merhaba Dünya!"
```

Umarım bu bilgiler JavaScript'te **decodeURIComponent()** metodunu anlamanıza yardımcı olmuştur.
