## JavaScript Dilinde Ternary Operatörü

Ternary operatörü, JavaScript'te **koşullu bir ifadeye bağlı olarak iki farklı değerden birini seçmek** için kullanılan bir kısaltmadır.

**Kullanım Alanları:**

* Basit koşullara bağlı olarak değer atama
* Koşullu ifadeleri tek satırda yazma
* Fonksiyonların dönüş değerlerini dinamik olarak belirleme

**Çalışma Mantığı:**

Ternary operatörü üç operanttan oluşur:

* **Koşul:** Bir Boolean değeri döndüren bir ifade.
* **Doğru Değer:** Koşul doğruysa döndürülen değer.
* **Yanlış Değer:** Koşul yanlışsa döndürülen değer.

**Örnek:**

```javascript
const age = 18;

const isAdult = age >= 18 ? "Yetişkin" : "Çocuk";

console.log(isAdult); // "Yetişkin" yazdırır
```

**Bu kodda:**

* `age` değişkeni kullanıcının yaşını temsil eder.
* Ternary operatörü, `age` değişkeninin 18'den büyük veya eşit olup olmadığını kontrol eder.
* Koşul doğruysa, "Yetişkin" değeri, yanlışsa "Çocuk" değeri `isAdult` değişkenine atanır.

**Özet:**

| Özellik | Etki | Örnek |
|---|---|---|
| **Ternary Operatörü** | Koşula bağlı olarak iki değerden birini seçer | `age >= 18 ? "Yetişkin" : "Çocuk"` |

**Ek Bilgiler:**

* Ternary operatörü, `if`-`else` ifadelerine alternatif olarak kullanılabilir.
* Ternary operatörü iç içe kullanılabilir.

**Daha Fazla Örnek:**

* Bir sayının tek veya çift olduğunu belirleme
* Bir kullanıcının girişinin doğruluğunu kontrol etme
* Bir fonksiyonun parametrelerine göre farklı işlemler yapma

**Ternary Operatörünün Önemi:**

Ternary operatörü, kodun daha kısa ve okunabilir olmasını sağlar. Basit koşullara bağlı olarak değer atama işlemlerini tek satırda yaparak kodun daha kompakt hale gelmesini sağlar.
