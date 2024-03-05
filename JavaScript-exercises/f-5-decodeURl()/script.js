const encodedParam = "Merhaba%20Dünya!";
const param = decodeURIComponent(encodedParam);

document.write(param); // "Merhaba Dünya!

const url = "https://www.example.com/?q=Merhaba%2520D%25C3%25BCnya";

const decodedUrl = decodeURIComponent(url);

document.write(decodedUrl); // "https://www.example.com/?q=Merhaba Dünya"