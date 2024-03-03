## JavaScript'te Değişkenlere Değer Atama

JavaScript'te bir değişkene değer atamak için `=` operatörünü kullanırız. Değişkenin ismi solda, atanan değer ise sağda yer alır.

**Örnek:**

```javascript
var a = 10; // a adında bir tamsayı değişkeni tanımlama ve 10 değeri atama
var b = "Merhaba"; // b adında bir metin değişkeni tanımlama ve "Merhaba" metni atama
var c = true; // c adında bir Booolean değişkeni tanımlama ve true değeri atama

let x = 5; // let anahtar kelimesi ile değişken tanımlama
const y = "Dünya"; // const anahtar kelimesi ile sabit bir değişken tanımlama

// Değişkenlere matematiksel işlemlerden oluşan ifadelerin sonucunu da atayabilirsiniz.
var z = a + b; // z değişkenine a ve b değişkenlerinin toplamını atama
```

**Değişkenlere değer atama işleminde dikkat edilmesi gerekenler:**

* Değişkenin tipi, atanan değerin tipiyle uyumlu olmalıdır. Örneğin, bir sayısal değişkene bir metin değeri atayamazsınız.
* Değişkenin bellekte yer ayrılmış olmasına gerek yoktur. JavaScript, değişken tanımlandığında otomatik olarak bellek ayırır.

**Örnek:**

```javascript
var x; // x adında bir değişken tanımlama
x = 10; // x değişkenine 10 değeri atama

// x değişkeni tanımlanmadan önce değer ataması yapılabilir.
y = 20; // y adında bir değişken tanımlama ve 20 değeri atama
var y;
```

**Değişkenlere değer atama işlemi, JavaScript'te programlama yaparken en temel işlemlerden biridir.** Bu işlemi doğru şekilde kullanabilmeniz, programlarınızın düzgün çalışması için önemlidir.

**Daha fazla bilgi için:**

* JavaScript Değişkenleri: [https://www.geeksforgeeks.org/javascript-variables/]
