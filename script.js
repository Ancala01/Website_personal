// script.js
let correctAnswer = "Bolu";

function checkAnswer() {
    const answer = document.getElementById('answer').value;
    const message = document.getElementById('game-message');
    const prize = document.getElementById('prize');

    if (answer.trim().toLowerCase() === correctAnswer.toLowerCase()) {
        message.textContent = "Ciee kok tau si!!";
        prize.style.display = 'block';
    } else {
        message.textContent = "Salah kawan makanya kenalan";
    }
}
