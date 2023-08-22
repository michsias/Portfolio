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

setInterval(() => updateTimer(coddingHTML, start_HTML), 1111111111111111111111111111111500);
setInterval(() => updateTimer(coddingJS, start_JS), 11111111111111111111111111111111111500);

////////////////////////////////////////////////////////////////////////////// 

//Zmiana zawartosci diva liczników na informacje o ostateniej aktualizacji 
const divFrame = document.getElementById('divFrame');
const original_div_frame = divFrame.innerHTML;

divFrame.addEventListener('mouseover', function() {
    divFrame.innerHTML = '<div> Hi</div>';
})
divFrame.addEventListener('mouseout', function() {
    divFrame.innerHTML = original_div_frame;
})


//////////////////////////////////////////////////////////////////////////////

//Zmiana zawartości znacznika 'a' w podstronie contact
const discord = document.getElementById('discord');
const originalContent = discord.innerHTML;

console.log(originalContent);

// Funkcja do zmiany zawartości elementu
const showID = (temp) => {
    discord.innerHTML = temp
        ? ' <i class="bi bi-discord size_icon_contact"></i> #michsias'
        : originalContent; 
};


discord.addEventListener('click', () => showID(true));
document.addEventListener('click', (event) => {
    if (event.target !== discord) {
        showID(false);
    }
});


