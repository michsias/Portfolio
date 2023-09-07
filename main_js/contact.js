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

const form = document.getElementById("formHTML");

document.addEventListener("DOMContentLoaded", function () {
  const message_div = document.getElementById("message");
  const counter = document.createElement("div");
  const max_message = 500;

  counter.classList.add("char-count");
  counter.textContent = `0/${max_message}`;

  message_div.parentElement.appendChild(counter);

  message_div.addEventListener("input", function () {
    const counter_value = this.value.length;

    counter.textContent = `${counter_value}/${max_message}`;

    if (counter_value >= 499) {
      this.value = this.value.slice(0, 492);
      counter.textContent = `${492}/${max_message}`;
    } else if (counter_value == 498) {
      counter.textContent = `${max_message}/${max_message}`;
    }
  });
});

form.addEventListener('submit', function(event) {

    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const check_name = /^[\p{L}\s]+$/u;
    const check_email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const check_message = /^.{1,250}$/;

    checkForm(event, fullname, check_name);
    checkForm(event, email, check_email);
    checkForm(event, message, check_message);
    
});

function checkForm(event, user, checkPlace) {
    if (!checkPlace.test(user)) {
        event.preventDefault(); // Zapobiega domyślnej akcji, czyli wysłaniu formularza
        console.log('Niepoprawne');
    } else {
        console.log('poprawne');
    }
}

