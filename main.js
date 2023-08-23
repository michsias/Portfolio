//////////////////////////////////////////////////////////////////////////////

//Liczniki rozpoczęcia nauki HTML + CSS + JavaScript
const start_HTML = new Date('2023-06-18');
const start_JS = new Date('2023-08-20');

const coddingHTML = document.getElementById('HTML-CSS');
const coddingJS = document.getElementById('JS');

function updateTimer(counter, startTime)  {

    
    const today = new Date();
    const timeDifference = today.getTime() - startTime.getTime();
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    return counter.innerHTML = days + ` days`;
}

setInterval(() => updateTimer(coddingHTML, start_HTML), 1000*60*60*24);
setInterval(() => updateTimer(coddingJS, start_JS), 1000*60*60*24);

////////////////////////////////////////////////////////////////////////////// 

//Zmiana zawartosci diva liczników na informacje o ostateniej aktualizacji 
// const divFrame = document.getElementById('divFrame');
// const original_div_frame = divFrame;

// divFrame.addEventListener('mouseover', () => {
//     divFrame.innerHTML = '<div d-flex aligns-item center> Hi </div>';
// })
// divFrame.addEventListener('mouseout', () => {
//     divFrame.innerHTML = original_div_frame;
// })


//////////////////////////////////////////////////////////////////////////////

//Zmiana na ID w 'a' 

const discord = document.getElementById('discord');
let temp = false;
const original_discord = discord.innerHTML;

discord.addEventListener('click', function(event) {
    event.stopPropagation();
    temp = !temp;
    
    if (temp) {
        discord.innerHTML = '<i class="bi bi-discord size_icon_contact"></i> #michsias';
    } else {
        discord.innerHTML = original_discord;
    }
});

document.addEventListener('click', function() {
    if (temp) {
        discord.innerHTML = original_discord;
        temp = false;
    }
});





