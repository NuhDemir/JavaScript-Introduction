## JavaScript Dilinde toLowerCase() Metodu

**Amaç:** Bir metnin tüm harflerini küçük harfe dönüştürmek.

**Kullanım Alanları:**

* Metinleri küçük harfe çevirmek
* Form verilerini küçük harfe çevirmek
* URL'leri küçük harfe çevirmek
* Karşılaştırma işlemlerinde büyük/küçük harf hassasiyetini ortadan kaldırmak

**Çalışma Mantığı:**

**toLowerCase()** metodu, bir metnin tüm harflerini Unicode karakter kodlarına göre küçük harf eşdeğerlerine dönüştürür.

**Kodlama Örnekleri:**

**1. Metni Küçük Harfe Çevirmek:**

```javascript
const text = "MERHABA DÜNYA!";
const lowerCaseText = text.toLowerCase();

console.log(lowerCaseText); // Yazdırır: "merhaba dünya!"
```

**2. Form Verisini Küçük Harfe Çevirmek:**

```javascript
const formValue = document.getElementById("name").value;
const lowerCaseValue = formValue.toLowerCase();

// ...
```

**3. URL'yi Küçük Harfe Çevirmek:**

```javascript
const url = "HTTPS://WWW.EXAMPLE.COM/";
const lowerCaseUrl = url.toLowerCase();

console.log(lowerCaseUrl); // Yazdırır: "https://www.example.com/"
```

**4. Karşılaştırma İşlemlerinde Büyük/Küçük Harf Hassasiyetini Ortadan Kaldırmak:**

```javascript
const username1 = "johndoe";
const username2 = "JohnDoe";

if (username1.toLowerCase() === username2.toLowerCase()) {
  // Kullanıcı adları eşleşir.
}
```

**Özet:**

| Özellik | Açıklama |
|---|---|
| **Amaç** | Bir metnin tüm harflerini küçük harfe dönüştürmek. |
| **Kullanım Alanları** | Metinleri küçük harfe çevirmek, form verilerini küçük harfe çevirmek, URL'leri küçük harfe çevirmek, karşılaştırma işlemlerinde büyük/küçük harf hassasiyetini ortadan kaldırmak |
| **Çalışma Mantığı** | Bir metnin tüm harflerini Unicode karakter kodlarına göre küçük harf eşdeğerlerine dönüştürür. |

**Ek Bilgiler:**

* **toLowerCase()** metodu, locale bilgisini dikkate almaz.
* Küçük harf eşdeğeri olmayan karakterler olduğu gibi bırakılır.

Umarım bu bilgiler JavaScript'te **toLowerCase()** metodunu anlamanıza yardımcı olmuştur.