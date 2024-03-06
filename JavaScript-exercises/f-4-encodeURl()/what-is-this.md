## JavaScript Dilinde encodeURIComponent() Metodu

**encodeURIComponent()** metodu, bir URL bileşenini, URL'lerde güvenli bir şekilde kullanılabilecek şekilde kodlamanıza olanak tanır.

**Kullanım Alanları:**

* URL parametrelerini kodlamak
* Form verilerini kodlamak
* URL'lerde özel karakterleri kodlamak
* Web API'leri ile veri gönderme

**Çalışma Mantığı:**

**encodeURIComponent()** metodu, bir dizedeki karakterleri, URL'lerde güvenli olmayan karakterleri "%xx" biçiminde kodlayarak kodlar. Burada xx, karakterin ondalık kodunun onaltılık gösterimidir.

**Detaylı Örnekler:**

**1. Örnek:** Bir URL parametresini kodlamak

```javascript
const param = "Merhaba Dünya";
const encodedParam = encodeURIComponent(param);

console.log(encodedParam); // "Merhaba%20D%C3%BCnya"
```

Bu örnekte, **param** değişkeni "Merhaba Dünya" metnini içerir. **encodeURIComponent()** metodu **param** üzerinde çalıştırılır ve URL'de güvenli olmayan karakterleri "%xx" biçiminde kodlayarak kodlar.

**2. Örnek:** Bir form veri değerini kodlamak

```javascript
const formValue = "Merhaba Dünya!";
const encodedValue = encodeURIComponent(formValue);

console.log(encodedValue); // "Merhaba%20D%C3%BCnya%21"
```

Bu örnekte, **formValue** değişkeni "Merhaba Dünya!" metnini içerir. **encodeURIComponent()** metodu **formValue** üzerinde çalıştırılır ve URL'de güvenli olmayan karakterleri "%xx" biçiminde kodlayarak kodlar.

**Ek Örnekler:**

```javascript
const url = "https://www.example.com/?q=Merhaba%20D%C3%BCnya";

const encodedUrl = encodeURIComponent(url);

console.log(encodedUrl); // "https%3A%2F%2Fwww.example.com%2F%3Fq%3DMerhaba%2520D%25C3%25BCnya"
```

**Notlar:**

* **encodeURIComponent()** metodu, boşluk karakterini "+" sembolüne dönüştürür.
* **encodeURIComponent()** metodu, aşağıdaki karakterleri kodlamaz: `*` `-` `.` `_` `!` `~` `'` `(` `)` `$` `&` `+` `,` `/` `;` `=` `?` `@` `#`

**Kodlanmayan karakterler örneği:**

```javascript
const param = "Merhaba Dünya!";
const encodedParam = encodeURIComponent(param);

console.log(encodedParam); // "Merhaba%20D%C3%BCnya!"
```
