// Bu bir tek satırlık yorumdur.

var a = 1; // a değişkenini 1'e ata

// Bu da bir tek satırlık yorumdur.

/*
Bu bir çok satırlık yorumdur.

Birden fazla satırda yazilabilir.

*/

var b = 2; // b değişkenini 2'ye ata

/*
Bu da bir çok satırlık yorumdur.
*/

//JavaScript comment line örneği;

// Bu fonksiyon bir sayının karekökünü hesaplar.

function karekok(x) {
    // x'in negatif olup olmadığını kontrol et
    if (x < 0) {
      // Negatif sayıların karekökü yoktur.
      return NaN;
    }
  
    // x'in karekökünü hesapla
    var karekok = Math.sqrt(x);
  
    // Karekökü döndür
    return karekok;
  }