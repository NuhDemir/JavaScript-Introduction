var sayi = 10;
var metin = "Merhaba";
var dizi = ["elma", "armut", "muz"];

document.write(typeof sayi); // "number" yazdırır
document.write(typeof metin); // "string" yazdırır
document.write(typeof dizi); // "object" yazdırır

function selamla(isim) {
    if (typeof isim !== "string") {
        document.write("Hata: İsim metin türünde olmalı!");
      return;
    }
  
    document.write("Merhaba " + isim);
  }
  
  selamla("Ayşe"); // "Merhaba Ayşe" yazdırır
  selamla(10); // "Hata: İsim metin türünde olmalı!" yazdırır