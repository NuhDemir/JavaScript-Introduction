// document.writeln("Merhaba"); // Sayfaya yazı yazdırır (satır sonu ekleyerek)
// document.write("Merh"); // Sayfaya yazı yazdırır (satır sonu eklemez)

// Konsola çıktı verme örnekleri
console.log(window.AnimationEvent); // Tarayıcının AnimationEvent desteğini kontrol eder
console.warn("Hata Oluştu"); // Uyarı mesajı gösterir
debugger; // Tarayıcıyı duraklatır ve hata ayıklamaya yardımcı olur
console.log(window.location.hostname); // Tarayıcının bulunduğu host bilgisini gösterir

// Değişken tanımlama ve farkları
var variable1 = 12; // "var" ile tanımlanan değişken function scope'a sahiptir
console.log(variable1);

// var : function scope olup RAM bellekte fazla yer kaplayabilir.
// let ve const : block scope özelliğine sahiptir ve daha güvenlidir.

function giveAsync() {
  var hello = "Hi, everyone"; // function scope

  if (true) {
    var b = 109; // var ile tanımlandığı için fonksiyon içinde her yerden erişilebilir
  }
  console.log(b); // 109
  console.log(hello); // "Hi, everyone"
}

giveAsync();

/*
* let ve const arasındaki fark:

! const (constant) : Sabit, değiştirilemez.
- let : Değiştirilebilir.

const user = {
  name: "Ali",
  password: "1234"
};

// "user" nesnesine yeni bir veri eklenemez ancak mevcut verilerin içeriği değiştirilebilir.
user.name = "Ahmet"; // Geçerli
user.password = "75643"; // Geçerli

// user = {name: "Veli", password: "9999"}; // Geçersiz, çünkü tamamen yeni bir nesne ataması yapılamaz.
*/

// Veri tipleri
let number = 42; // Sayısal veri tipi
let text = "Merhaba Dünya"; // Metinsel veri tipi
let isActive = true; // Boolean (Doğru/Yanlış) veri tipi
let user = { name: "Ali", age: 25 }; // Nesne veri tipi
let numbers = [1, 2, 3, 4, 5]; // Dizi veri tipi
let notDefined; // Tanımsız (undefined) veri tipi
let emptyValue = null; // Boş (null) veri tipi

console.log(typeof number); // "number"
console.log(typeof text); // "string"
console.log(typeof isActive); // "boolean"
console.log(typeof user); // "object"
console.log(typeof numbers); // "object"
console.log(typeof notDefined); // "undefined"
console.log(typeof emptyValue); // "object" (JavaScript özelliğidir)

// Type coercion (Tip dönüşümü)
console.log("5" + 3); // "53" (string olarak birleştirme)
console.log("5" - 3); // 2 (otomatik sayıya çevirme)
console.log("5" * "2"); // 10 (sayısal çarpma)
console.log("5" / "2"); // 2.5 (sayısal bölme)
console.log(5 == "5"); // true (değer karşılaştırması, türü kontrol etmez)
console.log(5 === "5"); // false (hem değer hem tür karşılaştırması yapar)

/*
DİYALOG KUTULARI:
    -Alert
    -Prompt
    -Confirm
*/
