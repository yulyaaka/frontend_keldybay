document.addEventListener('DOMContentLoaded', () => {
    // функция для плавного удаления прелоадера
    function removePreloader() {
        const preloader = document.querySelector('.preloader');
        preloader.classList.add('hide-preloader');
        
        // прелоадер исчезает через 500мс после начала анимации
        setTimeout(() => {
            preloader.remove();
        }, 500);
    }

    // вызов функции с небольшой задержкой
    setTimeout(removePreloader, 500);
});