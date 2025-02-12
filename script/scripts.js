var swiper = new Swiper (".swiper", {});

const cards = {
    card_1: {
        name: 'Professional Profile',
        icon: '',
        description: 'We know finding the right job is stressful, so we’ve made it simple. It only takes a few minutes. Create a free portfolio on briefolio to show your best self and get discovered by recruiter',
    },
    card_2: {
        name: 'Best Portfolio',
        icon: '',
        description: 'We know finding the right job is stressful, so we’ve made it simple. It only takes a few minutes. Create a free portfolio on briefolio to show your best self and get discovered by recruiter',
    },
    card_3: {
        name: 'Powerful Resume',
        icon: '',
        description: 'We know finding the right job is stressful, so we’ve made it simple. It only takes a few minutes. Create a free portfolio on briefolio to show your best self and get discovered by recruiter',
    },
    card_4: {
        name: 'Professional Profile',
        icon: '',
        description: 'We know finding the right job is stressful, so we’ve made it simple. It only takes a few minutes. Create a free portfolio on briefolio to show your best self and get discovered by recruiter',
    },
    card_5: {
        name: 'Best Portfolio',
        icon: '',
        description: 'We know finding the right job is stressful, so we’ve made it simple. It only takes a few minutes. Create a free portfolio on briefolio to show your best self and get discovered by recruiter',
    },
    card_6: {
        name: 'Powerful Resume',
        icon: '',
        description: 'We know finding the right job is stressful, so we’ve made it simple. It only takes a few minutes. Create a free portfolio on briefolio to show your best self and get discovered by recruiter',
    },
}


// js модального окна кнопки Авториз
var modal = document.getElementById('id01');

// нажатие в любом месте за пределами модального меню,оно закр
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}