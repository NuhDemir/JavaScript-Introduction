## alert() ve window.alert() Kullanımı JavaScript'te

**alert()** ve **window.alert()** fonksiyonları, JavaScript'te kullanıcıya bir uyarı mesajı veya bilgilendirme kutusu göstermek için kullanılır. Her iki fonksiyon da aynı işi yapar, ancak kullanım şekilleri biraz farklıdır.

**alert():**

* `alert()` fonksiyonu doğrudan kullanılabilir, herhangi bir nesneye gerek yoktur.
* Daha kısa ve yazması daha kolaydır.

**window.alert():**

* `window.alert()` fonksiyonu, `window` nesnesi üzerinden çağrılır.
* Daha az kullanılır, ancak nesne yönelimli yaklaşım için uygundur.

**Örnekler:**

**alert() ile kullanım:**

```javascript
alert("Merhaba Dünya!");

var isim = prompt("Lütfen isminizi giriniz:");
alert("Merhaba, " + isim + "!");
```

**window.alert() ile kullanım:**

```javascript
window.alert("Merhaba Dünya!");

var soyisim = prompt("Lütfen soyisminizi giriniz:");
window.alert("Merhaba, " + soyisim + "!");
```

**Her iki örnekte de aynı sonuç elde edilir.**

**alert() ve window.alert() Fonksiyonlarının Özellikleri:**

* Her iki fonksiyon da tek bir parametre alır. Bu parametre, gösterilecek mesajın metnidir.
* Her iki fonksiyon da kullanıcı tarafından tıklanana kadar modal bir pencere açar. Modal pencere tıklandığında veya "Tamam" düğmesi tıklandığında pencere kapanır.
* Her iki fonksiyon da herhangi bir değer döndürmez.

**Kullanım Alanları:**

* Kullanıcıyı bilgilendirmek için (örneğin, bir form gönderildiğinde başarı mesajı göstermek)
* Kullanıcıdan girdi almak için (örneğin, kullanıcının adını sormak)
* Hataları bildirmek için (örneğin, formda eksik bilgi girişi olduğunda)

**Dikkat Edilmesi Gerekenler:**

* `alert()` ve `window.alert()` fonksiyonları kullanıcı deneyimini olumsuz etkileyebilir. Çok sık kullanılmamaları ve daha az rahatsız edici yöntemler (örnek: ekranın köşesinde bildirim göstermek) tercih edilmelidir.
* Bu fonksiyonlar mobil cihazlarda iyi görüntülenmeyebilir.

**Ek Bilgiler:**

* JavaScript'te `confirm()` ve `prompt()` fonksiyonları da kullanıcı etkileşimi için kullanılabilir. 
   * `confirm()` fonksiyonu, onay/iptal penceresi açar ve kullanıcıdan onay alır.
   * `prompt()` fonksiyonu, kullanıcıdan metin girişi alır.
-