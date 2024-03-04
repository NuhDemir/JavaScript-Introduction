## JavaScript'te Global ve Lokal Alanlar: Kapsam Alanları Nasıl Çalışır?

JavaScript'te değişkenlerin ve fonksiyonların erişilebilirliği, **kapsam alanları** tarafından belirlenir. Kapsam alanı, bir değişkenin veya fonksiyonun hangi kod blokları tarafından erişilebileceğini tanımlar. İki ana kapsam alanı türü vardır:

**1. Global Kapsam:**

Global kapsamda tanımlanan değişkenler ve fonksiyonlar, tüm kod blokları tarafından erişilebilir. Bunu bir apartmanın ortak alanlarına benzetebiliriz. Apartmanda oturan herkes ortak alanlara erişebilir.

**Örnek:**

```javascript
var isim = "Ayşe";

function selamla() {
  console.log("Merhaba " + isim);
}

selamla(); // "Merhaba Ayşe" yazdırır
```

**2. Lokal Kapsam:**

Lokal kapsamda, bir fonksiyonun içinde tanımlanan değişkenler ve fonksiyonlar, sadece o fonksiyonun içinde erişilebilir. Bunu bir dairenin odalarına benzetebiliriz. Odadaki eşyalara sadece o odada bulunanlar erişebilir.

**Örnek:**

```javascript
function selamla() {
  var isim = "Fatma";
  console.log("Merhaba " + isim);
}

selamla(); // "Merhaba Fatma" yazdırır
console.log(isim); // Hata: "isim" değişkeni tanımlı değil

```

**Önemli Noktalar:**

* Aynı isimle birden fazla değişken tanımlanabilir. Global ve lokal kapsamda aynı isimli değişkenler farklı varlıklardır.
* Bir fonksiyonun içinde global bir değişkeni yeniden tanımlamak, lokal bir değişken oluşturur.
* `var`, `let` ve `const` anahtar kelimeleri, değişkenlerin kapsam alanlarını ve davranışlarını etkiler.

**Günlük Yaşamdan Örnekler:**

* Bir ailenin soyadı (global değişken) tüm aile üyeleri için geçerlidir.
* Bir kişinin yaşı (lokal değişken) sadece o kişi için geçerlidir.
* Bir mağazadaki ürünlerin fiyatları (global değişkenler) tüm müşteriler için aynıdır.
* Bir müşterinin sepetindeki ürünler (lokal değişkenler) sadece o müşteri için geçerlidir.

**Interaktif Örnek:**

Aşağıdaki kodda, `isim` değişkeninin kapsam alanını deneyebilirsiniz:

```javascript
var isim = "Ayşe";

function selamla() {
  var isim = "Fatma";
  console.log("Merhaba " + isim);
}

selamla();
console.log(isim);

function degistir() {
  isim = "Mehmet";
}

degistir();
console.log(isim);
```

Kodu çalıştırdığınızda ve farklı fonksiyonlara tıkladığınızda, `isim` değişkeninin değerinin nasıl değiştiğini gözlemleyebilirsiniz.
