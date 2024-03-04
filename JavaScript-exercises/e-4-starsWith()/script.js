var text = "Introduction JavaScript."
document.write(text + "<br/>");

var output1 = text.startsWith("JavaScript");
document.write(output1);

const str = "Merhaba Dünya";

console.log(str.startsWith("Merhaba")); // true

if (str.startsWith("Merhaba")) {
  console.log("Metin 'Merhaba' ile başlıyor.");
} else {
  console.log("Metin 'Merhaba' ile başlamıyor.");
}