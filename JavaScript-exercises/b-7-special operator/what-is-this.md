# Özel operatörler

## JavaScript'te Özel Operatörler

JavaScript'te, özel durumlarda kullanılan bir dizi özel operatör bulunur. Bu operatörler, diğer operatörlerden farklı şekilde çalışırlar ve belirli görevleri yerine getirmek için kullanılırlar.

**Bazı Özel Operatörler:**

* **typeof:** Bir değişkenin veri türünü döndürür.
* **void:** Bir ifadenin değerini yok sayar.
* **delete:** Bir nesnenin özelliğini siler.
* **in:** Bir nesnenin belirli bir özelliğe sahip olup olmadığını kontrol eder.
* **instanceof:** Bir nesnenin belirli bir türe ait olup olmadığını kontrol eder.
* **new:** Bir nesnenin yeni bir örneğini oluşturur.
* **this:** Mevcut nesneyi referans alır.

**Örnekler:**

```javascript
// typeof operatörü
var x = 10;
var y = "Merhaba";

console.log(typeof x); // "number"
console.log(typeof y); // "string"

// void operatörü
var result = function() {
  console.log("Bu fonksiyon bir değer döndürmez.");
};

void result(); // "Bu fonksiyon bir değer döndürmez." yazdırılır ve result değişkeni herhangi bir değer taşımaz.

// delete operatörü
var obj = {
  isim: "Ahmet",
  yas: 25,
};

delete obj.yas;

console.log(obj); // {isim: "Ahmet"}

// in operatörü
console.log("isim" in obj); // true

// instanceof operatörü
class Person {
  constructor(isim, yas) {
    this.isim = isim;
    this.yas = yas;
  }
}

var person = new Person("Ayşe", 30);

console.log(person instanceof Person); // true

// new operatörü
var date = new Date();

console.log(date); // Mevcut tarih ve saati gösterir.

// this operatörü
function selamlama() {
  console.log(this.isim);
}

var obj = {
  isim: "Fatma",
  selamlama: selamlama,
};

obj.selamlama(); // "Fatma" yazdırılır.
```

**Kullanım Alanları:**

Özel operatörler, aşağıdakiler de dahil olmak üzere çeşitli alanlarda kullanılır:

* **Veri türlerini kontrol etmek**
* **Nesnelerin özelliklerini yönetmek**
* **Fonksiyonlar ile çalışmak**
* **Nesne yönelimli programlamada**

**Önemli Noktalar:**

* Özel operatörlerin işlevlerini ve öncelik sırasını bilmek önemlidir.
* Karmaşık işlemler için parantez kullanarak öncelik sırasını netleştirmek önemlidir.


**Virgül (,)**

Virgül (,), JavaScript'te farklı amaçlar için kullanılır:

**1. Birden Fazla İfadeyi Yazmak:**

```javascript
var x = 10, y = 20;

console.log(x, y); // 10 20 yazdırır.
```

**2. Dizilerde ve Nesnelerde Elemanları Ayırmak:**

```javascript
// Dizi
var meyveler = ["Elma", "Armut", "Muz"];

console.log(meyveler); // ["Elma", "Armut", "Muz"]

// Nesne
var kitap = {
  baslik: "Küçük Prens",
  yazar: "Antoine de Saint-Exupéry",
};

console.log(kitap); // {baslik: "Küçük Prens", yazar: "Antoine de Saint-Exupéry"}
```

**Artı (+)**

Artı (+) da JavaScript'te farklı anlamlara sahip olabilir:

**1. Toplama İşlemi:**

```javascript
var x = 5;
var y = 3;

var toplam = x + y; // toplam = 8
```

**2. Metinleri Birleştirmek:**

```javascript
var str1 = "Merhaba";
var str2 = " Dünya!";

var selamlama = str1 + str2; // selamlama = "Merhaba Dünya!"
```

**3. Sayının İşaretini Değiştirmemek:**

```javascript
var num = +10; // num = 10
```

**4. Sayının Değerini Döndürmek:**

```javascript
var num2 = +"-10"; // num2 = -10
```

**Bunlara ek olarak:**

* Virgül, fonksiyon argümanlarını ayırmak için de kullanılabilir.
* Artı (+), bir sayının önüne eklendiğinde ondalık kısmı da dahil olmak üzere sayının değerini döndürür.

**Örnek:**

```javascript
function topla(a, b) {
  return a + b;
}

var sonuc = topla(1.5, 2.5); // sonuc = 4

console.log(sonuc.toFixed(2)); // 4.00 yazdırır.
```

**Özetle:**

* Virgül ve artı karakterleri, JavaScript'te farklı anlamlara sahip olabilir.
* Kullanılan bağlama göre hangi anlamın geçerli olduğunu anlamak önemlidir.