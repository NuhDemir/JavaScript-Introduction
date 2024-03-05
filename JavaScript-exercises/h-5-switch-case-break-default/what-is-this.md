## JavaScript Dilinde anchor() Metodu

**anchor()** metodu, JavaScript'te **mevcut değildir**. 

**Benzer İşlev Gösteren Özellikler:**

**1. document.getElementById():** Bir HTML elementini ID'sine göre seçmek için kullanılır.

**2. document.querySelector():** Bir HTML elementini CSS seçicisine göre seçmek için kullanılır.

**3. element.scrollIntoView():** Bir HTML elementini görünür alana kaydırmak için kullanılır.

**Örnek:**

```javascript
// Bir elemente ID'sine göre kaydırma

const element = document.getElementById("my-element");
element.scrollIntoView();

// Bir elemente CSS seçicisine göre kaydırma

const element2 = document.querySelector(".my-element");
element2.scrollIntoView();
```

**Özet:**

| Özellik | Etki | HTML Etiketi | CSS Özelliği |
|---|---|---|---|
| **document.getElementById()** | Bir HTML elementini ID'sine göre seçmek | `id="my-element"` | Yok |
| **document.querySelector()** | Bir HTML elementini CSS seçicisine göre seçmek | `.my-element` | Yok |
| **element.scrollIntoView()** | Bir HTML elementini görünür alana kaydırmak | Yok | Yok |

**Not:**

* **document.getElementById()** ve **document.querySelector()** fonksiyonları, bir HTML elementini seçmek için kullanılır.
* **element.scrollIntoView()** fonksiyonu, seçilen elementi görünür alana kaydırmak için kullanılır.

**Ek Bilgiler:**

* Yukarıdaki özelliklere ek olarak, `window.scrollTo()` fonksiyonunu da kullanabilirsiniz.
* Scroll işlemleri hakkında daha fazla bilgi için JavaScript Scroll İşlemleri: [geçersiz URL kaldırıldı] sayfasına bakabilirsiniz.

