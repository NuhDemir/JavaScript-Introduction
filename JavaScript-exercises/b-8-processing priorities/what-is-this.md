## JavaScript İşlem Önceliği Durumları

JavaScript'te işlemler, belirli bir öncelik sırasına göre gerçekleştirilir. Bu öncelik sırasını bilmek, karmaşık ifadelerin nasıl değerlendirileceğini anlamak için önemlidir.

**İşlem Önceliği Sırası:**

1. **Parantez:** Parantez içindeki işlemler öncelikli olarak değerlendirilir.
2. **Üslü ifadeler:** Üslü ifadeler (^, **), parantezlerden sonra değerlendirilir.
3. **Çarpma ve bölme:** Çarpma ve bölme işlemleri soldan sağa doğru değerlendirilir.
4. **Toplama ve çıkarma:** Toplama ve çıkarma işlemleri soldan sağa doğru değerlendirilir.

**Örnek:**

```javascript
var sonuc = 2 + 3 * 4;

console.log(sonuc); // 14 yazdırır.
```

**Bu örnekte:**

* Çarpma işlemi toplama işleminden önce gerçekleştirilir.
* Bu nedenle, 3 * 4 işleminin sonucu olan 12, 2'ye eklenir.

**Önemli Noktalar:**

* Birden fazla işlem aynı önceliğe sahipse, işlemler soldan sağa doğru değerlendirilir.
* İşlem önceliğini değiştirmek için parantez kullanılabilir.
* Karmaşık ifadeleri okunabilir hale getirmek için parantez kullanmak önemlidir.

**Örnek:**

```javascript
var sonuc = (2 + 3) * 4;

console.log(sonuc); // 20 yazdırır.
```

**Bu örnekte:**

* Parantez içindeki toplama işlemi önce gerçekleştirilir.
* Daha sonra, 20 değeri 4 ile çarpılır.

**Aşağıdaki tabloda, JavaScript'teki işlem önceliği sırası detaylı bir şekilde gösterilmiştir:**

| İşlem | Örnek | Öncelik |
|---|---|---|
| Parantez | (2 + 3) * 4 | En yüksek |
| Üslü ifadeler | 2 ^ 3 | 2. |
| Çarpma ve bölme | 2 * 3 / 4 | 3. |
| Toplama ve çıkarma | 2 + 3 - 4 | 4. |

**Ek Kaynaklar:**

* JavaScript İşlem Önceliği Tablosu: [https://www.w3schools.com/js/js_operators.asp](https://www.w3schools.com/js/js_operators.asp)
