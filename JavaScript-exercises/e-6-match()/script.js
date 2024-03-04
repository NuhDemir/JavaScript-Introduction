// 1. Örnek: Bir metnin belirli bir kelimeyi içerip içermediğini kontrol etmek

const str = "Merhaba Dünya";

const regex = /Merhaba/;

const result = str.match(regex);

if (result) {
  document.write("Metin 'Merhaba' kelimesini içeriyor.");
} else {
  document.write("Metin 'Merhaba' kelimesini içermiyor.");
}

// 2. Örnek: Bir metinden e-posta adreslerini ayıklamak

const str1 = "Bu metin johndoe@example.com ve janedoe@example.com gibi e-posta adresleri içeriyor.";

const regex1 = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/;

const result1 = str.match(regex1);

document.write(result); // ["johndoe@example.com", "janedoe@example.com"]