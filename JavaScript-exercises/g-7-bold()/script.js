const title = "JavaScript Öğreniyorum";
const boldTitle = title.bold();

document.getElementsByTagName("h1")[0].innerHTML = boldTitle;

const importantText = "Dikkat: Bu önemli bir bilgidir!";
const boldImportantText = importantText.bold();

document.getElementById("important").innerHTML = boldImportantText;