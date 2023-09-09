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
  const max_message = 250;

  counter.classList.add("words_limit");
  counter.textContent = `0/${max_message}`;

  message_div.parentElement.appendChild(counter);

  message_div.addEventListener("input", function () {
    const counter_value = this.value.length;

    counter.textContent = `${counter_value}/${max_message}`;

    if (counter_value >= 249) {
      this.value = this.value.slice(0, 248);
      counter.textContent = `${250}/${max_message}`;
    } else if (counter_value == 248) {
      counter.textContent = `${counter_value}/${max_message}`;
    }
  });
});

const fullname = document.getElementById('fullname');
const email = document.getElementById('email');
const message = document.getElementById('message');

form.addEventListener('submit', function(event) {

    const fullname_value = fullname.value;
    const email_value = email.value;
    const message_value = message.value;

    const check_name = /^[\p{L}]+\s+[\p{L}]+$/u;
    const check_email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const check_message = /^.{1,250}$/;

    checkForm(event, fullname, fullname_value, check_name);
    checkForm(event, email, email_value, check_email);
    checkForm(event, message, message_value, check_message);

   
    
});

function checkForm(event, user_id, user_value, checkPlace) {

    if (!checkPlace.test(user_value)) {
        event.preventDefault();
        user_id.classList.add("wrong_pin"); 
        
        form.addEventListener('click', function() {
            user_id.classList.remove("wrong_pin");
        });

        console.log('Wprowadź poprawne dane.');
    } else {
        console.log('Dane poprawne');
        user_id.classList.remove("wrong_pin");
    }
}


