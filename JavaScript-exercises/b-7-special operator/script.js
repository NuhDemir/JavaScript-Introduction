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