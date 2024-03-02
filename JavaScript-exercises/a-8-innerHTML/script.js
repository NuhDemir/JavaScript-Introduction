// "myElement" ID'sine sahip HTML elementini seçer
var element = document.getElementById("myElement");

// Elementin içeriğini "Merhaba Dünya!" mesajıyla değiştirir
element.innerHTML = "Merhaba Dünya!";

// Elementin içeriğini bir resim ile değiştirir (resminizin yolunu "resim.jpg" ile değiştirin)
element.innerHTML = "<img src='resim.jpg' alt='Resim'>";

// Elementin içeriğini bir video ile değiştirir (videonuzun yolunu "video.mp4" ile değiştirin)
element.innerHTML = "<video src='video.mp4' controls></video>";

// Elementin içeriğini bir form ile değiştirir
element.innerHTML = "<form action='#'><input type='text' name='isim'><input type='submit' value='Gönder'></form>";

// Elementin içeriğini bir bağlantı ile değiştirir
element.innerHTML = "<a href='https://www.google.com'>Google'a Git</a>";


document.getElementById("myElement").innerHTML = "What is this JavaScript.";