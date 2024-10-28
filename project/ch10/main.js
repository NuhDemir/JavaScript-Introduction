// Soru oluşturucu fonksiyonu
function Question(questionText, answerChoices, correctAnswer) {
    this.questionText = questionText; // Soru metni
    this.answerChoices = answerChoices; // Cevap seçenekleri
    this.correctAnswer = correctAnswer; // Doğru cevap

    console.log(this); // Oluşturulan soruyu konsola yazdır
}

// Cevabı kontrol etmek için prototip metodu
Question.prototype.answerCheck = function(answer) {
    return answer === this.correctAnswer; // Cevap doğruysa true, yanlışsa false döner
}

// Sorular dizisi
let questions = [
    new Question("Hangisi JavaScript paket yönetim uygulamasıdır?", { a: "Node.js", b: "TypeScript", c: "Npm" }, "c"),
    new Question("Hangisi .NET paket yönetim uygulamasıdır?", { a: "Node.js", b: "Nuget", c: "Npm" }, "b")
];

// Quiz yapısı
function Quiz(questions) {
    this.questions = questions; // Soruları al
    this.questionIndex = 0; // Başlangıç sorusu indeksi
}

// Quiz örneği oluştur
const quiz = new Quiz(questions);

// Soru görüntüleme metodu
Quiz.prototype.displayQuestion = function() {
    const currentQuestion = this.questions[this.questionIndex];
    console.log(currentQuestion.questionText); // Soru metnini yazdır
    console.log(currentQuestion.answerChoices); // Cevap seçeneklerini yazdır
};

// Cevabı kontrol etme metodu
Quiz.prototype.checkAnswer = function(answer) {
    const currentQuestion = this.questions[this.questionIndex];
    if (currentQuestion.answerCheck(answer)) {
        console.log("Doğru cevap!");
    } else {
        console.log("Yanlış cevap! Doğru cevap: " + currentQuestion.correctAnswer);
    }
    this.questionIndex++; // Sonraki soruya geç
};

// Örnek kullanım
quiz.displayQuestion(); // İlk soruyu görüntüle
quiz.checkAnswer("c"); // Cevabı kontrol et (doğru cevap "c")
quiz.displayQuestion(); // İkinci soruyu görüntüle
quiz.checkAnswer("a"); // Cevabı kontrol et (doğru cevap "b")