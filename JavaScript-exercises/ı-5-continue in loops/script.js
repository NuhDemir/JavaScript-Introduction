let choice;

while (true) {
  choice = prompt("1. Seçenek\n2. Seçenek\n3. Çıkış\nSeçiminiz: ");

  if (choice === "1" || choice === "2" || choice === "3") {
    break;
  } else {
    document.write("Geçersiz seçim!");
    continue;
  }
}

var deger = 1 ;
while (deger <= 12) {
  if(deger == 5){
    deger++;
    continue;
  }
  document.write(deger + "<br/>");
  deger++;
}