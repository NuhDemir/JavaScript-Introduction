## FTP Kavramı

**FTP Nedir?**

FTP, "File Transfer Protocol" (Dosya Aktarım Protokolü) anlamına gelir. FTP, dosyaları bir bilgisayardan diğerine aktarmak için kullanılan bir standart protokoldür. İnternet üzerinden dosya aktarmak için en yaygın kullanılan protokollerden biridir.

**FTP Nasıl Çalışır?**

FTP, istemci-sunucu modelini kullanır. Bir FTP istemcisi, dosyaları aktarmak için bir FTP sunucusuna bağlanır. FTP sunucusu, dosyaları depolamak için kullanılır.

**FTP'nin Avantajları:**

* **Kolay Kullanım:** FTP, kullanımı kolay bir protokoldür.
* **Güvenilirlik:** FTP, güvenilir bir protokoldür ve dosyaların doğru şekilde aktarıldığından emin olur.
* **Güvenlik:** FTP, dosyaları şifreleme yoluyla koruma altına alabilir.

**JavaScript'in FTP'de Önemi:**

JavaScript, FTP'yi daha interaktif ve kullanımı kolay hale getirmek için kullanılabilir. JavaScript ile şunlar yapılabilir:

* **Sürükle ve bırak dosya yükleme:** Kullanıcıların dosyaları sürükle ve bırak yöntemiyle bir FTP sunucusuna yüklemesine olanak tanır.
* **Dosya ilerleme göstergesi:** Kullanıcılara dosya yükleme ve indirme ilerlemesini gösteren bir gösterge oluşturur.
* **Dosya listesi:** Bir FTP sunucusundaki dosyaların listesini dinamik olarak oluşturur.



FTP, dosyaları bir bilgisayardan diğerine aktarmak için kullanılan bir protokole verilen isimdir. Bu protokolü kullanabilmek için ise iki önemli bileşen vardır: **FTP istemcisi** ve **FTP sunucusu**.

**1. FTP İstemcisi (Client):**

* Kullanıcıların dosyaları yönetmek ve aktarmak için kullandığı bir yazılımdır.
* Birçok farklı FTP istemcisi mevcuttur ve bunlar genellikle ücretsiz olarak kullanılabilir.
* Örnekler: FileZilla, WinSCP, Cyberduck

**FTP istemcisinin özellikleri:**

* **Kullanıcı arayüzü:** Dosyaları kolayca görüntülemek, seçmek ve aktarmak için bir arayüz sunar.
* **Bağlantı kurma:** FTP sunucusuna bağlanmak için kullanıcı adı ve parola gibi bilgileri girmenizi sağlar.
* **Dosya transferi:** Dosyaları FTP sunucusuna yüklemek veya indirmek için izin verir.
* **Dosya yönetimi:** FTP sunucusundaki dosyaları silmek, yeniden adlandırmak ve klasör oluşturmak gibi işlemleri gerçekleştirmeyi sağlar.

**2. FTP Sunucusu (Server):**

* Dosyaları depolamak için kullanılan bir yazılım veya donanımdır.
* Genellikle web sunucuları gibi diğer hizmetlerin yanı sıra çalışır. 
* Erişim kontrolü sağlayan güvenlik özellikleri sunar.

**FTP sunucusunun özellikleri:**

* **Dosya depolama:** Dosyaları güvenli bir şekilde saklar.
* **Erişim kontrolü:** Kullanıcıların sunucuya kimlerin ve hangi yetkilerle erişebileceğini belirler.
* **Transfer protokolü:** FTP protokolünü kullanarak dosya transferi sağlar.
* **Güvenlik:** Dosyaları yetkisiz erişime karşı korumak için şifreleme gibi güvenlik özellikleri sunabilir.

**FTP'nin Kullanım Alanları:**

* Web sitelerinin dosyalarını bir web sunucusuna yüklemek
* Dosyaları bir bilgisayardan diğerine aktarmak
* Yedekleme yapmak

**Özet:**

* **FTP istemcisi:** Dosyaları yönetmek ve aktarmak için kullanıcıların kullandığı bir yazılım.
* **FTP sunucusu:** Dosyaları depolamak için kullanılan bir yazılım veya donanım.

Her ikisi de bir arada çalışarak dosyaların güvenli ve kolay bir şekilde aktarılmasını sağlar.

**JavaScript Örnekleri:**

**1. Sürükle ve Bırak Dosya Yükleme:**

```javascript
function dragAndDrop() {
  var dropArea = document.getElementById("dropArea");

  dropArea.addEventListener("dragover", function(event) {
    event.preventDefault();
  });

  dropArea.addEventListener("drop", function(event) {
    event.preventDefault();

    var files = event.dataTransfer.files;

    // Dosyaları FTP sunucusuna yükleyin...
  });
}
```

**2. Dosya İlerleme Göstergesi:**

```javascript
function updateProgress(progress) {
  var progressBar = document.getElementById("progressBar");

  progressBar.style.width = progress + "%";
}

function uploadFile() {
  var file = document.getElementById("file").files[0];

  // Dosyayı FTP sunucusuna yükleyin...

  // Yükleme ilerlemesini güncelleyin...
}
```

**3. Dosya Listesi:**

```javascript
function listFiles() {
  var ftp = new FTP();

  ftp.connect("ftp.example.com", "username", "password");

  ftp.list("/public_html", function(files) {
    var fileList = document.getElementById("fileList");

    for (var i = 0; i < files.length; i++) {
      var file = files[i];

      var listItem = document.createElement("li");
      listItem.innerHTML = file.name;

      fileList.appendChild(listItem);
    }
  });
}
```

**JavaScript'in FTP'de kullanımıyla ilgili bazı popüler örnekler şunlardır:**

* **FileZilla:** Popüler bir FTP istemcisidir ve JavaScript kullanarak sürükle ve bırak dosya yükleme ve dosya ilerleme göstergesi gibi özellikler sunar.
* **Cyberduck:** Bir başka popüler FTP istemcisidir ve JavaScript kullanarak dosya listesi ve dosya arama gibi özellikler sunar.
* **WordPress:** Dosyaları FTP sunucusuna yüklemek için JavaScript kullanan bir içerik yönetim sistemidir.

**JavaScript, FTP'yi daha interaktif ve kullanımı kolay hale getirmek için kullanılabilecek güçlü bir araçtır.**

**Ek Kaynaklar:**

* FTP protokolü hakkında daha fazla bilgi: [https://en.wikipedia.org/wiki/File_Transfer_Protocol](https://en.wikipedia.org/wiki/File_Transfer_Protocol)
* JavaScript ile FTP: [https://stackoverflow.com/questions/26946684/implementing-ftp-using-javascript](https://stackoverflow.com/questions/26946684/implementing-ftp-using-javascript)

**Not:** Yukarıdaki kod örnekleri, JavaScript'in FTP'de nasıl kullanılabileceğini gösteren basit örneklerdir. Gerçek uygulamalarda, daha fazla hata kontrolü ve güvenlik dikkate alınmalıdır.
