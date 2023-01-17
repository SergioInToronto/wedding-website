const burgerButton = document.querySelector('.header_burger-menu');
const navLinks = document.querySelectorAll('nav a');

if (burgerButton) {
    burgerButton.addEventListener('click', () => {
        if (burgerButton.classList.contains('active')) {
            burgerButton.classList.remove('active');

            return;
        }

        burgerButton.classList.add('active');
    });

    navLinks.forEach(navLink => {
        navLink.addEventListener('click', () => {
            burgerButton.classList.remove('active');
        });
    });
}
