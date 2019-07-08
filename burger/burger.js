let burger = document.querySelector('.burger'),
    nav = document.querySelector('.main-nav');
burger.addEventListener('click', function () {
  burger.classList.toggle('burger--close');
  nav.classList.toggle('main-nav--open');
})