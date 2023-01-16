const burgerButton = document.querySelector('.header_burger-menu');

if (burgerButton) {
    burgerButton.addEventListener('click', () => {
        if (burgerButton.classList.contains('active')) {
            burgerButton.classList.remove('active');

            return;
        }

        burgerButton.classList.add('active');
    });
}
