## JavaScript'te document.write ve document.writeln

**document.write** ve **document.writeln**, bir HTML belgesinin içeriğini dinamik olarak değiştirmek için kullanılan JavaScript fonksiyonlarıdır. Her ikisi de belgeye metin, HTML kodları ve diğer içerikleri yazmak için kullanılır.

**Farklılıkları:**

* **document.write:** Belirtilen metni veya HTML kodunu belgenin sonuna yazar. Bir satır sonu eklemez.
* **document.writeln:** Belirtilen metni veya HTML kodunu belgenin sonuna yazar ve bir satır sonu ekler.

**Örnekler:**

**document.write ile:**

```javascript
document.write("Merhaba Dünya!");

var isim = "Admin";
document.write("Benim adım " + isim + ".");
```

**Ekrana şu şekilde yazdırır:**

```
Merhaba Dünya!
Benim adım Bard.
```

**document.writeln ile:**

```javascript
document.writeln("Merhaba Dünya!");

var soyisim = "Admin";
document.writeln("Soyadım " + soyisim + ".");
```

**Ekrana şu şekilde yazdırır:**

```
Merhaba Dünya!

Soyadım Admin.
```

**Önemli Açıklamalar:**

* **document.write** ve **document.writeln** fonksiyonları, HTML belgesinin **<head>** veya **<body>** bölümünde kullanılabilir.
* Bu fonksiyonlar, belgenin içeriğini **yeniden yazar**. Bu nedenle, bu fonksiyonlardan önce yazılmış olan içerik kaybolabilir.
* **document.write** ve **document.writeln** fonksiyonları, sayfa yüklendikten sonra da kullanılabilir. Bu sayede, dinamik içerikler ekleyebilirsiniz.
* Bu fonksiyonlar ile yazılan HTML kodları, tarayıcı tarafından yorumlanır ve işlenir.
* **document.write** ve **document.writeln** fonksiyonları, **string** türünde parametreler alır.

**Ek Bilgiler:**

* **innerHTML** özelliği, bir HTML elementinin içeriğini dinamik olarak değiştirmek için kullanılabilir.
* **document.createElement** ve **document.createTextNode** fonksiyonları, dinamik olarak HTML elementleri ve metin düğümleri oluşturmak için kullanılabilir.

**Özet:**

* **document.write** ve **document.writeln**, JavaScript'te bir HTML belgesinin içeriğini dinamik olarak değiştirmek için kullanılan fonksiyonlardır.
* Her iki fonksiyon da belgeye metin, HTML kodları ve diğer içerikleri yazmak için kullanılır.
* **document.write** bir satır sonu eklemezken, **document.writeln** ekler.
* Bu fonksiyonları kullanırken dikkatli olunmalı ve belgenin içeriğinin kaybolmamasına dikkat edilmelidir.
