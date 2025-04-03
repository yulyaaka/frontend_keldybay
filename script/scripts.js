var swiper = new Swiper (".swiper", {});

const cards = {
    card_1: {
        name: 'Professional Profile',
        description: 'We know finding the right job is stressful, so we’ve made it simple. It only takes a few minutes. Create a free portfolio on briefolio to show your best self and get discovered by recruiter',
    },
    card_2: {
        name: 'Best Portfolio',
        description: 'We know finding the right job is stressful, so we’ve made it simple. It only takes a few minutes. Create a free portfolio on briefolio to show your best self and get discovered by recruiter',
    },
    card_3: {
        name: 'Powerful Resume',
        description: 'We know finding the right job is stressful, so we’ve made it simple. It only takes a few minutes. Create a free portfolio on briefolio to show your best self and get discovered by recruiter',
    },
};

function renderCards(cards) {
    const featuresContainer = document.querySelector('.features');
    Object.values(cards).forEach((cardData) => {
        const card = document.createElement('div');
        card.className = 'feature-card';
        card.innerHTML = `
            <h3>${cardData.name}</h3>
            <p>${cardData.description}</p>
        `;
        featuresContainer.appendChild(card);
    });
};

/*
function renderCards(cards) {
    const featuresContainer = document.querySelector('.features');
    Object.values(cards).forEach((cardData, index) => {
    const card = document.createElement('div');
    card.className = 'feature-card';
    card.innerHTML = `
    <h3>${cardData.name}</h3>
    <p>${cardData.description}</p>
    `;
    // обработчик клика
    card.addEventListener('click', () => {
    // убрать класс active у всех карточек
    document.querySelectorAll('.feature-card').forEach(c => c.classList.remove('active-card'));
    // класс active к текущей карточке
    card.classList.add('active-card');
    });
    featuresContainer.appendChild(card);
    });
    }
*/

function initializeScrollTracking() {
    const features = document.querySelector('.features');
    const progressIndicator = document.querySelector('.progress-indicator');

    features.addEventListener('scroll', () => {
        const scrollPosition = features.scrollLeft;
        const maxScroll = features.scrollWidth - features.clientWidth;
        const progressPercentage = (scrollPosition / maxScroll) * 100;
        progressIndicator.style.width = `${Math.min(progressPercentage, 100)}%`;
    });
};

document.addEventListener('DOMContentLoaded', () => {
    renderCards();
    initializeScrollTracking();
});

/*
document.addEventListener('DOMContentLoaded', () => {
    renderCards(cards); // Здесь передаем карты
    initializeScrollTracking();
});
*/
// js модального окна кнопки Авториз
var modal = document.getElementById('id01');

// нажатие в любом месте за пределами модального меню,оно закр
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}






