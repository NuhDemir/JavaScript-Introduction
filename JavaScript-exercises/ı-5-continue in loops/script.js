let choice;

while (true) {
  choice = prompt("1. Seçenek\n2. Seçenek\n3. Çıkış\nSeçiminiz: ");

  if (choice === "1" || choice === "2" || choice === "3") {
    break;
  } else {
    console.log("Geçersiz seçim!");
    continue;
  }
}