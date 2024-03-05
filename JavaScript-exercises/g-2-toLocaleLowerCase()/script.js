const username1 = "johndoe";
const username2 = "JohnDoe";

if (username1.toLocaleLowerCase() === username2.toLocaleLowerCase()) {
  // Kullanıcı adları eşleşir. (Türkçe locale için)
}

// Farklı bir locale için:
const locale = "en-US";

if (username1.toLocaleLowerCase(locale) === username2.toLocaleLowerCase(locale)) {
  // Kullanıcı adları eşleşir. (İngilizce locale için)
}