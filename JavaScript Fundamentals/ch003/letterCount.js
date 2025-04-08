function findLetterCount(text, letter) {
  if (!text || !letter) {
    return "Invalid input";
  }

  let sumLetterResult = 0;
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i).toLowerCase() === letter.toLowerCase()) {
      sumLetterResult += 1;
    }
  }
  return sumLetterResult;
}

let text = prompt("Enter the text:");
let letter = prompt("Enter the letter:");

if (letter.length !== 1) {
  alert("Please enter only one letter.");
} else {
  let resultLetter = findLetterCount(text, letter);
  alert("Letter Count: " + resultLetter);
}
