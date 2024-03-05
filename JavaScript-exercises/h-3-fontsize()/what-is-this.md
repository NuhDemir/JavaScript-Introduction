## JavaScript Dilinde fontsize() Metodu

**fontsize()** metodu, JavaScript'te **mevcut değildir**. 

**Benzer İşlev Gösteren Özellikler:**

**1. style.fontSize:** Bir metnin yazı tipi boyutunu değiştirmek için kullanılır.

**2. CSS font-size özelliği:** Bir metnin yazı tipi boyutunu HTML veya CSS ile değiştirmek için kullanılır.

**Örnek:**

```javascript
// style.fontSize kullanımı

const text = document.getElementById("my-text");
text.style.fontSize = "24px";

// CSS font-size özelliği kullanımı

const element = document.querySelector(".my-element");
element.style.fontSize = "16px";
```

**Özet:**

| Özellik | Etki | HTML Etiketi | CSS Özelliği |
|---|---|---|---|
| **style.fontSize** | Bir metnin yazı tipi boyutunu değiştirmek | Yok | `element.style.fontSize = "size";` |
| **font-size** | Bir metnin yazı tipi boyutunu HTML veya CSS ile değiştirmek | `style="font-size: 24px;"` | `font-size: 24px;` |

**Not:**

* **style.fontSize** özelliği, JavaScript ile bir metnin yazı tipi boyutunu dinamik olarak değiştirmek için kullanılır.
* **font-size** özelliği, HTML veya CSS ile bir metnin yazı tipi boyutunu statik olarak tanımlamak için kullanılır.

**Ek Bilgiler:**

* Yukarıdaki özelliklere ek olarak, `px`, `em`, `rem` ve `%` gibi farklı boyut birimlerini de kullanabilirsiniz.
* Yazı tipi boyutları hakkında daha fazla bilgi için CSS Yazı Tipi Boyutları: [https://www.w3schools.com/css/css_font_size.asp](https://www.w3schools.com/css/css_font_size.asp) sayfasına bakabilirsiniz.

