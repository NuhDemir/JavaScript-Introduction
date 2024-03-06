const bookTitle = "Savaş ve Barış";
const italicBookTitle = bookTitle.italic();

document.getElementsByTagName("h2")[0].innerHTML = italicBookTitle;

const quote = "Hayat kısa, sanat uzun.";
const italicQuote = quote.italic();

document.getElementById("quote").innerHTML = italicQuote;

const text = "Merhaba Dünya!";
const italicText = text.italic();

document.write(italicText); // Yazdırır: "<i>Merhaba Dünya!</i>"