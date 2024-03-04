var name1 = "Matheus";
    //global alan
{
    //local alann
}

{ //local global
    {
    //local alan
    }
}

/*----------------------------*/
var isim = "Ayşe";

function selamla() {
  var isim = "Fatma";
  console.log("Merhaba " + isim);
}

selamla();
console.log(isim);



/*----------------------------*/
function degistir() {
  isim = "Mehmet";
}

degistir();
console.log(isim);

function selamla() {
    var isim = "Fatma";
    console.log("Merhaba " + isim);
  }
  
  selamla(); // "Merhaba Fatma" yazdırır
  console.log(isim); // Hata: "isim" değişkeni tanımlı değil
  