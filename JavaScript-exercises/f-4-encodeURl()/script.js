const param = "Merhaba Dünya!";
const encodedParam = encodeURIComponent(param);

console.log(encodedParam); // "Merhaba%20D%C3%BCnya!"
const url = "https://www.example.com/?q=Merhaba%20D%C3%BCnya";

const encodedUrl = encodeURIComponent(url);

console.log(encodedUrl); // "https%3A%2F%2Fwww.example.com%2F%3Fq%3DMerhaba%2520D%25C3%25BCnya"
