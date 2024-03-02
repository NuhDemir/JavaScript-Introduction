## HTML'de Tarayıcılara Göre Accesskey Tuş Kombinasyonları

HTML'de, **accesskey** özelliği, kullanıcıların belirli bir web sitesindeki öğelere hızlı bir şekilde erişmesine olanak tanıyan klavye kısayolları tanımlamanıza olanak tanır. Bu özellik, fare veya diğer giriş cihazlarını kullanamayan kullanıcılar için özellikle yararlıdır.

**Accesskey Kullanımı:**

* **HTML kodunda:** `accesskey` özelliğini, bir öğenin `href` veya `tabindex` özelliğine ekleyebilirsiniz.
* **Kullanım:** Kullanıcı, tanımlanmış accesskey tuşuna basarak (genellikle `Alt` tuşu ile birlikte) doğrudan o elemente atlayabilir.

**Örnek:**

```html
<a href="index.html" accesskey="1">Ana Sayfa</a>
```

Bu kodda, `Ana Sayfa` bağlantısına `1` accesskey'i atanmıştır. Kullanıcı `Alt` + `1` tuşlarına bastığında, doğrudan `index.html` sayfasına yönlendirilir.

**Tarayıcı Farklılıkları:**

Farklı tarayıcılar, accesskey tuş kombinasyonlarını farklı şekilde işleyebilir. Aşağıda, bazı yaygın tarayıcılar için accesskey tuş kombinasyonları yer almaktadır:

**Tarayıcı** | **Accesskey Tuş Kombinasyonu**
---|---|
Chrome | Alt + tuş
Firefox | Alt + Shift + tuş
Edge | Alt + tuş
Safari | Ctrl + Option + tuş

**Accesskey Kullanırken Dikkat Edilmesi Gerekenler:**

* Her accesskey tuş kombinasyonu, birden fazla öğeye atanmamalıdır.
* Accesskey tuş kombinasyonları, tarayıcı ayarlarında değiştirilebilir.
* Accesskey tuş kombinasyonlarının kullanımının, tüm kullanıcılar için erişilebilirliği garanti etmediğini unutmayın.



## HTML'de Accesskey Örnek Kodları

**1. Basit bir örnek:**

```html
<a href="index.html" accesskey="1">Ana Sayfa</a>
```

Bu kodda, `Ana Sayfa` bağlantısına `1` accesskey'i atanmıştır. Kullanıcı `Alt` + `1` tuşlarına bastığında, doğrudan `index.html` sayfasına yönlendirilir.

**2. Birden fazla öğeye accesskey atama:**

```html
<a href="iletisim.html" accesskey="2">İletişim</a>
<a href="hakkimizda.html" accesskey="3">Hakkımızda</a>
```

Bu kodda, `İletişim` bağlantısına `2` ve `Hakkımızda` bağlantısına `3` accesskey'i atanmıştır. Kullanıcı `Alt` + `2` tuşlarına bastığında `iletisim.html` sayfasına, `Alt` + `3` tuşlarına bastığında ise `hakkimizda.html` sayfasına yönlendirilir.

**3. Accesskey'i bir form öğesine atama:**

```html
<form action="gonder.php" method="post">
  <input type="text" name="isim" accesskey="4" />
  <input type="submit" value="Gönder" />
</form>
```

Bu kodda, `isim` form öğesine `4` accesskey'i atanmıştır. Kullanıcı `Alt` + `4` tuşlarına bastığında, doğrudan `isim` form öğesine odaklanır.

**4. Accesskey'i bir resim öğesine atama:**

```html
<img src="logo.png" alt="Şirket Logosu" accesskey="5" />
```

Bu kodda, `logo.png` resmine `5` accesskey'i atanmıştır. Kullanıcı `Alt` + `5` tuşlarına bastığında, resim üzerindeki odaklanma sağlanır.

**5. Accesskey'i bir JavaScript fonksiyonuna bağlama:**

```html
<a href="#" onclick="myFunction()">Hakkımızda</a>

<script>
function myFunction() {
  // ...
}
</script>
```

Bu kodda, `Hakkımızda` bağlantısına `onclick` özelliği ile `myFunction()` JavaScript fonksiyonu bağlanmıştır. Kullanıcı `Alt` + `H` tuşlarına bastığında, `myFunction()` fonksiyonu tetiklenir.

