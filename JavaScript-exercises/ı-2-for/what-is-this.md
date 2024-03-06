## JavaScript Dilinde `for` Döngüsü

**for** döngüsü, JavaScript'te bir kod bloğunu **belirli bir sayıda tekrar** çalıştırmak için kullanılır.

**Kullanım Alanları:**

* Tekrarlayan işlemleri gerçekleştirmek
* Bir veri setini işlemek
* Bir dizideki her elemanı işlemek

**Çalışma Mantığı:**

* `for` döngüsünün başında, üç ifade çalıştırılır:
    * **Başlangıç ifadesi:** Döngü değişkeninin ilk değerini atar.
    * **Koşul ifadesi:** Döngünün devam edip etmeyeceğini belirler.
    * **Artış ifadesi:** Her döngü yinelemesinde döngü değişkeninin değerini değiştirir.
* Koşul ifadesi doğru olduğu sürece, kod bloğu çalıştırılır.
* Her döngü yinelemesinde, artış ifadesi çalıştırılır.

**Örnek:**

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

**Bu kodda:**

* `i` değişkeni, döngü değişkenidir ve 0'a atanır.
* Koşul ifadesi, `i` değişkeninin 5'ten küçük olup olmadığını kontrol eder.
* Kod bloğu, `i` değişkeninin değeri 5'ten küçük olana kadar çalıştırılır.
* Her döngü yinelemesinde, `i` değişkeninin değeri 1 artırılır.

**Özet:**

| Özellik | Etki | Örnek |
|---|---|---|
| **for** | Bir kod bloğunu belirli bir sayıda tekrar çalıştırır | `for (let i = 0; i < 5; i++) { ... }` |

**Ek Bilgiler:**

* `for` döngüsünün içinde `break` ifadesi kullanılarak döngüden erken çıkılabilir.
* `continue` ifadesi kullanılarak döngünün bir sonraki yinelemesine geçilebilir.
* Birden fazla döngü değişkeni kullanılabilir.

**Daha Fazla Örnek:**

* Bir sayının faktöriyelini hesaplamak
* Bir metindeki belirli bir karakteri bulmak
* Bir dizideki en büyük sayıyı bulmak

**For Döngüsünün Önemi:**

`for` döngüsü, tekrarlayan işlemleri kolayca gerçekleştirmek için kullanılır. Kodun daha az tekrarla daha fazla iş yapmasını sağlayarak kodun daha kompakt ve okunabilir hale gelmesini sağlar.

**For Döngüsünün Diğer Döngülerle Karşılaştırması:**

* `while` döngüsü, koşul doğru olduğu sürece kod bloğunu çalıştırır.
* `do`-**while** döngüsü, koşul doğru olduğu sürece kod bloğunu **tekrar tekrar** çalıştırır, ancak ilk önce koşuldan bağımsız olarak **en az bir kere** çalıştırır.
* `for` döngüsü, belirli bir sayıda tekrar çalıştırılması gereken kod blokları için kullanılır.

**Hangi Döngüyü Kullanmalıyız?**

* Kod bloğunun belirli bir sayıda tekrarlanması gerekiyorsa `for` döngüsü kullanılır.
* Kod bloğunun koşul doğru olduğu sürece çalıştırılması gerekiyorsa `while` döngüsü kullanılır.
* Kod bloğunun en az bir kere çalıştırılması gerekiyorsa `do`-**while** döngüsü kullanılır.

