// Функция для инициализации интерактивности карточек
function initCardInteractivity() {
    var cards = document.querySelectorAll('.feature-card');
    function clearActive() {
        cards.forEach(function (card) { return card.classList.remove('active'); });
    }
    cards.forEach(function (card) {
        card.addEventListener('click', function () {
            clearActive();
            card.classList.add('active');
        });
    });
    if (cards.length > 0) {
        cards[0].classList.add('active');
    }
}
// Функция для загрузки резервных карточек
function loadFallbackCards() {
    var cardsContainer = document.querySelector('.features-container');
    if (!cardsContainer)
        return;
    cardsContainer.innerHTML = "\n        <div class=\"feature-card active\" data-id=\"card_1\">\n            <h3>Professional Profile</h3>\n            <p>We know finding the right job is stressful, so we've made it simple.</p>\n        </div>\n        <div class=\"feature-card\" data-id=\"card_2\">\n            <h3>Best Portfolio</h3>\n            <p>Create a free portfolio to show your best self.</p>\n        </div>\n        <div class=\"feature-card\" data-id=\"card_3\">\n            <h3>Powerful Resume</h3>\n            <p>Get discovered by recruiters with a powerful resume.</p>\n        </div>\n    ";
    initCardInteractivity();
}
// Функция для создания карточек из данных комментариев
function createCardsFromComments(comments) {
    var cardsContainer = document.querySelector('.features-container');
    if (!cardsContainer)
        return;
    cardsContainer.innerHTML = '';
    comments.forEach(function (comment, index) {
        var card = document.createElement('div');
        card.className = 'feature-card';
        card.dataset.id = "card_".concat(index + 1);
        card.innerHTML = "\n            <h3>".concat(comment.name, "</h3>\n            <p class=\"email\">").concat(comment.email, "</p>\n            <p>").concat(comment.body, "</p>\n        ");
        cardsContainer.appendChild(card);
    });
    initCardInteractivity();
}
// Основная функция загрузки данных и инициализации
document.addEventListener('DOMContentLoaded', function () {
    // Загрузка комментариев и создание карточек
    fetch('https://jsonplaceholder.typicode.com/comments?_limit=3')
        .then(function (response) {
        if (!response.ok)
            throw new Error('Ошибка сети');
        return response.json();
    })
        .then(function (comments) {
        createCardsFromComments(comments);
    })
        .catch(function (error) {
        console.error('Ошибка:', error);
        loadFallbackCards();
    });
    // Обработчик для модального окна
    var modal = document.getElementById('id01');
    if (modal) {
        window.onclick = function (event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        };
    }
});
