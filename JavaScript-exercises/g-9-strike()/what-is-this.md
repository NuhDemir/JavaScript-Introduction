## JavaScript Dilinde fromCharCode() Metodu

**fromCharCode()** metodu, bir veya birden fazla Unicode kodundan bir dize oluşturmanızı sağlar.

**Kullanım Alanları:**

* Özel karakterler ve semboller oluşturmak
* Metin işleme ve manipülasyonu
* Uluslararası metinlerle çalışma
* Kodlama ve şifreleme

**Çalışma Mantığı:**

**fromCharCode()** metodu, parametre olarak verilen Unicode kodlarını bir dizeye dönüştürür. Her bir Unicode kodu, bir karaktere karşılık gelir.

**Detaylı Örnekler:**

**1. Örnek:** Tek bir Unicode kodundan bir karakter oluşturmak

```javascript
const char = String.fromCharCode(77);

console.log(char); // "M"
```

Bu örnekte, **fromCharCode()** metodu 77 Unicode kodunu kullanarak "M" karakterini oluşturur.

**2. Örnek:** Birden fazla Unicode kodundan bir dize oluşturmak

```javascript
const str = String.fromCharCode(65, 66, 67);

console.log(str); // "ABC"
```

Bu örnekte, **fromCharCode()** metodu 65, 66 ve 67 Unicode kodlarını kullanarak "ABC" dizesini oluşturur.

**Ek Örnekler:**

```javascript
const heart = String.fromCharCode(9829);
const euro = String.fromCharCode(8364);

console.log(heart); // "♥"
console.log(euro); // "€"
```

**Notlar:**

* **fromCharCode()** metodu, parametre olarak verilen Unicode kodunun geçerli bir karakter olması gerekir. Geçersiz bir Unicode kodu verilirse, NaN değeri döndürülür.
* **fromCharCode()** metodu, birden fazla parametre alırsa, parametreler sırayla bir dizeye dönüştürülür.

**Geçersiz Unicode kodu ile fromCharCode() örneği:**

```javascript
const str = String.fromCharCode(100000);

console.log(str); // NaN
```
