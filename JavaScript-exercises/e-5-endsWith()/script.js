const str = "Merhaba Dünya!";

document.write(str.endsWith("!")); // true
document.write(str.endsWith("Dünya", 12)); // true
document.write(str.endsWith("Merhaba", 5)); // false


const input = prompt("Lütfen e-posta adresinizi giriniz:");

if (input.endsWith(".com")) {
  document.write("Girilen e-posta adresi '.com' ile bitiyor.");
} else {
  document.write("Girilen e-posta adresi '.com' ile bitmiyor.");
}