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
  selamla(10); // "Hata: İsim metin türünde olmalı!" 
  
  var name = "Matheus"; //String
  var number1 = "1"; //Number
  var logical = true;//Boolean
  var names = ["Matheus", "John", "Jane"]; //Array
  var obj = new Object(); //Object
  var undefined1 = "undefined"; //undefined
  var empty = "";//undefined

  var part1 = typeof(name);//String
  document.write(part1 +"<br/>");