## JavaScript Dilinde `do`-`while` Döngüsü

**do**-**while** döngüsü, JavaScript'te bir kod bloğunu **en az bir kere** çalıştırdıktan sonra, bir **koşul doğru olduğu sürece** tekrar tekrar çalıştırmak için kullanılır.

**Kullanım Alanları:**

* Kullanıcıdan gelen girdiye göre işlemleri tekrarlamak
* Bir veri setini işlemek
* Bir işlemin tamamlanana kadar tekrarlanmasını sağlamak

**Çalışma Mantığı:**

* `do` bloğu, ilk önce koşuldan bağımsız olarak çalıştırılır.
* Daha sonra, döngü koşulu değerlendirilir.
* Koşul doğruysa, `do` bloğu tekrar çalıştırılır.
* Koşul yanlış olana kadar bu işlem devam eder.

**Örnek:**

```javascript
let counter = 0;

do {
  console.log(counter);
  counter++;
} while (counter < 5);
```

**Bu kodda:**

* `counter` değişkeni 0'a atanır.
* `do` bloğu, ilk önce koşuldan bağımsız olarak çalıştırılır ve `counter` değeri konsola yazdırılır.
* Daha sonra, döngü koşulu, `counter` değişkeninin 5'ten küçük olup olmadığını kontrol eder.
* Koşul doğru olduğu sürece, `do` bloğu tekrar çalıştırılır ve `counter` değeri 1 artırılır.
* `counter` değişkeni 5 olduğunda, koşul yanlış hale gelir ve döngüden çıkılır.

**Özet:**

| Özellik | Etki | Örnek |
|---|---|---|
| **do**-**while** | Bir kod bloğunu en az bir kere çalıştırıp, koşul doğru olduğu sürece tekrarlar | `do { ... } while (counter < 5)` |

**Ek Bilgiler:**

* `do`-**while** döngüsü, `while` döngüsüne benzer, ancak en az bir kere çalıştırılması garantidir.
* `do`-**while** döngüsünün içinde `break` ifadesi kullanılarak döngüden erken çıkılabilir.

**Daha Fazla Örnek:**

* Bir sayının faktöriyelini hesaplamak
* Bir metindeki belirli bir karakteri bulmak
* Bir oyun döngüsü oluşturmak

**Do-While Döngüsünün Önemi:**

`do`-**while** döngüsü, en az bir kere çalıştırılması gereken işlemler için kullanılır. Kodun daha az tekrarla daha fazla iş yapmasını sağlayarak kodun daha kompakt ve okunabilir hale gelmesini sağlar.

**Do-While Döngüsü ve While Döngüsü Arasındaki Fark:**

* `while` döngüsü, koşul doğru olduğu sürece kod bloğunu çalıştırır.
* `do`-**while** döngüsü, koşul doğru olduğu sürece kod bloğunu **tekrar tekrar** çalıştırır, ancak ilk önce koşuldan bağımsız olarak **en az bir kere** çalıştırır.

**Hangi Döngüyü Kullanmalıyız?**

* Kod bloğunun en az bir kere çalıştırılması gerekiyorsa `do`-**while** döngüsü kullanılır.
* Kod bloğunun koşul doğru olduğu sürece çalıştırılması gerekiyorsa `while` döngüsü kullanılır.

