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

let count = 0;
let isSecretFound = false;
let wasSecretShown = false; // ЗАМОК: был ли уже показан секрет?

function updateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteText.innerText = `"${randomQuote.text}"`;
    songText.innerText = `— ${randomQuote.song}`;
}

button.addEventListener('click', () => {
    // Если секрет еще НЕ был показан вообще
    if (!wasSecretShown) {
        if (!isSecretFound) {
            count++;
            if (count === 7) {
                quoteText.innerText = "Хён, ты нашёл свой собственный Magic Shop!";
                songText.innerText = "— Special Mystery";
                button.innerText = "ОТКРЫТЬ ПОСЛАНИЕ";
                button.style.background = "gold";
                button.style.color = "black";
                isSecretFound = true; 
            } else {
                updateQuote();
            }
        } else {
            // Когда нажал на "Открыть послание"
            alert("forever and ever 💜");
            
            // Сбрасываем вид кнопки
            button.innerText = "Magic Shop";
            button.style.background = "";
            button.style.color = "";
            
            // ЗАКРЫВАЕМ ЗАМОК НАВСЕГДА
            wasSecretShown = true; 
            isSecretFound = false;
            updateQuote();
        }
    } else {
        // Если секрет уже был показан один раз, просто крутим цитаты
        updateQuote();
    }
});

