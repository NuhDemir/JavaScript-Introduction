const stars = "*";

// 10 tane yıldız yazdır
console.log(stars.repeat(10)); // "**********"

const line = "-";

// 50 tane çizgi yazdır
console.log(line.repeat(50)); // "--------------------------------------------------"

const message = "Tekrarlanan metin: ";

// Mesajı 5 kere tekrarla
const repeatedMessage = message.repeat(5);
console.log(repeatedMessage); // "Tekrarlanan metin: Tekrarlanan metin: Tekrarlanan metin: Tekrarlanan metin: Tekrarlanan metin: "

const str = "Merhaba";

// Metni 3 kez tekrarla
const repeatedStr = str.repeat(3);
console.log(repeatedStr); // "MerhabaMerhabaMerhaba"

// Tekrarlama sayısı 0 veya negatif ise boş metin döner
const emptyStr = str.repeat(0);
console.log(emptyStr); // ""