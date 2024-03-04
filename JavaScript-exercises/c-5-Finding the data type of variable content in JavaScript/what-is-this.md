## JavaScript'te Değişken İçeriğinin Veri Türünü Bulma

JavaScript'te bir değişkenin içeriğinin veri türünü bulmak için **`typeof`** operatörünü kullanabilirsiniz. `typeof` operatörü, bir değişkenin veri türünü bir dize olarak döndürür.

**Örnek:**

```javascript
var sayi = 10;
var metin = "Merhaba";
var dizi = ["elma", "armut", "muz"];

console.log(typeof sayi); // "number" yazdırır
console.log(typeof metin); // "string" yazdırır
console.log(typeof dizi); // "object" yazdırır
```

**`typeof` operatörünün döndürebileceği değerler:**

* `"number"`: Sayısal veri türü (tam sayı, ondalıklı sayı, vb.)
* `"string"`: Metinsel veri türü
* `"boolean"`: Mantıksal veri türü (true veya false)
* `"object"`: Nesne veri türü
* `"undefined"`: Tanımlanmamış değişken
* `"function"`: Fonksiyon veri türü
* `"symbol"`: Sembol veri türü (ES6'da eklendi)

**`typeof` operatörünü kullanmanın bazı faydaları:**

* Kodunuzda hangi veri türlerinin kullanıldığını kontrol etmenizi sağlar.
* Hataları ve mantıksal hataları ayıklamaya yardımcı olur.
* Koşullu ifadelerde veri türlerini kontrol etmek için kullanılabilir.

**Örnek:**

```javascript
function selamla(isim) {
  if (typeof isim !== "string") {
    console.log("Hata: İsim metin türünde olmalı!");
    return;
  }

  console.log("Merhaba " + isim);
}

selamla("Ayşe"); // "Merhaba Ayşe" yazdırır
selamla(10); // "Hata: İsim metin türünde olmalı!" yazdırır
```

**Daha Fazla Bilgi:**

* JavaScript Veri Türleri: [https://www.w3schools.com/js/js_datatypes.asp](https://www.w3schools.com/js/js_datatypes.asp)
* typeof Operatörü: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
