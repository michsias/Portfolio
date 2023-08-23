//////////////////////////////////////////////////////////////////////////////

//Liczniki rozpoczęcia nauki HTML + CSS + JavaScript

const start_HTML = new Date('2023-06-18');
const start_JS = new Date('2023-08-20');

const coddingHTML = document.getElementById('HTML-CSS');
const coddingJS = document.getElementById('JS');

function updateTimer(counter, startTime) {
    const today = new Date();
    const timeDifference = today.getTime() - startTime.getTime();
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    counter.innerHTML = days + ` days`;
}

const updateHTMLTimer = () => updateTimer(coddingHTML, start_HTML);
const updateJSTimer = () => updateTimer(coddingJS, start_JS);

updateHTMLTimer();
updateJSTimer();

setInterval(updateHTMLTimer, 500);
setInterval(updateJSTimer, 500);

////////////////////////////////////////////////////////////////////////////// 
//Zmiana zawartosci diva liczników na informacje o ostateniej aktualizacji 

const divFrame = document.getElementById('divFrame');
const original_frame = divFrame.innerHTML;

divFrame.addEventListener('mouseover', () => {
    divFrame.innerHTML = '<div style="display: flex; align-items: center;"> Hi </div>';
});
divFrame.addEventListener('mouseout', () => {
    divFrame.innerHTML = original_frame;
});
console.log('Vale:', original_frame);

    
//////////////////////////////////////////////////////////////////////////////
//Zmiana na ID w 'a' 

const discord = document.getElementById('discord');
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





