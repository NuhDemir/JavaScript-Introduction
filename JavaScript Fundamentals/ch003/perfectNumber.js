function isPerfectNumber(number) {
  if (number < 1) return false;

  let sum = 0;
  for (let index = 1; index <= number / 2; index++) {
    if (number % index === 0) {
      sum += 1;
    }
  }
  return sum === number;
}

let num = parseInt(prompt("Enter a number:"));

if (isNaN(num) || num < 1) {
  alert("Please enter a valid positive number");
} else {
  if (isPerfectNumber(num)) {
    alert(num + " is a perfect number!");
  } else {
    alert(num + " is not a perfect number.");
  }
}
