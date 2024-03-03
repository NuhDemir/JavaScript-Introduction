let isim = "Ayşe";

console.log(isim); // "Ayşe" yazdırır

isim = "Fatma"; // Değişkenin değerini değiştirme

document.write(isim); // "Fatma" yazdırır

const soyad = "Yılmaz"; // Sabit bir değişken tanımlama
document.write(isim); // "Yılmaz" yazd
// soyad = "Demir"; // Hata: Sabit değişken değiştirilemez

//önceden değişken atayabiliriz.
var name , lastName;
name = "Demir";
lastName = "ziya";

document.write(name);
document.write(lastName);

//const sabit olduğu için değişkenin içeriği sabittir.
let isim1 = "Ayşe";
const soyad1 = "Yılmaz";

function selamla() {
  isim1 = "Fatma";
  console.log("Merhaba " + isim1 + " " + soyad);
}

selamla();
console.log(isim1 + " " + soyad1);

function degistir() {
  isim1 = "Mehmet";
}

degistir();
console.log(isim1 + " " + soyad1);