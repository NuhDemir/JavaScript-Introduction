## Hosting Kavramı

**Hosting Nedir?**

Hosting, web sitenizin veya web uygulamanızın dosyalarını internette barındıran bir hizmettir. Hosting sağlayıcıları, web sitenizin dosyalarını depolamak için sunucular ve internet bağlantısı sağlar. Bu sayede, web siteniz veya web uygulamanız internette erişilebilir hale gelir.

**Hosting Çeşitleri:**

* **Paylaşılan Hosting:** Bir sunucuda birden fazla web sitesi barındırılır.
* **VPS (Sanal Özel Sunucu):** Bir sunucu sanallaştırma teknolojisi ile birden fazla sanal sunucuya bölünür.
* **Adanmış Sunucu:** Bir sunucu tek bir web sitesi veya web uygulaması için kullanılır.

**JavaScript'in Hosting'de Önemi:**

JavaScript, web sitenizin veya web uygulamanızın dinamik ve interaktif olmasını sağlayan bir programlama dilidir. JavaScript ile şunlar yapılabilir:

* **Butonlara ve diğer öğelere tıklama olayları eklemek**
* **Animasyonlar ve interaktif grafikler oluşturmak**
* **Verileri doğrulamak ve form gönderilerini işlemek**
* **AJAX ile web sunucusuyla iletişim kurmak**
* **Web uygulamaları geliştirmek**

**JavaScript Örnekleri:**

**1. Bir butona tıklama olayı eklemek:**

```javascript
function myFunction() {
  alert("Butona tıklandı!");
}

document.getElementById("myButton").addEventListener("click", myFunction);
```

Bu kod, "myButton" kimlikli butona tıklandığında "Butona tıklandı!" mesajını gösterecek bir uyarı penceresi açacaktır.

**2. Bir animasyon oluşturmak:**

```javascript
var element = document.getElementById("myElement");

var interval = setInterval(function() {
  element.style.left = (parseInt(element.style.left) + 1) + "px";

  if (parseInt(element.style.left) >= 100) {
    clearInterval(interval);
  }
}, 10);
```

Bu kod, "myElement" kimlikli öğeyi 10 piksel sola hareket ettirecek bir animasyon oluşturacaktır.

**3. Bir form gönderisini işlemek:**

```javascript
function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;

  if (name === "" || email === "") {
    alert("Lütfen tüm alanları doldurun!");
    return false;
  }

  // Form verilerini web sunucusuna gönderin...

  return true;
}
```

Bu kod, "name" ve "email" kimlikli alanların boş olmadığını kontrol edecek ve boşlarsa bir uyarı penceresi açacaktır. Alanlar doluysa, form verileri web sunucusuna gönderilecektir.

**4. AJAX ile web sunucusuyla iletişim kurmak:**

```javascript
var xhr = new XMLHttpRequest();

xhr.open("GET", "ajax.php");

xhr.onload = function() {
  if (xhr.status === 200) {
    // Sunucu tarafından gönderilen verileri işleyin...
  } else {
    console.error("Bir hata oluştu!");
  }
};

xhr.send();
```

Bu kod, "ajax.php" dosyasına bir AJAX isteği gönderecek ve sunucu tarafından gönderilen verileri işleyecektir.


## JavaScript'in Hosting'de Kullanımıyla İlgili Popüler Örnekler

**1. Gmail:** Gmail, arayüzünü daha interaktif hale getirmek ve kullanıcıların e-postalarını daha kolay yönetmelerine yardımcı olmak için JavaScript kullanır. Örneğin:

* **Mesajları açmak ve kapatmak:** JavaScript, kullanıcıların e-posta mesajlarını tek bir tıklamayla açmasını ve kapatmasını sağlar.
* **E-posta arama:** JavaScript, kullanıcıların gelen kutularında hızlı ve kolay bir şekilde arama yapmalarını sağlar.
* **Etiketler ve klasörler:** JavaScript, kullanıcıların e-postalarını etiketlemesine ve klasörlere ayırmasına yardımcı olur.

**2. Google Maps:** Google Maps, haritayı etkileşimli hale getirmek ve kullanıcılara yol tarifi ve diğer bilgiler sağlamak için JavaScript kullanır. Örneğin:

* **Harita üzerinde gezinme:** JavaScript, kullanıcıların haritada fare ile veya dokunmatik ekranla kolayca gezinmelerini sağlar.
* **Yol tarifi:** JavaScript, kullanıcılara başlangıç noktalarından varış noktalarına en iyi rotaları gösterir.
* **Konum bilgisi:** JavaScript, kullanıcılara yakınlardaki restoranlar, benzin istasyonları ve diğer ilgi çekici noktalar gibi konum bilgileri sağlar.

**3. Facebook:** Facebook, haber akışını dinamik hale getirmek ve kullanıcılara etkileşimli bir deneyim sunmak için JavaScript kullanır. Örneğin:

* **Haber akışı güncellemeleri:** JavaScript, kullanıcıların haber akışlarını gerçek zamanlı olarak günceller ve yeni gönderileri gösterir.
* **Beğenme ve yorum yapma:** JavaScript, kullanıcıların gönderileri beğenmesine ve yorum yapmasına olanak tanır.
* **Canlı sohbet:** JavaScript, Facebook Messenger aracılığıyla canlı sohbet imkanı sunar.

**4. YouTube:** YouTube, videoları oynatmak ve kullanıcılara etkileşimli bir video izleme deneyimi sunmak için JavaScript kullanır. Örneğin:

* **Videoları oynatma ve duraklatma:** JavaScript, kullanıcıların videoları oynatmasını, duraklatmasını ve ileri geri sarmamasını sağlar.
* **Ses seviyesini kontrol etme:** JavaScript, kullanıcıların videoların ses seviyesini kontrol etmesine olanak tanır.
* **Yorumlar:** JavaScript, kullanıcıların videolara yorum yapmasına ve diğer kullanıcıların yorumlarını okumasına olanak tanır.

**5. Twitter:** Twitter, tweet'leri gerçek zamanlı olarak güncellemek ve kullanıcılara etkileşimli bir deneyim sunmak için JavaScript kullanır. Örneğin:

* **Tweet'leri yenileme:** JavaScript, kullanıcılara en son tweet'leri gerçek zamanlı olarak gösterir.
* **Tweet'lere yanıt verme ve retweetleme:** JavaScript, kullanıcıların tweet'lere yanıt vermesine ve retweetlemesine olanak tanır.
* **Beğenme ve favoriye ekleme:** JavaScript, kullanıcıların tweet'leri beğenmesine ve favoriye eklemesine olanak tanır.

