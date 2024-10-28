const word_element = document.getElementById('word');
const popup = document.getElementById('popup-container');
const message_element = document.getElementById('success-message');
const wrongLetters_element = document.getElementById('wrong-letters');
const items = document.querySelectorAll('.item');
const message = document.getElementById('message');
const PlayAgainBtn = document.getElementById('play-again');

const correctLetters = [];
const wrongLetters = [];
let selectedWord = getRandomWord(); // Rastgele bir kelime seçimi
let remainingAttempts = 6; // Kalan deneme hakkı

// Rastgele bir kelime seçen fonksiyon
function getRandomWord() {
    const words = [
        "javascript", "java", "python", "html", "css", "react", "angular",
        // Diğer kelimeler...
    ];
    return words[Math.floor(Math.random() * words.length)];
}

// Kelimeyi ekrana yazdıran fonksiyon
function displayWord() {
    word_element.innerHTML = `
        ${selectedWord.split('').map(letter => `
            <div class="letter">
                ${correctLetters.includes(letter) ? letter : ''}
            </div>
        `).join('')}
    `;

    const displayedWord = word_element.innerText.replace(/\n/g, '');

    // Eğer tüm kelime doğru tahmin edildiyse
    if (displayedWord === selectedWord) {
        endGame(true); // Oyunu kazanma durumuna geçir
    }
}

// Hatalı harfleri güncelleyen fonksiyon
function updateWrongLetters() {
    wrongLetters_element.innerHTML = `
        ${wrongLetters.length > 0 ? '<h3>Hatalı Harfler</h3>' : ''}
        ${wrongLetters.map(letter => `<span>${letter}</span>`).join('')}
    `;

    items.forEach((item, index) => {
        const errorCount = wrongLetters.length;
        item.style.display = index < errorCount ? 'block' : 'none';
    });

    // Eğer yanlış harf sayısı maksimuma ulaştıysa
    if (wrongLetters.length === items.length) {
        endGame(false); // Oyunu kaybetme durumuna geçir
    }
}

// Oyun sonuçlarını yöneten fonksiyon
function endGame(win) {
    popup.style.display = 'flex';
    message_element.innerText = win ? 'Kazandınız! 🎉' : 'Kaybettiniz! 😢';
}

// Kullanıcı mesajlarını görüntüleyen fonksiyon
function displayMessage() {
    message.classList.add('show');
    setTimeout(() => {
        message.classList.remove('show');
    }, 2000);
}

// Tekrar oynamak için butona tıklama olayını dinleyen fonksiyon
PlayAgainBtn.addEventListener('click', function() {
    // Gerekli değişkenleri sıfırlama
    correctLetters.length = 0;
    wrongLetters.length = 0;
    selectedWord = getRandomWord(); // Yeni kelime al
    remainingAttempts = 6; // Deneme sayısını sıfırla
    displayWord(); // Yeni kelimeyi göster
    updateWrongLetters(); // Hatalı harfleri güncelle
    popup.style.display = 'none'; // Popup'ı gizle
});

// Klavye olaylarını dinleyen fonksiyon
window.addEventListener('keydown', function(e) {
    if (e.key >= 'a' && e.key <= 'z') {
        const letter = e.key;

        // Harf doğru harfler arasında mı?
        if (selectedWord.includes(letter)) {
            // Eğer harf daha önce kullanılmadıysa
            if (!correctLetters.includes(letter)) {
                correctLetters.push(letter);
                displayWord(); // Kelimeyi güncelle
            } else {
                // Harf daha önce kullanıldıysa
                displayMessage();
            }
        } else {
            // Eğer harf yanlış harfler arasında değilse
            if (!wrongLetters.includes(letter)) {
                wrongLetters.push(letter);
                remainingAttempts--; // Kalan deneme sayısını azalt
                updateWrongLetters(); // Hatalı harfleri güncelle
            }
        }
    }
});

// Oyunu başlatan ilk fonksiyon
displayWord();