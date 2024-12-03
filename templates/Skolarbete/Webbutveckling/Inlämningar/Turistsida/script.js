function scrollToTop(){
    window.scrollTo({top: 0, behavior: "smooth"})
}

const scrollGallery = document.querySelector('.scroll-images');

function scrollside(move_position) {
    let distance = Math.abs(move_position); 
    let direction = move_position < 0 ? -1 : 1; 
    let step = 10; 
    let totalSteps = Math.ceil(distance / step); 
    let currentStep = 0;

    
    const interval = setInterval(() => {
        if (currentStep >= totalSteps) {
            clearInterval(interval);
            return;
        }
        scrollGallery.scrollBy({ left: direction * step, behavior: 'auto' });
        currentStep++;
    }, 10); 
}

// ladda in footer partialen till divs med id "footer"
document.addEventListener("DOMContentLoaded", () => {
    const footerContainer = document.getElementById('footer');
    
    fetch('/Partials/footer.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            footerContainer.innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading the footer:', error);
        });
});

// ladda in footer partialen till divs med id "footer"
document.addEventListener("DOMContentLoaded", () => {
    const footerContainer = document.getElementById('navigation-bar');
    
    fetch('/Partials/navigation-bar.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            footerContainer.innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading the navigation bar:', error);
        });
});