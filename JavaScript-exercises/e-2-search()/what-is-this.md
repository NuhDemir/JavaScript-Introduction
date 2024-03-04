## JavaScript'te search() Metodu:


**search() metodu**, bir metin içinde belirli bir karakterin veya alt metnin ilk bulunduğu indeksi döndürür. Bulunamadığında -1 döner. indexOf() metoduna oldukça benzer.

**Özellikler:**

* **Büyük/küçük harf duyarlılığı:** search() metodu, büyük/küçük harfe duyarlı değildir.
* **Düzenli ifade desteği:** search() metodu, RegExp nesnelerini parametre olarak kabul edebilir.
* **Global flag:** `/g` bayrağı ile tüm eşleşmelerin ilk indeksi bulunur.
* **Başlangıç ​​indeksi:** search() metoduna opsiyonel bir başlangıç ​​indeksi parametresi geçebilirsiniz. Arama bu indeksten itibaren başlayacaktır.
* **Bulunamadı:** Aranan karakter veya alt metin bulunamadıysa, search() metodu -1 döndürür.

**Örnekler:**

**1. Basit Arama:**

```javascript
const str = "Merhaba Dünya!";
const index = str.search("Dünya"); // 7
```

**2. Büyük/Küçük Harf Duyarlılığı:**

```javascript
const str = "Merhaba Dünya!";
const index = str.search("dünya"); // 7

const str2 = "Merhaba Dünya!";
const index2 = str2.search(/dünya/i); // 7
```

**3. Düzenli İfade Desteği:**

```javascript
const str = "Merhaba Dünya! Dünya";
const index = str.search(/\w+a/); // 0

const str2 = "Merhaba Dünya! Dünya";
const index2 = str2.search(/Dünya/g); // 7, 15
```

**4. Başlangıç ​​İndeksi:**

```javascript
const str = "Merhaba Dünya! Dünya";
const index = str.search("Dünya", 8); // 15
```

**5. Bulunamadı:**

```javascript
const str = "Merhaba Dünya!";
const index = str.search("x"); // -1
```



**Örnek 6:**

```javascript
const str = "Merhaba Dünya! Dünya";
const index = str.search(/d.nya/); // 7

const str2 = "Merhaba Dünya! Dünya";
const index2 = str2.search(/Dünya/i); // 7
```

Bu örnekte, `search` metodu, `d.nya` ve `Dünya` düzenli ifadelerini aramak için kullanılır. `d.nya` düzenli ifadesi, "d" harfi, herhangi bir karakter ve "a" harfi ile eşleşen herhangi bir metni arar. `Dünya` düzenli ifadesi, "Dünya" metnini büyük/küçük harfe duyarlı olmadan arar.

**Örnek 7:**

```javascript
const str = "Merhaba Dünya! Dünya";
const index = str.search(/Dünya/g); // 7, 15

const str2 = "Merhaba Dünya! Dünya";
const index2 = str2.search(/Dünya/gi); // 7, 15
```

Bu örnekte, `g` bayrağı ile `Dünya` metninin tüm örneklerinin ilk indeksi bulunur. `i` bayrağı ile de arama büyük/küçük harfe duyarlı olmadan yapılır.

**Örnek 8:**

```javascript
const str = "Merhaba Dünya!";
const index = str.search(/x/); // -1
```

Bu örnekte, "x" karakterinin dizideki ilk örneğinin konumunu bulmak için `search` metodu kullanılır. "x" karakteri dizide bulunmadığından, `search` metodu -1 değeri döndürür.

**Ek Özellikler:**

* **lastIndex:** `lastIndex` özelliği, aramanın hangi indeksten başlayacağını belirlemek için kullanılabilir.
* **sticky:** `sticky` bayrağı ile arama, ilk eşleşmeden sonra durmaz ve tüm eşleşmeleri arar.

**Örnek 9:**

```javascript
const str = "Merhaba Dünya! Dünya";
const regex = /Dünya/;

regex.lastIndex = 8;
const index = str.search(regex); // 15
```

Bu örnekte, `lastIndex` özelliği, aramanın 8. indeksten başlamasını sağlar.

**Örnek 10:**

```javascript
const str = "Merhaba Dünya! Dünya";
const regex = /Dünya/g;

regex.lastIndex = 8;
const index = str.search(regex); // 15
```

Bu örnekte, `sticky` bayrağı ile arama, ilk eşleşmeden sonra durmaz ve "Dünya" metninin tüm örneklerini arar.


**Ek Bilgiler:**

* search() metodu, indexOf() metoduna oldukça benzer. Fakat search() metodu, büyük/küçük harf duyarlılığı ve düzenli ifade desteği gibi ek özellikler sunar.
* includes() ve startsWith() metodları, belirli bir metnin varlığını kontrol etmek için kullanılabilir.
