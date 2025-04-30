//интерфейс
interface Comment {
    id: number;
    name: string;
    email: string;
    body: string;
}

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

document.addEventListener('DOMContentLoaded', () => {
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