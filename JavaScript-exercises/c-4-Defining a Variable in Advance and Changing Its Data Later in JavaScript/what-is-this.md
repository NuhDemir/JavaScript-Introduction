## JavaScript'te Değişkeni Önceden Tanımlayıp Verisini Sonradan Değiştirme

JavaScript'te bir değişkeni önceden tanımlayıp verisini sonradan değiştirmek oldukça basittir. Bunu yapmanın iki temel yolu vardır:

**1. Atama Operatörü:**

`=` operatörünü kullanarak bir değişkene değer atayabilirsiniz. Değişkeni önceden tanımladıysanız, daha sonra `=` operatörünü kullanarak yeni bir değer atayabilirsiniz.

**Örnek:**

```javascript
var isim; // Değişken tanımlama

isim = "Ayşe"; // Değişkene değer atama

console.log(isim); // "Ayşe" yazdırır

isim = "Fatma"; // Değişkenin değerini değiştirme

console.log(isim); // "Fatma" yazdırır
```

**2. `let` ve `const` Anahtar Kelimeleri:**

`let` ve `const` anahtar kelimeleri, değişkenlerin kapsam alanlarını ve davranışlarını etkiler. `let` ile tanımlanan değişkenler, blok kapsamlıdır ve değiştirilebilir. `const` ile tanımlanan değişkenler ise sabittir ve değiştirilemez.

**Örnek:**

```javascript
let isim = "Ayşe";

console.log(isim); // "Ayşe" yazdırır

isim = "Fatma"; // Değişkenin değerini değiştirme

console.log(isim); // "Fatma" yazdırır

const soyad = "Yılmaz"; // Sabit bir değişken tanımlama

// soyad = "Demir"; // Hata: Sabit değişken değiştirilemez
```

**Önemli Noktalar:**

* Bir değişkeni tekrar tanımlamak yerine, değerini değiştirmek için `=` operatörünü kullanın.
* `let` ile tanımlanan değişkenler, blok kapsamlıdır.
* `const` ile tanımlanan değişkenler sabittir ve değiştirilemez.

**Günlük Yaşamdan Örnek:**

* Bir kişinin yaşı (değişken) zamanla değişebilir.
* Bir kişinin adı (sabit) genellikle değişmez.

**Interaktif Örnek:**

Aşağıdaki kodda, `isim` ve `soyad` değişkenlerinin değerlerini nasıl değiştirebileceğinizi deneyebilirsiniz:

```javascript
let isim = "Ayşe";
const soyad = "Yılmaz";

function selamla() {
  isim = "Fatma";
  console.log("Merhaba " + isim + " " + soyad);
}

selamla();
console.log(isim + " " + soyad);

function degistir() {
  isim = "Mehmet";
}

degistir();
console.log(isim + " " + soyad);
```

Kodu çalıştırdığınızda ve farklı fonksiyonlara tıkladığınızda, `isim` ve `soyad` değişkenlerinin değerlerinin nasıl değiştiğini gözlemleyebilirsiniz.

**Daha Fazla Bilgi:**

* JavaScript Değişkenleri: [https://www.yusufsezer.com.tr/javascript-degiskenler/](https://www.yusufsezer.com.tr/javascript-degiskenler/)
* var, let ve const: [https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/](https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/)

