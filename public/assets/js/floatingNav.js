import '../styles/floating-nav.css'

let lastScrollY = window.scrollY;
const navbar = document.getElementById('navbar');

function showFloatingNavHandler() {
    navbar.classList.remove('hidden');
}

function hideFloatingNavHandler() {
    navbar.classList.add('hidden');
}

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    if (Math.abs(currentScrollY - lastScrollY) > 20) {
        if (currentScrollY > lastScrollY) {
            hideFloatingNavHandler();
        } else {
            showFloatingNavHandler();
        }

        lastScrollY = currentScrollY;
        console.log(lastScrollY);
    }
});

