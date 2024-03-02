## HTML ve JavaScript'te Boşluk Kullanımı (White Space ve Space)

**Boşluk** (white space), HTML ve JavaScript'te metin ve kodların düzenlenmesi ve okunabilirliğini artırmak için kullanılan bir terimdir. Boşluk karakterleri, satır sonları, sekmeler ve boşluklar dahil olmak üzere birden fazla karakteri kapsar.

**HTML'de Boşluk Kullanımı:**

* HTML'de boşluk karakterleri, metnin nasıl biçimlendirileceğini ve görüntüleneceğini etkilemez.
* Boşluk karakterleri, tarayıcı tarafından görmezden gelinir ve metin tek bir satırda gösterilir.
* **pre** etiketi, metnin orijinal biçimini korumak için kullanılabilir. Bu etiket içindeki boşluk karakterleri de korunur.

**Örnek:**

```html
<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8">
<title>HTML Boşluk Örneği</title>
</head>
<body>
<h1>Bu metin    birden fazla    boşluk   içerir.</h1>
<p>Bu metin de   birden fazla   sekme   içerir.</p>
<pre>Bu metnin orijinal   biçimini   korumak   için   pre   etiketi   kullanıyoruz.</pre>
</body>
</html>
```

**JavaScript'te Boşluk Kullanımı:**

* JavaScript'te boşluk karakterleri, kodun okunabilirliğini ve anlaşılırlığını artırmak için kullanılır.
* Satır sonları, kod bloklarını ayırmak için kullanılır.
* Sekmeler ve boşluklar, kodun girintili hale getirilmesi için kullanılır.
* JavaScript'te boşluk karakterleri, kodun işleyişini etkilemez.

**Örnek:**

```javascript
// Bu kod   birden fazla   boşluk   içerir.

function myFunction() {
  // Bu fonksiyon   birden fazla   sekme   içerir.

  var a = 1;
  var b = 2;

  // Bu satır   birden fazla   boşluk   içerir.
  var c = a + b;

  return c;
}
```

**Özet:**

* HTML ve JavaScript'te boşluk karakterleri, metin ve kodların düzenlenmesi ve okunabilirliğini artırmak için kullanılır.
* HTML'de boşluk karakterleri tarayıcı tarafından görmezden gelinirken, JavaScript'te kodun okunabilirliğini ve anlaşılırlığını artırmak için kullanılır.
* Boşluk karakterleri, kodun işleyişini etkilemez.

**Ek Bilgiler:**

* HTML'de boşluk karakterlerini kontrol etmek için **&nbsp;** (no-break space) ve **&#160;** (non-breaking space) gibi özel karakterler kullanılabilir.
* JavaScript'te boşluk karakterlerini kontrol etmek için **String.prototype.trim()** ve **String.prototype.replace()** gibi fonksiyonlar kullanılabilir.

**Örnek:**

```html
<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8">
<title>HTML Boşluk Örneği</title>
</head>
<body>
<h1>Bu metin&nbsp;&nbsp;&nbsp;birden fazla&nbsp;&nbsp;&nbsp;boşluk&nbsp;&nbsp;&nbsp;içerir.</h1>
</body>
</html>
```

```javascript
var str = "   Bu metin   birden fazla   boşluk   içerir.   ";

// Boşluk karakterlerini silmek için trim() fonksiyonu kullanılabilir.
var trimmedStr = str.trim();

// Boşluk karakterlerini değiştirmek için replace() fonksiyonu kullanılabilir.
var replacedStr = str.replace(/\s/g, "-");

console.log(trimmedStr); // "Bu metin birden fazla boşluk içerir."
console.log(replacedStr); // "Bu-metin-birden-fazla-boşluk-içerir."
```
