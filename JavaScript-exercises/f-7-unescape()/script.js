const escapedText = "Merhaba%20D%C3%BCnya!";
const text = unescape(escapedText);

console.log(text); // "Merhaba Dünya!"

const escapedUrl = "https%3A%2F%2Fwww.example.com%2F%3Fq%3DMerhaba%20D%C3%BCnya";
const url = unescape(escapedUrl);

console.log(url); // "https://www.example.com/?q=Merhaba Dünya"