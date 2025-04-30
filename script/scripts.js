/*var swiper = new Swiper (".swiper", {});*/
/*
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
*/

/*
//создание карточек и списка комментариев
document.addEventListener('DOMContentLoaded', () => {
    fetch('https://jsonplaceholder.typicode.com/comments?_limit=3')
        .then(response => {
            if (!response.ok) throw new Error('Ошибка сети');
            return response.json();
        })
        .then(comments => {
            const cardsContainer = document.querySelector('.features-container');
            cardsContainer.innerHTML = ''; 
            comments.forEach((comment, index) => {
                const card = document.createElement('div');
                card.className = 'feature-card';
                card.dataset.id = `card_${index + 1}`;
                
                card.innerHTML = `
                    <h3>${comment.name}</h3>
                    <p class="email">${comment.email}</p>
                    <p>${comment.body}</p>
                `;
                
                cardsContainer.appendChild(card);
            });

            initCardInteractivity(); 
        })
        .catch(error => {
            console.error('Ошибка:', error);
            loadFallbackCards(); 
        });

    function initCardInteractivity() {
        const cards = document.querySelectorAll('.feature-card');
        
        function clearActive() {
            cards.forEach(card => card.classList.remove('active'));
        }
        
        cards.forEach(card => {
            card.addEventListener('click', () => {
                clearActive();
                card.classList.add('active');
            });
        });
        
        if (cards.length > 0) {
            cards[0].classList.add('active');
        }
    }
    function loadFallbackCards() {
        const cardsContainer = document.querySelector('.features-container');
        cardsContainer.innerHTML = `
            <div class="feature-card active" data-id="card_1">
                <h3>Professional Profile</h3>
                <p>We know finding the right job is stressful, so we've made it simple.</p>
            </div>
            <div class="feature-card" data-id="card_2">
                <h3>Best Portfolio</h3>
                <p>Create a free portfolio to show your best self.</p>
            </div>
            <div class="feature-card" data-id="card_3">
                <h3>Powerful Resume</h3>
                <p>Get discovered by recruiters with a powerful resume.</p>
            </div>
        `;
        initCardInteractivity();
    }
});



document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.feature-card');
  
    // Функция для удаления активного класса у всех карточек
    function clearActive() {
      cards.forEach(card => card.classList.remove('active'));
    }
  
    // Назначаем обработчик клика на каждую карточку
    cards.forEach(card => {
      card.addEventListener('click', () => {
        clearActive();
        card.classList.add('active');
      });
    });
  
    // Можно по умолчанию сделать активной первую карточку
    if (cards.length > 0) {
      cards[0].classList.add('active');
    }
  });


// js модального окна кнопки Авториз
var modal = document.getElementById('id01');

// нажатие в любом месте за пределами модального меню,оно закр
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


/*
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
    card.addEventListener('click', () => {
    document.querySelectorAll('.feature-card').forEach(c => c.classList.remove('active-card'));
    card.classList.add('active-card');
    });
    featuresContainer.appendChild(card);
    });
    }
*/
/*
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
    renderCards(cards); 
    initializeScrollTracking();
});
*/






