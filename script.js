let correctAnswer = "Dualah";

function checkAnswer() {
    const answer = document.getElementById('answer').value;
    const message = document.getElementById('game-message');
    const prize = document.getElementById('prize');

    if (answer.trim().toLowerCase() === correctAnswer.toLowerCase()) {
        message.textContent = "Ciee kok tau si sering ngasih nasbung perkepala ya hehe!!";
        prize.style.display = 'block';
    } else {
        message.textContent = "Wrong bro,chat admin kalo mau tau";
    }
}
