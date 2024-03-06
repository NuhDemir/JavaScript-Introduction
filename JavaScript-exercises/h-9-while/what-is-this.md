## JavaScript Dilinde `while` Döngüsü

**while** döngüsü, JavaScript'te bir kod bloğunu **bir koşul doğru olduğu sürece** tekrar tekrar çalıştırmak için kullanılır.

**Kullanım Alanları:**

* Tekrarlayan işlemleri gerçekleştirmek
* Bir veri setini işlemek
* Kullanıcıdan gelen girdiye göre işlemleri tekrarlamak

**Çalışma Mantığı:**

* Döngü başlamadan önce, bir **koşul** değerlendirilir.
* Koşul doğruysa, döngüdeki kod bloğu çalıştırılır.
* Kod bloğu çalıştıktan sonra, koşul tekrar değerlendirilir.
* Koşul yanlış olana kadar bu işlem devam eder.

**Örnek:**

```javascript
let counter = 1;

while (counter <= 5) {
  console.log(counter);
  counter++;
}
```

**Bu kodda:**

* `counter` değişkeni 1'e atanır.
* `while` döngüsünün koşulu, `counter` değişkeninin 5'ten küçük veya eşit olup olmadığını kontrol eder.
* Koşul doğru olduğu sürece, `counter` değeri konsola yazdırılır ve 1 artırılır.
* `counter` değişkeni 6 olduğunda, koşul yanlış hale gelir ve döngüden çıkılır.

**Özet:**

| Özellik | Etki | Örnek |
|---|---|---|
| **while** | Bir koşul doğru olduğu sürece kod bloğunu çalıştırır | `while (counter <= 5)` |

**Ek Bilgiler:**

* `while` döngüsünün içinde `break` ifadesi kullanılarak döngüden erken çıkılabilir.
* `continue` ifadesi kullanılarak döngünün bir sonraki yinelemesine geçilebilir.

**Daha Fazla Örnek:**

* Bir sayının faktöriyelini hesaplamak
* Bir metindeki belirli bir karakteri bulmak
* Bir oyun döngüsü oluşturmak

**While Döngüsünün Önemi:**

`while` döngüsü, tekrarlayan işlemleri kolayca gerçekleştirmek için kullanılır. Kodun daha az tekrarla daha fazla iş yapmasını sağlayarak kodun daha kompakt ve okunabilir hale gelmesini sağlar.
