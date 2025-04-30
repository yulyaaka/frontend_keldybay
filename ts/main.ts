// Определяем интерфейс для данных комментария
interface Comment {
    id: number;
    name: string;
    email: string;
    body: string;
}

// Функция для инициализации интерактивности карточек
function initCardInteractivity(): void {
    const cards: NodeListOf<HTMLDivElement> = document.querySelectorAll('.feature-card');
    
    function clearActive(): void {
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

// Функция для загрузки резервных карточек
function loadFallbackCards(): void {
    const cardsContainer: HTMLElement | null = document.querySelector('.features-container');
    if (!cardsContainer) return;
    
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

// Функция для создания карточек из данных комментариев
function createCardsFromComments(comments: Comment[]): void {
    const cardsContainer: HTMLElement | null = document.querySelector('.features-container');
    if (!cardsContainer) return;
    
    cardsContainer.innerHTML = '';
    comments.forEach((comment: Comment, index: number) => {
        const card: HTMLDivElement = document.createElement('div');
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
}

// Основная функция загрузки данных и инициализации
document.addEventListener('DOMContentLoaded', () => {
    // Загрузка комментариев и создание карточек
    fetch('https://jsonplaceholder.typicode.com/comments?_limit=3')
        .then(response => {
            if (!response.ok) throw new Error('Ошибка сети');
            return response.json() as Promise<Comment[]>;
        })
        .then(comments => {
            createCardsFromComments(comments);
        })
        .catch(error => {
            console.error('Ошибка:', error);
            loadFallbackCards();
        });

    // Обработчик для модального окна
    const modal: HTMLElement | null = document.getElementById('id01');
    if (modal) {
        window.onclick = function(event: MouseEvent) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        }
    }
});