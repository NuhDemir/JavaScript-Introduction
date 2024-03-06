const username1 = "johndoe";
const username2 = "JohnDoe";

if (username1.toLocaleUpperCase() === username2.toLocaleUpperCase()) {
  // Kullanıcı adları eşleşir. (Türkçe locale için)
}

// Farklı bir locale için:
const locale = "en-US";

if (username1.toLocaleUpperCase(locale) === username2.toLocaleUpperCase(locale)) {
  // Kullanıcı adları eşleşir. (İngilizce locale için)
}