let choice;

while (true) {
  choice = prompt("1. Seçenek\n2. Seçenek\n3. Çıkış\nSeçiminiz: ");

  switch (choice) {
    case "1":
      console.log("1. Seçenek seçildi!");
      break;
    case "2":
      console.log("2. Seçenek seçildi!");
      break;
    case "3":
      console.log("Çıkış yapılıyor!");
      break;
    default:
      console.log("Geçersiz seçim!");
  }

  if (choice === "3") {
    break;
  }
}

while (true) {
    console.log("Sonsuz döngüdeyim!");
    if (Math.random() > 0.5) {
      break;
    }
  }

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 5) {
    console.log("5 bulundu!");
    break;
  }
}