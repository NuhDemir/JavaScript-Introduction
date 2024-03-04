const str = "https://www.example.com/index.html";

const parts = str.split("/");

document.write(parts); // ["https:", "", "www.example.com", "index.html"]

const str2 = "Merhaba Dünya!";

const chars = str2.split("");

document.write(chars); // ["M", "e", "r", "h", "a", "b", "a", " ", "D", "ü", "n", "y", "a", "!"]

const str3 = "elma,armut,muz,portakal";

const fruits = str3.split(",", 2);

document.write(fruits); // ["elma", "armut"]