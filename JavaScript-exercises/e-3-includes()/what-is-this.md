# Javascript dilinde includes() metodu


| Özellik | Açıklama |
|---|---|
| **Amaç** | Bir dizinin belirli bir değeri içerip içermediğini kontrol etmek |
| **Dönüş Değeri** | Değer dizide varsa **true**, yoksa **false** |
| **Parametreler** | 1. Aranacak değer (zorunlu) 2. Aramanın başlangıç ​​noktası (isteğe bağlı) |
| **Büyük/Küçük Harf Duyarlılığı** | Evet |
| **NaN Değeri** | Kontrol edilebilir |
| **Arama Yönü** | Soldan sağa |

**Örnek:**

```javascript
const fruits = ["elma", "muz", "portakal"];

console.log(fruits.includes("elma")); // true
console.log(fruits.includes("armut")); // false
console.log(fruits.includes("muz", 1)); // true
```

**Ek Bilgiler:**

* **includes()** metodu, dizinin ilk öğesinden aramaya başlar.
* **includes()** metoduna ikinci bir parametre göndererek aramanın başlangıç ​​noktasını belirleyebilirsiniz.
* **includes()** metodu, `Array.prototype` üzerinde bir yöntemdir. Bu nedenle, herhangi bir dizi üzerinde kullanılabilir.



**includes()** metodu, bir dizinin belirli bir değeri içerip içermediğini kontrol etmenizi sağlar. Değer dizide bulunuyorsa **true**, bulunmuyorsa **false** döndürür.

**Kullanım alanları:**

* Bir dizide belirli bir öğenin varlığını kontrol etmek
* Birden fazla dizide arama yapmak
* Bir öğenin bir listeye ait olup olmadığını kontrol etmek
* Kullanıcıdan gelen girdinin geçerliliğini doğrulamak
* Veri filtreleme ve sıralama

**Çalışma mantığı:**

**includes()** metodu, arama yapmak için dizideki her bir öğeyi karşılaştırır. Aranan değer, dizideki herhangi bir öğeyle tam olarak eşleşirse **true** döndürür. Eşleşme yoksa **false** döndürür.

**Örnekler:**

```javascript
// 1. Örnek: Bir dizide belirli bir öğenin varlığını kontrol etmek

const fruits = ["elma", "muz", "portakal"];

console.log(fruits.includes("elma")); // true
console.log(fruits.includes("armut")); // false
```

Bu örnekte, **fruits** dizisi "elma" ve "muz" öğelerini içerir. **includes()** metodu "elma" ve "armut" için ayrı ayrı çalıştırılır. "elma" dizide bulunduğu için **true**, "armut" ise bulunmadığı için **false** döndürülür.

```javascript
// 2. Örnek: Birden fazla dizide arama yapmak

const fruits = ["elma", "muz", "portakal"];
const vegetables = ["havuç", "patates", "domates"];

const searchValue = "elma";

console.log(fruits.includes(searchValue)); // true
console.log(vegetables.includes(searchValue)); // false
```

Bu örnekte, **searchValue** değişkeni "elma" değerine atanır. **includes()** metodu **fruits** ve **vegetables** dizileri üzerinde ayrı ayrı çalıştırılır. "elma" sadece **fruits** dizisinde bulunduğu için sadece **fruits** için **true** döndürülür.

```javascript
// 3. Örnek: Bir öğenin bir listeye ait olup olmadığını kontrol etmek

const fruits = ["elma", "muz", "portakal"];
const selectedFruit = "muz";

console.log(fruits.includes(selectedFruit)); // true

if (fruits.includes(selectedFruit)) {
  console.log(`${selectedFruit} seçilen meyveler arasında.`);
} else {
  console.log(`${selectedFruit} seçilen meyveler arasında değil.`);
}
```

Bu örnekte, **selectedFruit** değişkeni "muz" değerine atanır. **includes()** metodu **fruits** dizisi üzerinde çalıştırılır. "muz" dizide bulunduğu için **true** döndürülür ve **if** bloğuna girilir.

**Ek bilgiler:**

* **includes()** metodu büyük/küçük harfe duyarlıdır.
* **includes()** metoduNaN değerini de kontrol edebilir.
* **includes()** metodu, dizinin ilk öğesinden aramaya başlar.
* **includes()** metoduna ikinci bir parametre göndererek aramanın başlangıç ​​noktasını belirleyebilirsiniz.

**Örnek:**

```javascript
const fruits = ["elma", "muz", "portakal"];

console.log(fruits.includes("muz", 1)); // true
```

Bu örnekte, **includes()** metoduna ikinci bir parametre olarak 1 değeri gönderilir. Bu, aramanın **fruits** dizisinin ikinci öğesinden başlamasını sağlar. "muz" dizinin ikinci öğesinde bulunduğu için **true** döndürülür.

**Daha fazla bilgi için:**

* MDN Web Docs: includes(): [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)



