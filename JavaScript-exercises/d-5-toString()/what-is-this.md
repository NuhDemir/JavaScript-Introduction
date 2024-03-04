## JavaScript'te toString() Özelliği

**toString()** özelliği, bir değerin metinsel gösterimini elde etmek için kullanılır. Bu sayede, farklı türdeki değerleri bir metin olarak yazdırabilir veya karşılaştırabilirsiniz.

**Örnek:**

```javascript
const number = 123;
const str = number.toString();
console.log(str); // "123"

const bool = true;
const str2 = bool.toString();
console.log(str2); // "true"

const obj = { name: "John Doe" };
const str3 = obj.toString();
console.log(str3); // "[object Object]"
```

**Çıktı:**

```
123
true
[object Object]
```

**toString() özelliğinin bazı önemli noktaları:**

* **Orijinal değeri değiştirmez:** toString() özelliği, orijinal değeri değiştirmez. Yeni bir metin oluşturur ve değerin metinsel gösterimini içerir.
* **Tüm türler için kullanılabilir:** toString() özelliği, tüm JavaScript türleri için kullanılabilir.
* **Farklı türler için farklı çıktılar:** toString() özelliği, farklı türler için farklı metinsel gösterimler üretir. Örneğin, bir sayının metinsel gösterimi bir metnin metinsel gösteriminden farklıdır.
* **Tüm tarayıcılar tarafından desteklenmez:** toString() özelliği, ECMAScript 1'den beri mevcuttur. Bu nedenle, tüm tarayıcılar tarafından desteklenir.

**Örnek Kullanım Alanları:**

* Değerleri yazdırma
* Değerleri karşılaştırma
* Metin oluşturma
* Hata ayıklama

**Ekstra Örnekler:**

```javascript
const date = new Date();
const str4 = date.toString();
console.log(str4); // "Tue Mar 07 2023 15:29:01 GMT+0300 (Türkiye Saati)"

const array = [1, 2, 3];
const str5 = array.toString();
console.log(str5); // "1,2,3"

const nullValue = null;
const str6 = nullValue.toString();
console.log(str6); // "null"
```

**Daha Fazla Bilgi:**

* Object.prototype.toString() - JavaScript | MDN: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString)
* JavaScript toString() Method - W3Schools: [geçersiz URL kaldırıldı]

**Karşılaştırma:**

**toString()** ve **valueOf()** fonksiyonları bir değerin metinsel veya sayısal gösterimini elde etmek için kullanılabilir. Fakat bazı farkları vardır:

* **Çıktı:** toString() fonksiyonu metinsel bir çıktı üretirken valueOf() fonksiyonu sayısal bir çıktı üretebilir.
* **Kullanım amacı:** toString() fonksiyonu genellikle değerleri yazdırmak veya karşılaştırmak için kullanılırken valueOf() fonksiyonu genellikle matematiksel işlemler için kullanılır.

Genellikle, metinsel bir çıktıya ihtiyacınız varsa toString() fonksiyonunu, sayısal bir çıktıya ihtiyacınız varsa valueOf() fonksiyonunu kullanmalısınız.
