//eval(): kendisine parametre olarak verilen değerleri JavaScript kodlamasına çevirerek komut gibi çalıştırır ve oluşan değeri seviye dönüştürür.


var fonksiyonMetni = "function toplam(a, b) { return a + b; }";

var toplamFonksiyonu = eval(fonksiyonMetni);

document.write(toplamFonksiyonu(2, 3)); // 5 yazdırır

var durum = true;

var sonuc = eval(durum ? "1 + 1" : "0 - 1");

document.write(sonuc); // 2 yazdırır
var isim = "Ahmet";
var yas = eval(isim + " + 10");

document.write(yas); // 20 yazdırır.
