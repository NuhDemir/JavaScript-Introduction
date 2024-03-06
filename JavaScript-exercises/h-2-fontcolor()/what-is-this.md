## JavaScript Dilinde fontcolor() Metodu

**fontcolor()** metodu, JavaScript'te **mevcut değildir**. 

**Benzer İşlev Gösteren Özellikler:**

**1. style.color:** Bir metnin rengini değiştirmek için kullanılır.

**2. CSS color özelliği:** Bir metnin rengini HTML veya CSS ile değiştirmek için kullanılır.

**Örnek:**

```javascript
// style.color kullanımı

const text = document.getElementById("my-text");
text.style.color = "red";

// CSS color özelliği kullanımı

const element = document.querySelector(".my-element");
element.style.color = "blue";
```

**Özet:**

| Özellik | Etki | HTML Etiketi | CSS Özelliği |
|---|---|---|---|
| **style.color** | Bir metnin rengini değiştirmek | Yok | `element.style.color = "color";` |
| **color** | Bir metnin rengini HTML veya CSS ile değiştirmek | `style="color: red;"` | `color: red;` |

**Not:**

* **style.color** özelliği, JavaScript ile bir metnin rengini dinamik olarak değiştirmek için kullanılır.
* **color** özelliği, HTML veya CSS ile bir metnin rengini statik olarak tanımlamak için kullanılır.

**Ek Bilgiler:**

* Yukarıdaki özelliklere ek olarak, `rgb()`, `rgba()` ve `hsl()` gibi renk fonksiyonlarını da kullanabilirsiniz.
* Renk kodları hakkında daha fazla bilgi için CSS Renk Kodları: [https://www.w3schools.com/css/css_colors.asp](https://www.w3schools.com/css/css_colors.asp) sayfasına bakabilirsiniz.

Umarım bu bilgiler JavaScript'te bir metnin rengini değiştirme konusunda size yardımcı olmuştur.
