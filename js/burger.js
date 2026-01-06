const burgerBtn = document.querySelector('.burger-button');
const burger = document.querySelector('.burger');
const closeBtn = document.querySelector('.burger__cross');
const body = document.body;
const menuLinks = document.querySelectorAll('.burger__navigation a');

burgerBtn.addEventListener('click', () => {
  burger.classList.add('active');
  body.classList.add('body--lock');
});

closeBtn.addEventListener('click', () => {
  burger.classList.remove('active');
  body.classList.remove('body--lock');
});

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
    body.classList.remove('body--lock');
  });
});
