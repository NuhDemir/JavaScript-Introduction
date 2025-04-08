function convertToBinary() {
  let decimalInput = document.getElementById("decimalInput").value;
  let outputSpan = document.getElementById("binaryOutput");
  let historyList = document.getElementById("historyList");

  if (decimalInput === "" || isNaN(decimalInput)) {
    alert("Please enter a valid decimal number.");
    return;
  }

  let binaryResult = Number(decimalInput).toString(2);
  outputSpan.textContent = binaryResult;

  // Geçmişi güncelle
  let newItem = document.createElement("li");
  newItem.className = "list-group-item";
  newItem.textContent = `${decimalInput} → ${binaryResult}`;

  // İlk öğevarsa kaldır
  if (historyList.children[0].classList.contains("text-muted")) {
    historyList.innerHTML = "";
  }

  historyList.appendChild(newItem);
}
