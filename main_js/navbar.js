const nav_switch = document.getElementById('nav_button');
const nav = document.getElementById('navMenu');

nav_switch.addEventListener('click', () => {
    nav_switch.classList.toggle('switch_on');
});

document.body.addEventListener('click', function(event) {
    event.stopPropagation(); 
    if (!event.target.closest('.nav_button')) {
        nav_switch.classList.remove('switch_on');   
    }
});

/////////////////////////////////////////////////////////////////////////////////////////////
//Add buttons change color 

const title_nav = document.getElementById('title_nav');
const box_button = document.createElement('div');

box_button.id = 'button_color';
box_button.innerHTML = `
    <button class="color_switch"></button>
    <button class="color_switch"></button>
    <button class="color_switch"></button>
`;

const first_posistion = title_nav.firstChild;
title_nav.insertBefore(box_button, first_posistion);

const buttons = document.getElementsByClassName('color_switch');
const colors = ['#004Aff', '#8000ff', '#ffea00'];

function addColors() {
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = colors[i];
        buttons[i].addEventListener('click', function() {
            document.documentElement.style.setProperty('--main-light-blue', colors[i]);
        });
    }
}

addColors();