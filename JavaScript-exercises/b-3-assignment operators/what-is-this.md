## JavaScript Atama Operatörleri

Atama operatörleri, JavaScript'te değerleri değişkenlere atamak veya mevcut değerlerini değiştirmek için kullanılır.

**Atama Operatörleri:**

* `=`: **Basit atama** operatörü. Sağdaki değeri soldaki değişkene atar.
* `+=`: **Toplama ve atama** operatörü. Sağdaki değeri soldaki değişkene toplar ve sonucu soldaki değişkene atar.
* `-=`: **Çıkarma ve atama** operatörü. Sağdaki değeri soldaki değişkenden çıkarır ve sonucu soldaki değişkene atar.
* `*=`: **Çarpma ve atama** operatörü. Sağdaki değeri soldaki değişkenle çarpar ve sonucu soldaki değişkene atar.
* `/=`: **Bölme ve atama** operatörü. Sağdaki değeri soldaki değişkene böler ve sonucu soldaki değişkene atar.
* `%=`: **Mod alma ve atama** operatörü. Sağdaki değeri soldaki değişkene mod alır ve sonucu soldaki değişkene atar.
* `<<=`: **Sola kaydırma ve atama** operatörü. Soldaki değişkenin ikili gösterimini soldan sola kaydırır ve sonucu soldaki değişkene atar.
* `>>=`: **Sağa kaydırma ve atama** operatörü. Soldaki değişkenin ikili gösterimini sağdan sola kaydırır ve sonucu soldaki değişkene atar.
* `>>>=`: **Sağa kaydırma (işareti koru) ve atama** operatörü. Soldaki değişkenin ikili gösterimini sağdan sola kaydırır ve en soldaki biti korur, sonucu soldaki değişkene atar.

**Örnekler:**

```javascript
// Basit atama
var x = 10;

// Toplama ve atama
x += 5; // x = 15

// Çıkarma ve atama
x -= 3; // x = 12

// Çarpma ve atama
x *= 2; // x = 24

// Bölme ve atama
x /= 4; // x = 6

// Mod alma ve atama
x %= 3; // x = 0

// Sola kaydırma ve atama
x <<= 1; // x = 12

// Sağa kaydırma ve atama
x >>= 1; // x = 6

// Sağa kaydırma (işareti koru) ve atama
x >>>= 1; // x = 3
```

**Kullanım Alanları:**

Atama operatörleri, aşağıdakiler de dahil olmak üzere çeşitli alanlarda kullanılır:

* **Değişkenleri başlatmak**
* **Değişkenlerin değerlerini güncellemek**
* **Hesaplama sonuçlarını saklamak**
* **Döngülerde sayacı kontrol etmek**

**Önemli Noktalar:**

* Atama operatörleri, değişkenlerin veri türlerini değiştirmez.
* Operatörlerin öncelik sırasını bilmek önemlidir.
* Karmaşık işlemler için parantez kullanarak öncelik sırasını netleştirmek önemlidir.

**Ek Kaynaklar:**

* JavaScript Atama Operatörleri: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators)
