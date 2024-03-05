## JavaScript Dilinde sup() Metodu

**Amaç:** Bir metnin tüm harflerini üste simge olarak dönüştürmek.

**Kullanım Alanları:**

* Üst simge metin oluşturmak
* Matematiksel ve bilimsel gösterimlerde üste simge kullanmak
* Özel karakterler oluşturmak

**Çalışma Mantığı:**

**sup()** metodu, bir metnin tüm harflerini Unicode karakter kodlarına göre üste simge eşdeğerlerine dönüştürür.

**Kodlama Örnekleri:**

**1. Üst Simge Metin Oluşturmak:**

```javascript
const text = "Merhaba Dünya!";
const supText = text.sup();

console.log(supText); // Yazdırır: "Merhaba Dünya!" (Üst simge olarak)
```

**2. Matematiksel ve Bilimsel Gösterimlerde Üste Simge Kullanmak:**

```javascript
const x = 2;
const y = 3;
const supText = `x^${y}`;

console.log(supText); // Yazdırır: "x³"
```

**3. Özel Karakterler Oluşturmak:**

```javascript
const degreeSymbol = "°";
const supDegreeSymbol = degreeSymbol.sup();

console.log(supDegreeSymbol); // Yazdırır: "°" (Üst simge olarak)
```

**Özet:**

| Özellik | Açıklama |
|---|---|
| **Amaç** | Bir metnin tüm harflerini üste simge olarak dönüştürmek. |
| **Kullanım Alanları** | Üst simge metin oluşturmak, matematiksel ve bilimsel gösterimlerde üste simge kullanmak, özel karakterler oluşturmak |
| **Çalışma Mantığı** | Bir metnin tüm harflerini Unicode karakter kodlarına göre üste simge eşdeğerlerine dönüştürür. |

**Ek Bilgiler:**

* **sup()** metodu, locale bilgisini dikkate almaz.
* Üste simge eşdeğeri olmayan karakterler olduğu gibi bırakılır.

