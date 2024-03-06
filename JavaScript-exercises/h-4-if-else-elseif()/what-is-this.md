## JavaScript Dilinde `if` ve `else` Koşul İfadeleri

**if** ve **else** koşul ifadeleri, JavaScript'te kodun belirli koşullara bağlı olarak farklı şekilde çalışmasını sağlar.

**Kullanım Alanları:**

* Kullanıcıdan gelen girdiye göre farklı işlemler yapmak
* Belirli bir değerin aralıkta olup olmadığını kontrol etmek
* İki veya daha fazla seçenek arasında seçim yapmak

**Çalışma Mantığı:**

**if** ifadesi, bir koşul içerir. Koşul doğruysa, **if** bloğundaki kod çalıştırılır. Koşul yanlışsa, **else** bloğundaki kod çalıştırılır.

**Örnek:**

```javascript
const number = 10;

if (number > 5) {
  console.log("Sayı 5'ten büyük");
} else {
  console.log("Sayı 5'ten küçük veya eşit");
}
```

**Bu kodda:**

* `number` değişkeninin değeri 10'dur.
* `if` koşulu, `number` değişkeninin 5'ten büyük olup olmadığını kontrol eder.
* Koşul doğru olduğu için, `if` bloğundaki kod çalıştırılır ve "Sayı 5'ten büyük" mesajı yazdırılır.

**Özet:**

| Özellik | Etki | Örnek |
|---|---|---|
| **if** | Bir koşula bağlı olarak kod çalıştırır | `if (number > 5)` |
| **else** | Koşul yanlışsa kod çalıştırır | `else { console.log("Sayı 5'ten küçük veya eşit"); }` |

**Ek Bilgiler:**

* `if` ve `else` ile birlikte `else if` de kullanılabilir.
* Koşullar hakkında daha fazla bilgi için JavaScript Koşullu İfadeler: [https://www.w3schools.com/js/js_if_else.asp](https://www.w3schools.com/js/js_if_else.asp) sayfasına bakabilirsiniz.

**Daha Fazla Örnek:**

* Bir sayının tek veya çift olduğunu kontrol etmek
* Bir kullanıcının yaşına göre farklı mesajlar göstermek
* Bir formdaki girişlerin doğruluğunu kontrol etmek

**Koşul İfadelerinin Önemi:**

Koşul ifadeleri, JavaScript'te kodun daha dinamik ve esnek olmasını sağlar. Farklı koşullara bağlı olarak farklı işlemler yaparak kodun daha karmaşık görevleri yerine getirmesini mümkün kılar.
