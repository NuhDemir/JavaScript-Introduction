## JavaScript Noscript Etiketi Nedir?

**Noscript** etiketi, tarayıcıda JavaScript'in **devre dışı** olduğu durumlarda kullanıcılara alternatif içerik sunmak için kullanılan bir HTML etiketidir. Bu etiket, JavaScript'e ihtiyaç duymayan tarayıcılar ve JavaScript'i bilinçli olarak devre dışı bırakan kullanıcılar için sayfanın işlevselliğini ve erişilebilirliğini korumaya yardımcı olur.

## Noscript Etiketi Nasıl Kullanılır?

**Noscript** etiketi, **<head>** ve **</head>** etiketleri arasında yerleştirilir. Etiketin içinde, JavaScript'in devre dışı olduğu durumlarda gösterilecek alternatif metin veya HTML kodları yer alır.

**Örnek:**

```html
<head>
<title>Noscript Örneği</title>
<noscript>
<p>Tarayıcınızda JavaScript devre dışı görünüyor. Lütfen JavaScript'i etkinleştirerek sayfayı tekrar yükleyin.</p>
<p><a href="javascript-etkinlestir.html">JavaScript'i nasıl etkinleştiririm?</a></p>
</noscript>
</head>
<body>
<h1>Bu sayfanın işlevlerini kullanmak için JavaScript'i etkinleştirmeniz gerekir.</h1>
</body>
</html>
```

Bu örnekte, JavaScript devre dışıysa kullanıcılara "Tarayıcınızda JavaScript devre dışı görünüyor..." mesajı ve JavaScript'i nasıl etkinleştirebileceklerine dair bir bağlantı gösterilir.

## Noscript Etiketi ile Neler Yapılabilir?

**Noscript** etiketi ile aşağıdakileri yapabilirsiniz:

* JavaScript'e ihtiyaç duymayan kullanıcılara alternatif içerik sunmak
* JavaScript'in devre dışı olması durumunda sayfanın işlevselliğini korumak
* Kullanıcılara JavaScript'i nasıl etkinleştirebileceklerine dair bilgi vermek

## Noscript Etiketi ile İlgili Önemli Noktalar

* **Noscript** etiketi, **<noscript>** ve **</noscript>** etiketleri arasında yer alan tüm HTML kodlarını çalıştırır.
* **Noscript** etiketi, JavaScript'in devre dışı olup olmadığını doğrudan kontrol etmez. Tarayıcı tarafından sağlanan bir API'yi kullanarak JavaScript'in desteklenip desteklenmediğini öğrenir.
* **Noscript** etiketinin **style** ve **script** etiketlerini çalıştırmayacağını unutmayın.

## Noscript Etiketi Örnekleri

**1. Kullanıcılara JavaScript'i etkinleştirmeleri için bilgi verme:**

```html
<noscript>
<p>Tarayıcınızda JavaScript devre dışı görünüyor. Lütfen JavaScript'i etkinleştirerek sayfayı tekrar yükleyin.</p>
<p><a href="javascript-etkinlestir.html">JavaScript'i nasıl etkinleştiririm?</a></p>
</noscript>
```

**2. JavaScript'e ihtiyaç duymayan alternatif içerik sunma:**

```html
<noscript>
<h2>Sayfanın Görsel Sürümü</h2>
<img src="sayfa-gorsel.png" alt="Sayfanın Görsel Sürümü">
</noscript>
```

**3. JavaScript'in devre dışı olması durumunda sayfanın işlevselliğini koruma:**

```html
<noscript>
<form action="iletisim.php" method="post">
<input type="text" name="isim" placeholder="Adınız">
<input type="text" name="eposta" placeholder="E-posta Adresiniz">
<input type="submit" value="Gönder">
</form>
</noscript>
```

## Noscript Etiketi Hakkında Daha Fazla Bilgi

* HTML Noscript Etiketi Nedir?: [geçersiz URL kaldırıldı]
* HTML noscript Etiketi: [https://www.m5bilisim.com/webokulu/etiketler/etiket-noscript.php](https://www.m5bilisim.com/webokulu/etiketler/etiket-noscript.php)
* HTML Script Etiketi (script ve noscript): [https://www.youtube.com/watch?v=gb0gIEtSwhM](https://www.youtube.com/watch?v=gb0gIEtSwhM)

