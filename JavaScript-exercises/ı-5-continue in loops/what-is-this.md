## JavaScript Dilinde Döngülerde `continue` İfadesi

**`continue`** ifadesi, JavaScript'te bir döngünün **mevcut yinelemesini atlayıp** **bir sonraki yinelemeye geçmek** için kullanılır.

**Kullanım Alanları:**

* Belirli koşullara uyan döngü yinelemelerini atlamak
* Bir döngüde belirli işlemleri sadece belirli koşullar için gerçekleştirmek
* Döngünün bir sonraki yinelemesine daha hızlı geçmek

**Çalışma Mantığı:**

* `continue` ifadesi, bulunduğu döngünün **mevcut yinelemesini** sonlandırır.
* Döngü, **bir sonraki yinelemeye** geçer.
* Mevcut yinelemedeki kod, **atlatılır** ve çalıştırılmaz.

**Örnek:**

```javascript
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}
```

**Bu kodda:**

* `for` döngüsü, 0'dan 9'a kadar sayıları yazdırır.
* `if` ifadesi, `i` değişkeninin çift olup olmadığını kontrol eder.
* Çiftse, `continue` ifadesi ile döngünün mevcut yinelemesi atlanır.
* Tekse, `i` değeri konsola yazdırılır.

**Özet:**

| Özellik | Etki | Örnek |
|---|---|---|
| **continue** | Döngünün bir sonraki yinelemesine geçer | `continue;` |

**Ek Bilgiler:**

* `continue` ifadesi, sadece bulunduğu döngüde geçerlidir.
* Birden fazla döngü iç içe geçmişse, `continue` ifadesi sadece **en içteki döngüden** geçer.
* `break` ifadesi, döngüden tamamen çıkmak için kullanılır.

**Daha Fazla Örnek:**

* Bir metindeki sayıları toplamak
* Bir dizideki en büyük sayıyı bulmak
* Bir menü sisteminde kullanıcıdan gelen geçersiz girdileri atlamak

**Continue İfadesinin Önemi:**

* `continue` ifadesi, kodun daha az tekrarla daha fazla iş yapmasını sağlar.
* Kodun daha kompakt ve okunabilir hale gelmesini sağlar.

**Continue İfadesinin Kullanım Dikkatleri:**

* `continue` ifadesini dikkatli kullanmak gerekir.
* Yanlış kullanıldığında, kodun hatalı çalışmasına neden olabilir.

**Döngülerde `continue` İfadesinin Kullanım Örnekleri:**

**1. Bir Diziyi Taramak ve Sadece Tek Sayıları Yazdırmak:**

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    continue;
  }
  console.log(numbers[i]);
}
```

**2. Bir Menü Sisteminde Kullanıcıdan Gelen Geçersiz Girdileri Atlamak:**

```javascript
let choice;

while (true) {
  choice = prompt("1. Seçenek\n2. Seçenek\n3. Çıkış\nSeçiminiz: ");

  if (choice === "1" || choice === "2" || choice === "3") {
    break;
  } else {
    console.log("Geçersiz seçim!");
    continue;
  }
}
```

