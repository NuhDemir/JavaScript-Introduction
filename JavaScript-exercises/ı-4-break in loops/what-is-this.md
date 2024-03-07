## JavaScript Dilinde Döngülerde `break` İfadesi

**`break`** ifadesi, JavaScript'te bir **döngüden erken çıkmak** için kullanılır.

**Kullanım Alanları:**

* Bir döngüyü belirli bir koşula bağlı olarak sonlandırmak
* Döngünün bir sonraki yinelemesine geçmeden önce işleme son vermek
* Sonsuz döngüden çıkmak

**Çalışma Mantığı:**

* `break` ifadesi, bulunduğu **döngüden** **hemen** çıkar.
* Döngüden çıkıldıktan sonra, kod çalışmaya **döngünün hemen ardından** devam eder.

**Örnek:**

```javascript
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

console.log("Döngüden çıkıldı!");
```

**Bu kodda:**

* `for` döngüsü, 0'dan 9'a kadar sayıları yazdırır.
* `if` ifadesi, `i` değişkeninin 5'e eşit olup olmadığını kontrol eder.
* Eşitse, `break` ifadesi ile döngüden çıkılır.
* Döngüden çıkıldıktan sonra, "Döngüden çıkıldı!" mesajı konsola yazdırılır.

**Özet:**

| Özellik | Etki | Örnek |
|---|---|---|
| **break** | Bir döngüden erken çıkar | `break;` |

**Ek Bilgiler:**

* `break` ifadesi, sadece bulunduğu döngüden çıkar.
* Birden fazla döngü iç içe geçmişse, `break` ifadesi sadece **en içteki döngüden** çıkar.
* `continue` ifadesi, döngünün bir sonraki yinelemesine geçmek için kullanılır.

**Daha Fazla Örnek:**

* Bir metindeki belirli bir karakteri bulmak ve bulunduktan sonra döngüden çıkmak
* Bir sayının faktöriyelini hesaplamak ve taşma riskini önlemek için döngüden çıkmak
* Bir menü sisteminde kullanıcıdan gelen seçime göre işleme son vermek

**Break İfadesinin Önemi:**

* `break` ifadesi, kodun daha fazla iş yapmasını engellemek için kullanılır.
* Kodun daha kompakt ve okunabilir hale gelmesini sağlar.

**Break İfadesinin Kullanım Dikkatleri:**

* `break` ifadesini dikkatli kullanmak gerekir.
* Yanlış kullanıldığında, kodun hatalı çalışmasına neden olabilir.

**Döngülerde `break` İfadesinin Kullanım Örnekleri:**

**1. Bir Diziyi Taramak ve Belirli Bir Değeri Bulmak:**

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 5) {
    console.log("5 bulundu!");
    break;
  }
}
```

**2. Sonsuz Döngüden Çıkmak:**

```javascript
while (true) {
  console.log("Sonsuz döngüdeyim!");
  if (Math.random() > 0.5) {
    break;
  }
}
```

**3. Bir Menü Sisteminde Kullanıcı Seçimine Göre İşleme Son Vermek:**

```javascript
let choice;

while (true) {
  choice = prompt("1. Seçenek\n2. Seçenek\n3. Çıkış\nSeçiminiz: ");

  switch (choice) {
    case "1":
      console.log("1. Seçenek seçildi!");
      break;
    case "2":
      console.log("2. Seçenek seçildi!");
      break;
    case "3":
      console.log("Çıkış yapılıyor!");
      break;
    default:
      console.log("Geçersiz seçim!");
  }

  if (choice === "3") {
    break;
  }
}
```

