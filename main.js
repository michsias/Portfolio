const nav = document.querySelector('#navMenu');
const burger = document.querySelector('#switch');

burger.addEventListener('click', (e) => 
{
  nav.classList.toggle('activeMenu');
  burger.classList.toggle('activeBurger');
});
