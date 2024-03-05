const str = "Merhaba <Dünya>";
const encodedStr = encodeURIComponent(str);

document.write(encodedStr); // "Merhaba%20%3CD%C3%BCnya%3E"

const str1 = "Merhaba <Dünya>";
const escapedStr = escape(str1);

document.write(escapedStr); // "Merhaba%20%3CD%C3%BCnya%3E"