var navMain = document.querySelector('.site-nav');
var navToggle = document.querySelector('.site-nav__toggle');

navMain.classList.remove('site-nav--nojs');

navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('site-nav--closed')) {
        navMain.classList.remove('site-nav--closed');
        navToggle.classList.add('site-nav__toggle--close');
    }
    else {
        navMain.classList.add('site-nav--closed');
        navToggle.classList.remove('site-nav__toggle--close');
        navToggle.classList.add('site-nav__toggle--open');

    }
});
