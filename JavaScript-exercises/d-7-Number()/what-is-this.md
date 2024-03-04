## JavaScript Number() Metodu:

**Number() metodu**, bir değerin sayısal gösterimini elde etmek için kullanılır. Bu sayede, farklı türdeki değerleri bir sayıya dönüştürebilir veya matematiksel işlemler için kullanabilirsiniz.

**Örnek:**

```javascript
const str = "123";
const num = Number(str); // 123

const bool = true;
const num2 = Number(bool); // 1

const obj = { name: "John Doe" };
const num3 = Number(obj); // NaN (Not a Number)
```

**Çıktı:**

```
123
1
NaN
```

**Number() metodunun bazı önemli noktaları:**

* **Orijinal değeri değiştirmez:** Number() metodu, orijinal değeri değiştirmez. Yeni bir sayı oluşturur ve değerin sayısal gösterimini içerir.
* **Tüm türler için kullanılabilir:** Number() metodu, tüm JavaScript türleri için kullanılabilir.
* **Farklı türler için farklı çıktılar:** Number() metodu, farklı türler için farklı sayısal gösterimler üretir. Örneğin, bir metnin sayısal gösterimi bir sayının sayısal gösteriminden farklıdır.
* **NaN (Not a Number):** Number() metodu, bir değeri sayıya dönüştüremezse NaN değerini döndürür.
* **Tüm tarayıcılar tarafından desteklenmez:** Number() metodu, ECMAScript 1'den beri mevcuttur. Bu nedenle, tüm tarayıcılar tarafından desteklenir.

**Örnek Kullanım Alanları:**

* Değerleri sayılara dönüştürme
* Matematiksel işlemler yapma
* Karşılaştırmalar yapma
* Hata ayıklama

**Ekstra Örnekler:**

```javascript
const date = new Date();
const num4 = Number(date); // NaN

const array = [1, 2, 3];
const num5 = Number(array); // NaN

const nullValue = null;
const num6 = Number(nullValue); // 0

const undefinedValue = undefined;
const num7 = Number(undefinedValue); // NaN
```

**Detaylı Kaynakça:**

* **MDN Web Docs:** Number.prototype.toString(): [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString)
* **W3Schools:** JavaScript toString() Method: [https://www.w3schools.com/js/js_number_methods.asp](https://www.w3schools.com/js/js_number_methods.asp)
* **TutorialsPoint:** JavaScript Number() Method: [geçersiz URL kaldırıldı]
* **JavaScript.info:** Number.prototype.toString(): [geçersiz URL kaldırıldı]

**Ek Bilgiler:**

* Number() metodu, `+value` ifadesiyle de kullanılabilir.
* Number() metodu, `valueOf()` metoduyla da benzer işlevlere sahiptir.

Umarım bu bilgiler JavaScript Number() metodu hakkında daha fazla bilgi edinmenize yardımcı olmuştur.
