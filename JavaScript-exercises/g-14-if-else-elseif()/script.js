var clock = 1; // Saat değişkeni

// Saatin türünü kontrol et
var data1 = typeof clock;

if (clock >= 0 && data1 === "number") {
  // Saat 0 ise "Günaydın" mesajı yazdır
  if (clock === 0) {
    document.write("Günaydın, Saat şuanda 00:00");
  } 
  // Saat 1 ise "Saat 01:00" yazdır
  else if (clock === 1) {
    document.write("Saat şuanda 01:00");
  } 
  // Saat 2 ile 23 arasında ise saati yazdır
  else if (clock >= 2 && clock <= 23) {
    var saatString = clock.toString().padStart(2, "0"); // Saati iki basamaklı hale getir
    document.write("Saat şuanda " + saatString + ":00");
  } 
  // Geçersiz saat değeri için uyarı yazdır
  else {
    document.write("Geçersiz saat değeri: " + clock);
  }
} 
// Saatin türü "number" değilse uyarı yazdır
else {
  document.write("Saat değeri sayısal olmalı: " + data1);
}
