## JavaScript Değişkenleri: Örnekler ve Önemli Noktalar

JavaScript'te değişkenler, verileri depolamak ve programlarınızda kullanmak için kullanılan isimlendirilmiş bellek alanlarıdır. Değişkenler farklı veri türlerini saklayabilir ve programınızın işleyişinde önemli bir rol oynar.

### Değişken Tanımlama:

* `var`, `let` veya `const` anahtar kelimeleri kullanılarak tanımlanır.
* Değişken ismi, harf, alt çizgi (_) veya dolar işareti ($) ile başlamalıdır.
* Değişken ismi, sayı veya özel karakterlerle başlayamaz.
* Değişken isimleri, boşluk içeremez.

**Örnek:**

```javascript
var isim = "What is This?"; // string değişken
let yaş = 2023; // sayısal değişken
const PI = 3.14; // sabit
```

### Değişken Türleri:

* **Temel Türler:**
    * `string`: Metin verisi
    * `number`: Sayısal veri (tam sayı, ondalıklı sayı)
    * `boolean`: True veya false değerleri
    * `undefined`: Tanımlanmamış değişken
    * `null`: Boş değer
* **Karmaşık Türler:**
    * Diziler
    * Nesneler
    * Fonksiyonlar

**Örnek:**

```javascript
var dizi = ["Elma", "Armut", "Muz"]; // string dizi
var nesne = {isim: "What is this?", yaş: 2023}; // nesne
```

### Değişken Kullanımı:

* Değişkenlere değer atamak için `=` operatörü kullanılır.
* Değişkenlere erişmek için değişken ismi kullanılır.

**Örnek:**

```javascript
var ad = "Ali";
console.log(ad); // "Ali" yazdırır.

var yaş = 25;
yaş = 26; // değişkene yeni bir değer atamak
console.log(yaş); // 26 yazdırır.
```

### Önemli Noktalar:

* `var` anahtar kelimesi ile tanımlanan değişkenler, fonksiyon kapsamında geçerlidir.
* `let` ve `const` anahtar kelimeleri ile tanımlanan değişkenler, blok kapsamında geçerlidir.
* `const` ile tanımlanan değişkenlere değer atandıktan sonra değiştirilemez.
* Değişken isimleri, anlamlı ve açıklayıcı olmalıdır.
* Değişken türlerini doğru şekilde kullanmak önemlidir.

**Ön tanımlı kelimeler kullanılmaz**

## JavaScript Rezerv (Ön Tanımlı) Kelimeler Tablosu

| Anahtar Kelime | Açıklama |
|---|---|
| abstract | Soyut sınıf veya metot tanımlamak için kullanılır. |
| arguments | Metot argümanlarına erişmek için kullanılır. |
| await | Bir async fonksiyonun içinde bir promise'in sonucunu beklemek için kullanılır. |
| boolean | True veya false değerlerini saklamak için kullanılır. |
| break | Bir döngüden veya switch-case yapısından çıkmak için kullanılır. |
| byte | 8 bitlik tamsayı veri türünü tanımlamak için kullanılır. |
| case | Switch-case yapısında bir durumu kontrol etmek için kullanılır. |
| catch | Bir try-catch bloğunda hataları yakalamak için kullanılır. |
| char | Tek karakterlik veri türünü tanımlamak için kullanılır. |
| class | Bir sınıf tanımlamak için kullanılır. |
| const | Değişkenin değerini sabitlemek için kullanılır. |
| continue | Bir döngünün bir sonraki yinelemesine geçmek için kullanılır. |
| debugger | Hata ayıklayıcıyı başlatmak için kullanılır. |
| default | Switch-case yapısında bir durumla eşleşme olursa çalıştırılacak kod için kullanılır. |
| delete | Bir nesnenin özelliğini veya bir dizinin öğesini silmek için kullanılır. |
| do | Bir döngüyü bir kere çalıştırmak ve ardından şart sağlandıkça tekrarlamak için kullanılır. |
| double | 64 bitlik ondalıklı sayı veri türünü tanımlamak için kullanılır. |
| else | Bir if-else yapısında else kısmını belirtmek için kullanılır. |
| enum | Sabit değerler kümesini tanımlamak için kullanılır. |
| eval | Bir metni JavaScript kodu olarak çalıştırmak için kullanılır. |
| export | Bir modülü veya değişkeni dışa aktarmak için kullanılır. |
| extends | Bir sınıfı başka bir sınıftan miras almak için kullanılır. |
| false | Boolean veri tipinin false değerini temsil eder. |
| final | Bir sınıfın veya metodun değiştirilemez olduğunu belirtmek için kullanılır. |
| finally | Bir try-catch bloğunun her zaman çalıştırılacak kısmını belirtmek için kullanılır. |
| float | Ondalıklı sayı veri türünü tanımlamak için kullanılır. |
| for | Bir döngüyü belirli bir sayıda tekrarlamak için kullanılır. |
| function | Bir fonksiyon tanımlamak için kullanılır. |
| goto | Bir kod satırına atlamak için kullanılır. |
| if | Bir koşula bağlı olarak kod çalıştırmak için kullanılır. |
| implements | Bir sınıfın bir arayüzü uyguladığını belirtmek için kullanılır. |
| import | Bir modülü veya değişkeni içe aktarmak için kullanılır. |
| in | Bir operatör, bir değerin bir nesnenin özelliği olup olmadığını kontrol etmek için kullanılır. |
| instanceOf | Bir operatör, bir nesnenin belirli bir sınıftan olup olmadığını kontrol etmek için kullanılır. |
| int | Tamsayı veri türünü tanımlamak için kullanılır. |
| interface | Bir nesnenin sahip olması gereken özellik ve metotları tanımlamak için kullanılır. |
| let | Bir değişken tanımlamak için kullanılır. |
| long | 32 bitlik tamsayı veri türünü tanımlamak için kullanılır. |
| native | Bir fonksiyonun tarayıcı tarafından yerel olarak desteklendiğini belirtmek için kullanılır. |
| new | Bir nesnenin örneğini oluşturmak için kullanılır. |
| null | Boş değerini temsil eder. |
| package | Bir modülü paketlemek için kullanılır. |
| private | Bir sınıfın veya metodun sadece o sınıfın içinde erişilebilir olduğunu belirtmek için kullanılır. |
| protected | Bir sınıfın veya metodun sadece o sınıfın ve alt sınıflarının içinde erişilebilir olduğunu belirtmek için kullanılır. |
| public | Bir sınıfın veya metodun her yerden erişilebilir olduğunu belirtmek için kullanılır. |
| return | Bir fonksiyondan değer döndürmek için kullanılır. |
| short | 16 bitlik tamsayı veri türünü tanımlamak için kullanılır. |
| static | Bir sınıfın veya metodun statik olduğunu, yani nesne örneği olmadan kullanılabildiğini belirtmek için kullanılır. |
| super | Bir sınıfın miras aldığı sınıftan bir metotu çağırmak için kullanılır. |
| switch | Bir değeri bir dizi durumla karşılaştırmak için kullanılır. |
| synchronized | Bir kod bloğunun thread-safe

### Ek Kaynaklar:
* JavaScript Değişkenleri: 
[https://www.geeksforgeeks.org/javascript-variables/]
* JavaScript Değişkenleri: [https://javascript.info/variables]
* JavaScript Değişken Türleri: [https://www.w3schools.com/js/js_datatypes.asp](https://www.w3schools.com/js/js_datatypes.asp)
