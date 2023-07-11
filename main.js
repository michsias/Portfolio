const nav = document.querySelector('#navMenu');
const burger = document.querySelector('#switch');

burger.addEventListener('click', function() 
{
  nav.classList.toggle('activeMenu');
  burger.classList.toggle('activeBurger');
});
