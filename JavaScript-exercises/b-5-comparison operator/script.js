var x = 10;
var y = "10";

console.log(x == y); // true

// Hem değer hem de tür eşitliği
console.log(x === y); // false

// Eşitsizlik
console.log(x != y); // false

// Hem değer hem de tür eşitsizliği
console.log(x !== y); // true

// Küçükten büyüklüğe
console.log(x < y); // false

// Küçük veya eşit
console.log(x <= y); // true

// Büyükten küçüklüğe
console.log(x > y); // false

// Büyük veya eşit
console.log(x >= y); // true

/* == eşit ise : Değerler arasında eşitlik sınaması için kullanılır.
klaus == klaus : true
klause == matheus : false
(!=) değerler arasındaki eşitsizlik sınaması için kullanılır.
klaus != matheus : true
=== denk ise : Değerler arasında denklik sınaması için kullanılır.
8 === 8 : true
watson === angelıca  : false
9 === "9" : false
< küçük ise : ilk değerin ikinci değerden küçük olma sınamasında kullanılır.
> büyük ise : ilk değerin ikinci değerden büyük olma sınamasında kullanılır.
<= küçük veya eşitse : ilk değerin ikinci değerden küçük olması ve ya eşit olma sınamasında kullanılır.
*/
