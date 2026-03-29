// === ЧАСТЬ 1: ЗВЕЗДНОЕ НЕБО ===
const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');

let width, height, stars = [];

// Функция для подстройки размера неба под экран
function setCanvasSize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
}

// Создаем 200 случайных звезд
function createStars() {
    stars = [];
    for (let i = 0; i < 200; i++) {
        stars.push({
            x: Math.random() * width,
            y: Math.random() * height,
            size: Math.random() * 2,
            speed: Math.random() * 0.5 + 0.1 // Скорость полета
        });
    }
}

// Рисуем и двигаем звезды (эта функция работает бесконечно)
function animate() {
    ctx.clearRect(0, 0, width, height); // Очищаем экран
    ctx.fillStyle = "white"; // Цвет звезд
    
    stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
        
        star.y -= star.speed; // Двигаем звезду вверх
        if (star.y < 0) star.y = height; // Если улетела, возвращаем вниз
    });
    
    requestAnimationFrame(animate); // Просим браузер отрисовать следующий кадр
}

// Запускаем космос
window.addEventListener('resize', setCanvasSize);
setCanvasSize();
createStars();
animate();


// === ЧАСТЬ 2: ГЕНЕРАТОР ЦИТАТ ===
const quotes = [
    { text: "Life goes on, let's live on.", song: "Life Goes On" },
    { text: "I'm the one I should love in this world.", song: "Epiphany" },
    { text: "The morning will come again. No darkness is eternal.", song: "Spring Day" },
    { text: "Love yourself. Speak yourself.", song: "UN Speech" },
    { text: "Even if you're not perfect, you're a limited edition.", song: "Do You - RM" },
    { text: "Go on your path, even if you live for a day.", song: "No More Dream" }
];

const quoteText = document.getElementById('quote');
const songText = document.getElementById('song');
const button = document.getElementById('new-quote');

// Магия при нажатии на кнопку
button.addEventListener('click', () => {
    // Выбираем случайную цитату из списка
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    // Красиво меняем текст
    quoteText.innerText = `"${randomQuote.text}"`;
    songText.innerText = `— ${randomQuote.song}`;
});