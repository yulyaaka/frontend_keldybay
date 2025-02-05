var swiper = new Swiper (".swiper", {});

const facilities = {
    facilities_1: {
        name: 'Professional Profile',
        icon: '',
        description: 'We know finding the right job is stressful, so we’ve made it simple. It only takes a few minutes. Create a free portfolio on briefolio to show your best self and get discovered by recruiter',
    },
    facilities_2: {
        name: 'Best Portfolio',
        icon: '',
        description: 'We know finding the right job is stressful, so we’ve made it simple. It only takes a few minutes. Create a free portfolio on briefolio to show your best self and get discovered by recruiter',
    },
    facilities_3: {
        name: 'Powerful Resume',
        icon: '',
        description: 'We know finding the right job is stressful, so we’ve made it simple. It only takes a few minutes. Create a free portfolio on briefolio to show your best self and get discovered by recruiter',
    },
    facilities_4: {
        name: 'Powerful Resume',
        icon: 'We know finding the right job is stressful, so we’ve made it simple. It only takes a few minutes. Create a free portfolio on briefolio to show your best self and get discovered by recruiter',
    },
    facilities_5: {
        name: 'Powerful Resume',
        icon: 'We know finding the right job is stressful, so we’ve made it simple. It only takes a few minutes. Create a free portfolio on briefolio to show your best self and get discovered by recruiter',
    },
}


// js модального окна кнопки Авториз
var modal = document.getElementById('id01');

// нажиматие в любом месте за пределами модального меню,оно закр
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}