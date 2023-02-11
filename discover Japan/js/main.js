(function() {
    const header = document.querySelector('.header');
    window.onscroll =() => {
        if (window.pageYOffset > 50) {
            header.classList.add('header_active')
        } else {
            header.classList.remove('header_active')
        }
    };
}());

//burger handler

(function() {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header__nav')
    burgerItem.addEventListener('сlick', () => {
        menu.classList.add('header__nav-active')
        console.log(1)
    });
}());