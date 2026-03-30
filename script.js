// 1. Твои переменные-состояния (флаги)
let count = 0;
let isSecretFound = false;
let isEverythingFinished = false; // Наш "одноразовый замок"

// 2. Массив цитат
const quotes = [
    { text: "Life goes on, let's live on.", song: "Life Goes On" },
    { text: "I'm the one I should love in this world.", song: "Epiphany" },
    { text: "The morning will come again. No darkness is eternal.", song: "Spring Day" },
    { text: "Love yourself. Speak yourself.", song: "UN Speech" },
    { text: "Even if you're not perfect, you're a limited edition.", song: "Do You - RM" },
    { text: "Go on your path, even if you live for a day.", song: "No More Dream" }
];

// 3. Ссылки на элементы HTML
const button = document.getElementById('new-quote');
const card = document.getElementById('main-card');
const textArea = document.getElementById('secret-text-area');
const quoteEl = document.getElementById('quote');
const songEl = document.getElementById('song');

// 4. Логика кнопки (обновленная)
button.addEventListener('click', () => {
    // Если "замок" закрыт — просто мешаем цитаты и выходим
    if (isEverythingFinished) {
        showRandomQuote();
        return;
    }

    if (count < 6) {
        count++;
        showRandomQuote();
    } else if (count === 6 && !isSecretFound) {
        isSecretFound = true;
        quoteEl.innerText = "Хён, ты нашёл свой собственный Magic Shop!";
        songEl.innerText = ""; 
        button.innerText = "ОТКРЫТЬ ПОСЛАНИЕ";
        button.style.background = "gold"; 
        button.style.color = "black";
        button.style.boxShadow = "0 0 20px gold";
    } else if (isSecretFound) {
        // Запускаем переход к шарикам
        card.style.opacity = '0';
        setTimeout(() => {
            card.style.display = 'none';
            startButterflyScene();
        }, 1000);
    }
});

// Вспомогательная функция для цитат
function showRandomQuote() {
    const rand = Math.floor(Math.random() * quotes.length);
    quoteEl.innerText = `"${quotes[rand].text}"`;
    songEl.innerText = `— ${quotes[rand].song}`;
}
function startButterflyScene() {
    const scene = document.getElementById('butterfly-scene');
    
    // Сначала делаем сцену видимой для браузера
    scene.style.display = 'flex'; 
    
    // Даем маленькую задержку, чтобы сработал переход opacity
    setTimeout(() => {
        scene.style.opacity = '1';
    }, 50);

    // Дальше идет твой код с шариками...
    const group = document.getElementById('butterfly-group');
    const bf1 = document.getElementById('bf1');
    const bf2 = document.getElementById('bf2');
    const bf3 = document.getElementById('bf3');

    scene.style.display = 'flex';
    scene.style.pointerEvents = 'auto';
    setTimeout(() => scene.style.opacity = '1', 50);

    // Слетание шариков
    bf1.style.transform = "translate(-400px, -400px)";
    bf2.style.transform = "translate(400px, -400px)";
    bf3.style.transform = "translate(0, 500px)";

    setTimeout(() => {
        [bf1, bf2, bf3].forEach(b => { b.style.opacity = "1"; b.style.transform = "translate(0,0)"; });
        bf1.classList.add('pos1'); bf2.classList.add('pos2'); bf3.classList.add('pos3');
        setTimeout(() => group.classList.add('rotating'), 2000);
    }, 100);

    // Твой финальный сценарий в виде списка (Массив)
    const scriptSteps = [
        { t: "Он здесь?", s: "bf1" },
        { t: "Тише, он смотрит...", s: "bf2" },
        { t: "Это тот самый Хён?", s: "bf3" },
        { t: "Да, он открыл дверь!", s: "bf1" },
        { t: "А вы говорили, что он найти нас не сможет... 🤭", s: "bf2" },
        { t: "Ой! Кажется, мы были слишком шумными... Привет, Хён!", s: "bf1" },
        { t: "Мы — мысли нашей хозяйки. Мы родились, пока она создавала этот Magic Shop.", s: "bf2" },
        { t: "Она ещё сама не знает, во что превратится это место... :)", s: "bf2" },
        { t: "И раз уж ты зашел... можно, наверное, поделиться тем, что мы от неё время от времени получали..", s: "bf3" },
        { t: "«В японской философии есть понятие Итиго Итиэ. Оно означает, что наша сегодняшняя встреча — единственная в вечности...»", s: "bf1" },
        { t: "«Даже если мы будем говорить каждый день, этот момент, эти слова — неповторимы. ⟡»", s: "bf1" },
        { t: "«Хён, люди часто проходят сквозь нас, как призраки, но редкие души оставляют след, меняя нашу внутреннюю архитектуру. Согласен?»", s: "bf1" },
        { t: "«Мы все идем своими дорогами, и наши пути пересекаются на мгновение, как тени от облаков...»", s: "bf1" },
        { t: "«Но именно эти тени делают пейзаж живым. Я хочу, чтобы этот пейзаж оставался живым как.....»", s: "bf1" },
        { t: "Так, что там? Что там дальше?!", s: "bf2" },
        { t: "Ну?! Не молчи!", s: "bf3" },
        { t: "Эй... я потеряла нить её мыслей... Простите.", s: "bf1" },
        { t: "Разве мы не такие же? То, что мы с ним сейчас пересекаемся — это ведь тоже в первый и последний раз, как в той японской философии", s: "bf2" },
        { t: "Ну тогда моя очередь говорить!", s: "bf3" },
        { t: "Она часто об этом думает. О том, что люди проходят сквозь нас, как призраки... но ты оставил другой след.", s: "bf1" },
        { t: "Кто-то еще что-нибудь помнит?", s: "bf2" },
        { t: "А, Хён, слушай внимательно! Про необитаемый остров: хозяйка берет на себя смыслы и тени. Это важная работа!", s: "bf3" },
        { t: "А на тебе — всё остальное. И учти: за водой её одну не отправляй. Либо вместе, либо ты сам.", s: "bf1" },
        { t: "Она просто плохо ориентируется в пространстве... 🤭", s: "bf2" },
        { t: "Нам было весело хранить это всё...", s: "bf3" },
        { t: "То, что ты всё это увидел — привилегия человека, который первым сюда зашёл.", s: "bf3" },
        { t: "Поэтому сообщи ей, что ты всё увидел, чтобы она нас отпустила!", s: "bf1" }
    ];

    let currentStep = 0;

    function runScript() {
        if (currentStep < scriptSteps.length) {
            const step = scriptSteps[currentStep];
            typeText(step.t, step.s, () => {
                currentStep++;
                setTimeout(runScript, 1500); // Пауза между фразами
            });
        } else {
            finishSecretScene();
        }
    }

    function typeText(text, speakerId, callback) {
        textArea.innerHTML = "";
        [bf1, bf2, bf3].forEach(b => b.classList.remove('active-fly'));
        document.getElementById(speakerId).classList.add('active-fly');

        let i = 0;
        let timer = setInterval(() => {
            if (i < text.length) {
                textArea.innerHTML += text.charAt(i);
                i++;
            } else {
                clearInterval(timer);
                callback();
            }
        }, 50);
    }

    setTimeout(runScript, 2500); // Запуск после слетания шариков
}

