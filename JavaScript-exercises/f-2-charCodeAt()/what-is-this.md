# JavaScript charCodeAt() Metodu

**charCodeAt()** metodu, bir dizenin belirli bir indisteki karakterinin Unicode kodunu almanızı sağlar.

**Kullanım Alanları:**

* Metin işleme ve manipülasyonu
* Karakter kodlarını karşılaştırmak
* Belirli karakterlere dayalı işlemler yapmak
* Uluslararası metinlerle çalışma

**Çalışma Mantığı:**

**charCodeAt()** metodu, dizedeki karakterleri indis numaralarına göre numaralandırır. İlk karakterin indis numarası 0'dır. **charCodeAt()** metodu, parametre olarak verilen indis numarasındaki karakterin Unicode kodunu döndürür.

**Detaylı Örnekler:**

**1. Örnek:** Bir dizenin ilk karakterinin Unicode kodunu almak

```javascript
const str = "Merhaba Dünya";

const firstCharCode = str.charCodeAt(0);

console.log(firstCharCode); // 77
```

Bu örnekte, **str** değişkeni "Merhaba Dünya" metnini içerir. **charCodeAt()** metodu **str** üzerinde çalıştırılır ve 0. indisteki karakterin Unicode kodunu (77) döndürür. 77, "M" karakterinin Unicode kodudur.

**2. Örnek:** Bir dizenin son karakterinin Unicode kodunu almak

```javascript
const str = "Merhaba Dünya";

const lastCharCode = str.charCodeAt(str.length - 1);

console.log(lastCharCode); // 97
```

Bu örnekte, **str** değişkeni "Merhaba Dünya" metnini içerir. **charCodeAt()** metodu **str** üzerinde çalıştırılır ve dize uzunluğundan 1 eksik olan indisteki karakterin Unicode kodunu (97) döndürür. 97, "a" karakterinin Unicode kodudur.

**Ek Örnekler:**

```javascript
const str = "Merhaba Dünya!";

console.log(str.charCodeAt(5)); // 97
console.log(str.charCodeAt(12)); // 33
```

**Notlar:**

* **charCodeAt()** metodu, parametre olarak bir indis numarası verilmezse, dizenin ilk karakterinin Unicode kodunu döndürür.
* **charCodeAt()** metodu, parametre olarak verilen indis numarası dize uzunluğundan büyük veya küçükse, NaN değerini döndürür.

**Parametresiz charCodeAt() örneği:**

```javascript
const str = "Merhaba Dünya";

console.log(str.charCodeAt()); // 77
```

**Dize uzunluğundan büyük indis numarası ile charCodeAt() örneği:**

```javascript
const str = "Merhaba Dünya";

console.log(str.charCodeAt(15)); // NaN
```
