const person = {
  name: "John Doe",
  age: 30,
  city: "New York"
};

for (const property in person) {
  console.log(`${property}: ${person[property]}`);
}

var names = ["Arthur", "Klaus", "Matheus", "Dolor", "Gem"];
console.log(names + "<br/>"); // Display the original array

for (var i = 0; i < names.length; i++) {
  if (names[i] === "Matheus") {
    console.log("Matheus works in the printing house<br/>");
  } else if (names[i] === "Klaus") {
    console.log("Klaus works in the printing house<br/>");
  }
}
