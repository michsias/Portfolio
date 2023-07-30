
const burger = document.querySelector('#switch');
const nav = document.querySelector('#navBox')

burger.addEventListener('click', function() 
{
  burger.classList.toggle('activeBurger');
  nav.classList.toggle('navBox-bg');
});