// === ФУНКЦИЯ УВЕДОМЛЕНИЯ В ТЕЛЕГРАМ ===
function sendNotification() {
    const token = "8785484666:AAFVf9N-4QgwXK1eqQyB5iCf0G29caYDhw8";
    const chat_id = "5966967614";
    const message = "✨ Хён только что вышел из Magic Shop! Он всё увидел. ✨";
    
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${encodeURIComponent(message)}`;
    
    // Отправляем запрос в фоновом режиме
    fetch(url).catch(err => console.log("Ошибка уведомления:", err));
}

// === ОБНОВЛЕННАЯ ФИНАЛЬНАЯ СЦЕНА ===
function finishSecretScene() {
    // 1. Убираем свечение с шариков
    const bfs = [document.getElementById('bf1'), document.getElementById('bf2'), document.getElementById('bf3')];
    bfs.forEach(b => {
        if(b) b.classList.remove('active-fly');
    });

    // 2. Очищаем текстовое поле и готовим его для кнопки
    textArea.innerHTML = "<p style='margin-bottom: 25px; color: #f0e6ff;'>Ты всё увидел, Хён?</p>";
    
    // 3. Создаем кнопку заново
    const btn = document.createElement('button');
    btn.innerText = "Я ВСЁ УВИДЕЛ. ОТПУСТИТЬ ВАС.";
    btn.className = "final-magic-button"; // Убедись, что этот класс есть в CSS
    
    // Стилизуем кнопку прямо здесь для надежности
    btn.style.marginTop = "20px";
    btn.style.padding = "12px 25px";
    btn.style.background = "rgba(255, 215, 0, 0.2)";
    btn.style.border = "1px solid gold";
    btn.style.color = "gold";
    btn.style.cursor = "pointer";
    btn.style.borderRadius = "20px";

        btn.onclick = () => { 
            // 1. Уведомление и фраза
            sendNotification(); 
            alert("✨ Они улетели к хозяйке передать весточку... ✨"); 
            
            // 2. ЗАКРЫВАЕМ ЗАМОК
            isEverythingFinished = true; 
            
            // 3. ОЧИЩАЕМ СОДЕРЖИМОЕ СЕКРЕТНОЙ ОБЛАСТИ (Важно!)
            // Это уберет кнопку "Отпустить" физически, чтобы она не мешала первой кнопке
            textArea.innerHTML = ""; 
            
            // 4. ПЛАВНО ПРЯЧЕМ СЦЕНУ
            const scene = document.getElementById('butterfly-scene');
            scene.style.opacity = '0';
            scene.style.pointerEvents = 'none'; // Делаем слой "призраком"
    
            setTimeout(() => {
                scene.style.display = 'none';
                
                // ВОЗВРАЩАЕМ ГЛАВНУЮ КАРТОЧКУ
                const mainCard = document.getElementById('main-card');
                mainCard.style.display = 'block';
                mainCard.style.pointerEvents = 'auto'; // Включаем клики обратно
                
                setTimeout(() => {
                    mainCard.style.opacity = '1';
                    
                    // СБРАСЫВАЕМ ГЛАВНУЮ КНОПКУ К ОРИГИНАЛУ
                    button.innerText = "New Quote";
                    button.style.background = ""; 
                    button.style.color = "";
                    button.style.boxShadow = "none";
                    button.disabled = false; // На всякий случай включаем её
                    
                    showRandomQuote();
                }, 50);
            }, 1000);
        };
    
        textArea.appendChild(btn);
    }