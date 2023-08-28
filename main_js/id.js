//////////////////////////////////////////////////////////////////////////////
//Zmiana zawartosci linku 'a' na ID discorda 

const discord = document.getElementById('discord_ID');
let temp_discord = false;
const original_discord = discord.innerHTML;

discord.addEventListener('click', function(event) {
    event.stopPropagation();
    temp_discord = !temp_discord;
    
    if (temp_discord) {
        discord.innerHTML = '<i class="bi bi-discord size_icon_contact"></i> #michsias';
    } else {
        discord.innerHTML = original_discord;
    }
});

document.addEventListener('click', function() {
    if (temp_discord) {
        discord.innerHTML = original_discord;
        temp_discord = false;
    }
});
 
//////////////////////////////////////////////////////////////////////////////
