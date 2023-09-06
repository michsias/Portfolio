//////////////////////////////////////////////////////////////////////////////
//Zmiana zawartosci linku 'a' na ID discorda 

const discord = document.getElementById('discord_ID');
let temp_discord = false;
const original_discord = discord.innerHTML;

discord.addEventListener('click', function(event) {
    event.stopPropagation();
    temp_discord = !temp_discord;
    
    if (temp_discord) {
        discord.innerHTML = 
        '<a class="contact_socials_a"> \
        <i class="bi bi-discord size_icon_contact"></i> \
        #michsias </a>';
    } else {
        discord.innerHTML = original_discord;
    }
});

//////////////////////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        const animatedElements = document.querySelectorAll('.contact_socials');
        animatedElements.forEach(function (element) {
        element.classList.toggle('animation_contact'); // Dodaj klasę animacji
      });
    }, 500); 
});

//////////////////////////////////////////////////////////////////////////////

document.getElementById('forHTML').addEventListener('submit', function(event) {
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('write_message').value;

    if(!fullname || !email || !message) {
        event.preventDefault(); // Zatrzymaj wysłanie formularza
        alert('Wszystkie pola oznaczone gwiazdką są obowiązkowe.');   
    }
    
})
