document.addEventListener('DOMContentLoaded', () => {
    // Функция для плавного удаления прелоадера
    function removePreloader() {
        const preloader = document.querySelector('.preloader');
        preloader.classList.add('hide-preloader');
        
        // Полностью удаляем прелоадер через 500мс после начала анимации
        setTimeout(() => {
            preloader.remove();
        }, 500);
    }

    // Вызываем функцию с небольшой задержкой
    setTimeout(removePreloader, 500);
});