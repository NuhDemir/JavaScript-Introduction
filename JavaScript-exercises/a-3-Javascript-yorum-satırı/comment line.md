## JavaScript Yorum Satırları

**Yorum satırları**, JavaScript kodunda programın işleyişini etkilemeyen, açıklama ve notlar eklemek için kullanılan satırlardır. Yorum satırları, kodun daha okunabilir ve anlaşılır olmasını sağlar.

**JavaScript'te iki tür yorum satırı vardır:**

* Tek satırlık yorumlar
* Çok satırlık yorumlar

**Tek Satırlık Yorumlar:**

Tek satırlık yorumlar, `//` karakter dizisi ile başlar ve satırın sonuna kadar devam eder. Tek satırlık yorumlar, kısa notlar ve açıklamalar eklemek için kullanılır.

**Örnek:**

```javascript
// Bu bir tek satırlık yorumdur.

var a = 1; // a değişkenini 1'e ata

// Bu da bir tek satırlık yorumdur.
```

**Çok Satırlık Yorumlar:**

Çok satırlık yorumlar, `/*` karakter dizisi ile başlar ve `*/` karakter dizisi ile sona erer. Çok satırlık yorumlar, uzun açıklamalar ve kod blokları hakkında bilgi eklemek için kullanılır.

**Örnek:**

```javascript
/*
Bu bir çok satırlık yorumdur.

Birden fazla satırda yazilabilir.

*/

var b = 2; // b değişkenini 2'ye ata

/*
Bu da bir çok satırlık yorumdur.
*/
```

**Yorum Satırlarının Kullanım Alanları:**

* Kodun işleyişini açıklama
* Kodda hangi işlemlerin yapıldığını not etme
* Hataları ve olası çözümleri açıklama
* Kodun farklı bölümlerini ayırma
* Geliştiricilere notlar ve bilgiler ekleme

**Yorum Satırlarının Önemi:**

Yorum satırları, JavaScript kodunu daha okunabilir ve anlaşılır hale getirir. Yorum satırları eklemek, kodun daha kolay bakımı ve güncellenmesini sağlar. Ayrıca, kodda hangi işlemlerin yapıldığını açıklayan yorumlar eklemek, diğer geliştiricilerin kodunuzu daha kolay anlamasına yardımcı olur.

**Örnek:**

```javascript
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
```

**Özet:**

* Yorum satırları, JavaScript kodunda programın işleyişini etkilemeyen, açıklama ve notlar eklemek için kullanılan satırlardır.
* İki tür yorum satırı vardır: tek satırlık yorumlar ve çok satırlık yorumlar.
* Yorum satırları, kodun daha okunabilir ve anlaşılır olmasını sağlar.
* Yorum satırlarının kullanım alanları şunlardır: kodun işleyişini açıklama, kodda hangi işlemlerin yapıldığını not etme, hataları ve olası çözümleri açıklama, kodun farklı bölümlerini ayırma ve geliştiricilere notlar ve bilgiler ekleme.
* Yorum satırları, JavaScript kodunun daha kolay bakımı ve güncellenmesini sağlar.
