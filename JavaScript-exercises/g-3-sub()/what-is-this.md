## JavaScript Dilinde Sub() Metodu

**Amaç:** Bir dizeden belirli bir kısmı ayıklamak.

**Kullanım Alanları:**

* Metin parçalarını ayıklamak
* Belirli bir formata göre metinleri işlemek
* Verilerden parçaları çıkarmak

**Çalışma Mantığı:**

**sub()** metodu, bir dizeden belirli bir başlangıç ​​konumundan belirli bir uzunlukta bir parçayı ayıklar.

**Kodlama Örnekleri:**

**1. Metin Parçasını Ayıklamak:**

```javascript
const text = "Merhaba Dünya!";
const subText = text.sub(7, 5); // "Dünya" ayıklanır.

console.log(subText); // Yazdırır: "Dünya"
```

**2. Belirli Bir Formata Göre Metinleri İşlemek:**

```javascript
const dateString = "2023-11-16";
const year = dateString.sub(0, 4); // "2023" ayıklanır.
const month = dateString.sub(5, 2); // "11" ayıklanır.
const day = dateString.sub(8, 2); // "16" ayıklanır.

console.log(year, month, day); // Yazdırır: "2023 11 16"
```

**3. Verilerden Parçaları Çıkarmak:**

```javascript
const data = "isim:Ahmet,yaş:25";
const name = data.sub(0, 5); // "isim:" ayıklanır.
const age = data.sub(9, 2); // "25" ayıklanır.

console.log(name, age); // Yazdırır: "isim: 25"
```

**Özet:**

| Özellik | Açıklama |
|---|---|
| **Amaç** | Bir dizeden belirli bir kısmı ayıklamak. |
| **Kullanım Alanları** | Metin parçalarını ayıklamak, belirli bir formata göre metinleri işlemek, verilerden parçaları çıkarmak |
| **Çalışma Mantığı** | Bir dizeden belirli bir başlangıç ​​konumundan belirli bir uzunlukta bir parçayı ayıklar. |

**Ek Bilgiler:**

* **sub()** metodu, negatif bir başlangıç ​​konumu belirterek dizeyi sondan ayıklamak için kullanılabilir.
* **sub()** metodu, bir uzunluk değeri belirtilmezse dizeyi başlangıç ​​konumundan sonuna kadar ayıklar.

