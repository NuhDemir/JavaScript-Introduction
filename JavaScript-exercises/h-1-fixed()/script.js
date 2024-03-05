const text = "Merhaba Dünya!";

// strikethrough() kullanımı
const strikethroughText = text.strikethrough();

// textDecoration kullanımı
const strikethroughText2 = text.style.textDecoration = "line-through";

console.log(strikethroughText); // Yazdırır: "<strike>Merhaba Dünya!</strike>"
console.log(strikethroughText2); // Yazdırır: "Merhaba Dünya!" (üzeri çizili olarak)