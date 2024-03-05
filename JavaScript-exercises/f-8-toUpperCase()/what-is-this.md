## JavaScript Dilinde toUpperCase() Metodu

**Amaç:** Bir metnin tüm harflerini büyük harfe dönüştürmek.

**Kullanım Alanları:**

* Metinleri büyük harfe çevirmek
* Form verilerini büyük harfe çevirmek
* URL'leri büyük harfe çevirmek
* Karşılaştırma işlemlerinde büyük/küçük harf hassasiyetini ortadan kaldırmak

**Çalışma Mantığı:**

**toUpperCase()** metodu, bir metnin tüm harflerini Unicode karakter kodlarına göre büyük harf eşdeğerlerine dönüştürür.

**Kodlama Örnekleri:**

**1. Metni Büyük Harfe Çevirmek:**

```javascript
const text = "Merhaba Dünya!";
const upperCaseText = text.toUpperCase();

document.write(upperCaseText); // Yazdırır: "MERHABA DÜNYA!"
```

**2. Form Verisini Büyük Harfe Çevirmek:**

```javascript
const formValue = document.getElementById("name").value;
const upperCaseValue = formValue.toUpperCase();

// ...
```

**3. URL'yi Büyük Harfe Çevirmek:**

```javascript
const url = "https://www.example.com/";
const upperCaseUrl = url.toUpperCase();

document.write(upperCaseUrl); // Yazdırır: "HTTPS://WWW.EXAMPLE.COM/"
```

**4. Karşılaştırma İşlemlerinde Büyük/Küçük Harf Hassasiyetini Ortadan Kaldırmak:**

```javascript
const username1 = "johndoe";
const username2 = "JohnDoe";

if (username1.toUpperCase() === username2.toUpperCase()) {
  // Kullanıcı adları eşleşir.
}
```

**Özet:**

| Özellik | Açıklama |
|---|---|
| **Amaç** | Bir metnin tüm harflerini büyük harfe dönüştürmek. |
| **Kullanım Alanları** | Metinleri büyük harfe çevirmek, form verilerini büyük harfe çevirmek, URL'leri büyük harfe çevirmek, karşılaştırma işlemlerinde büyük/küçük harf hassasiyetini ortadan kaldırmak |
| **Çalışma Mantığı** | Bir metnin tüm harflerini Unicode karakter kodlarına göre büyük harf eşdeğerlerine dönüştürür. |

**Ek Bilgiler:**

* **toUpperCase()** metodu, locale bilgisini dikkate almaz.
* Büyük harf eşdeğeri olmayan karakterler olduğu gibi bırakılır.
