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
        name: '',
        icon: '',
    },
    facilities_5: {
        name: '',
        icon: '',
    },
}


// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}