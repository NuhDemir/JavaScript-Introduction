## JavaScript Dilinde `switch`-`case`-`break` İfadeleri

**switch**-**case**-**break** ifadeleri, JavaScript'te bir değişkenin değerine bağlı olarak farklı kod bloklarını çalıştırmak için kullanılır.

**Kullanım Alanları:**

* Bir menü sisteminde seçilen seçeneğe göre farklı işlemler yapmak
* Bir sayının değerine göre farklı kategorilere ayırmak
* Bir metnin içeriğine göre farklı işlemler yapmak

**Çalışma Mantığı:**

* `switch` ifadesi, bir değişkenin değerini kontrol eder.
* Her `case` ifadesi, değişkenin olası bir değerini temsil eder.
* Değişkenin değeri bir `case` ifadesinin değeriyle eşleşirse, o `case` bloğundaki kod çalıştırılır.
* `break` ifadesi, kodun bir `case` bloğundan çıkmasını sağlar.

**Örnek:**

```javascript
const day = "Pazartesi";

switch (day) {
  case "Pazartesi":
    console.log("Haftanın ilk günü!");
    break;
  case "Salı":
    console.log("Haftanın ikinci günü.");
    break;
  case "Çarşamba":
    console.log("Haftanın üçüncü günü.");
    break;
  default:
    console.log("Geçersiz gün ismi!");
}
```

**Bu kodda:**

* `day` değişkeni gün ismini temsil eder.
* `switch` ifadesi, `day` değişkeninin değerini kontrol eder.
* `Pazartesi`, `Salı` ve `Çarşamba` için farklı mesajlar yazdırılır.
* `default` bloğu, `day` değişkeninin beklenen değerlerden biriyle eşleşmediğinde çalıştırılır.

**Özet:**

| Özellik | Etki | Örnek |
|---|---|---|
| **switch** | Bir değişkenin değerini kontrol eder | `switch (day)` |
| **case** | Bir olası değeri temsil eder | `case "Pazartesi":` |
| **break** | Bir case bloğundan çıkmayı sağlar | `break;` |

**Ek Bilgiler:**

* Birden fazla `case` ifadesi aynı kod bloğunu çalıştırabilir.
* `break` ifadesi isteğe bağlıdır. Kullanılmazsa, kod bir sonraki `case` bloğuna da geçer.
* `switch`-`case`-`break` ifadeleri yerine `if`-`else` ifadeleri de kullanılabilir.

**Daha Fazla Örnek:**

* Bir sayının tek veya çift olduğunu kontrol etmek
* Bir kullanıcının seçtiği ürünün fiyatını hesaplamak
* Bir metnin hangi dilde yazıldığını belirlemek

**Switch-Case İfadelerinin Önemi:**

`switch`-`case`-`break` ifadeleri, kodun daha organize ve okunabilir olmasını sağlar. Bir değişkenin değerine bağlı olarak farklı işlemleri tek bir yerde toplayarak kodun daha kolay yönetilebilir hale gelmesini sağlar.
