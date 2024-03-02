## JavaScript Kodlarını Eski ve Tutarsız Tarayıcılardan Saklama

Eski ve tutarsız tarayıcılar, modern JavaScript kodlarını çalıştıramayabilir. Bu, web sitenizin veya uygulamanızın bu tarayıcılarda düzgün çalışmasını engelleyebilir. JavaScript kodlarını eski ve tutarsız tarayıcılardan saklamak için aşağıdaki yöntemleri kullanabilirsiniz:

**1. `noscript` Etiketi:**

```html
<noscript>
<script>
// Bu kod eski ve tutarsız tarayıcılarda çalıştırılacaktır.
</script>
</noscript>
```

**2. `if` Deyimi:**

```javascript
if (!window.addEventListener) {
  // Bu kod eski ve tutarsız tarayıcılarda çalıştırılacaktır.
} else {
  // Bu kod modern tarayıcılarda çalıştırılacaktır.
}
```

**3. Modernizr Kütüphanesi:**

Modernizr, tarayıcıda hangi özelliklerin desteklendiğini belirlemek için kullanılan bir JavaScript kütüphanesidir. Modernizr'ı kullanarak, kodunuzun hangi tarayıcılarda çalıştırılacağına bağlı olarak farklı kodları çalıştırabilirsiniz.

**Örnek:**

```javascript
if (Modernizr.flexbox) {
  // Bu kod flexbox'ı destekleyen tarayıcılarda çalıştırılacaktır.
} else {
  // Bu kod flexbox'ı desteklemeyen tarayıcılarda çalıştırılacaktır.
}
```

**Nedeni ve Amacımız:**

Eski ve tutarsız tarayıcılardan JavaScript kodlarını saklamanın temel nedeni, web sitenizin veya uygulamanızın bu tarayıcılarda da düzgün çalışmasını sağlamaktır. Bu, daha geniş bir kullanıcı kitlesine ulaşmanıza ve web sitenizin veya uygulamanızın daha erişilebilir olmasını sağlamanıza yardımcı olur.

**Ek Bilgiler:**

* Eski ve tutarsız tarayıcılar için özel kod yazmaktan kaçınmak önemlidir. Mümkünse, modern tarayıcılarda çalışan ve eski tarayıcılara geriye dönük uyumlu kod yazmaya çalışın.
* JavaScript kodunuzu minify ve obfuscate etmek, eski tarayıcılarda daha hızlı çalışmasını sağlayabilir.
* Eski tarayıcılar için özel bir polyfill kütüphanesi kullanmayı da düşünebilirsiniz.

**Özet:**

* Eski ve tutarsız tarayıcılardan JavaScript kodlarını saklamak, web sitenizin veya uygulamanızın bu tarayıcılarda da düzgün çalışmasını sağlamaya yardımcı olur.
* `noscript` etiketi, `if` deyimi ve Modernizr kütüphanesi gibi çeşitli yöntemler kullanarak JavaScript kodlarını eski tarayıcılardan saklayabilirsiniz.
* Eski tarayıcılar için özel kod yazmaktan kaçınmak ve mümkünse modern tarayıcılarda çalışan ve eski tarayıcılara geriye dönük uyumlu kod yazmaya çalışmak önemlidir.
