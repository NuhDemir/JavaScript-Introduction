## var vs. let vs. const: Kapsam ve Değiştirme Arasındaki Farklar

JavaScript'te değişkenleri tanımlamak için üç anahtar kelime kullanılır: `var`, `let`, ve `const`. Bu anahtar kelimeler arasındaki temel fark, **kapsam** ve **değiştirme** kurallarıdır.

**1. Kapsam:**

* **var:**
    * `var` ile tanımlanan değişkenler **fonksiyon kapsamına** sahiptir. Yani, bir fonksiyonun içinde tanımlanan bir `var` değişkeni, sadece o fonksiyonun içinde kullanılabilir.
    * `var` ile tanımlanan değişkenlere, fonksiyonun bloğundan önce bile erişilebilir. Bu davranışa **hoisting** denir.

* **let** ve **const:**
    * `let` ve `const` ile tanımlanan değişkenler **blok kapsamına** sahiptir. Yani, bir kod bloğu (örneğin, `if` koşul bloğu, döngü bloğu) içinde tanımlanan bir `let` veya `const` değişkeni, sadece o bloğun içinde kullanılabilir. Dışarıdan erişilemezler.

**Örnek:**

```javascript
function example() {
  if (true) {
    var x = 10; // var ile tanımlanan değişkene erişilebilir.
    let y = 20; // let ile tanımlanan değişkene erişilemez.
    const z = 30; // const ile tanımlanan değişkene erişilemez.
  }
  console.log(x); // Çalışır, x değeri 10 yazdırır.
  // console.log(y); // Hata verir, y tanımsızdır.
  // console.log(z); // Hata verir, z tanımsızdır.
}

example();
```

**2. Değiştirme:**

* **var:**
    * `var` ile tanımlanan değişkenlerin değeri **sonradan değiştirilebilir**.

* **let:**
    * `let` ile tanımlanan değişkenlerin değeri **sonradan değiştirilebilir**.

* **const:**
    * `const` ile tanımlanan değişkenlere değer atandıktan sonra **değiştirilemez**. Değiştirmeye çalışırsanız hata alırsınız.

**Örnek:**

```javascript
var x = 10;
x = 20; // Değişiklik geçerli, x değeri şimdi 20.

let y = 20;
y = 30; // Değişiklik geçerli, y değeri şimdi 30.

const z = 30;
z = 40; // Hata verir, const değişken değeri değiştirilemez.
```

**Özet:**

| Özellik | var | let | const |
|---|---|---|---|
| Kapsam | Fonksiyon | Blok | Blok |
| Değiştirme | Değiştirilebilir | Değiştirilebilir | Değiştirilemez |
| Hoisting | Evet | Hayır | Hayır |

**Kullanım Önerileri:**

* Genel olarak **let** kullanılması tercih edilir. Kapsamı daha kontrollüdür ve hata yakalama olasılığı azalır.
* **const** ile değişmeyen değerleri tanımlayın. Bu, değişkenin yanlışlıkla değiştirilmesini önler ve kodun daha güvenli olmasını sağlar.
* **var** kullanımını geçmiş kodlarda görebilirsiniz veya kapsam kontrolünün çok önemli olmadığı durumlarda kullanılabilir. Ancak yeni kod yazarken `let` veya `const` tercih edilmelidir.

