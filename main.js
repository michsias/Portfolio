const start_HTML = new Date('2023-06-18');
const start_JS = new Date('2023-08-20');

const coddingHTML = document.getElementById('HTML-CSS');
const coddingJS = document.getElementById('JS');

const divFrame = document.getElementById('divFrame');

function updateTimer(counter, startTime)  {

    const today = new Date();
    const timeDifference = today.getTime() - startTime.getTime();
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    return counter.innerHTML = days + ` days`;
}

function changeContent(replace) {
    if (replace) {
        divFrame.innerHTML = "<div> Hi </div>";
    } else {
        divFrame.innerHTML = originalDivFrame;
    }
}

setInterval(() => updateTimer(coddingHTML, start_HTML), 999999500);
setInterval(() => updateTimer(coddingJS, start_JS), 999999500);

///////////////////////////////////////////////////////////////////////////

const switchBG = document.querySelector('.switch');

switchBG.addEventListener('click', (event) => {
    switchBG.classList.toggle('activeSwitch');
})

//////////////////////////////////////////////////////////////////////
//Zmiana zawartości znacznika a w podstronie contact
/////////////////////////////////////////////////////////////////////
const discord = document.getElementById('discord');
const originalContent = discord.innerHTML;

// Funkcja do zmiany zawartości elementu
const showID = (temp) => {
    // Jeśli temp jest prawdą, zmieniamy zawartość na nową
    discord.innerHTML = temp
        ? ' <i class="bi bi-discord size_icon_contact"></i> #michsias'
        : originalContent; // W przeciwnym przypadku przywracamy oryginalną zawartość
};

// Nasłuchiwanie na kliknięcie elementu discord
discord.addEventListener('click', () => showID(true));

// Nasłuchiwanie na kliknięcie gdziekolwiek indziej
document.addEventListener('click', (event) => {
    // Jeśli kliknięcie nastąpiło poza elementem discord, przywracamy oryginalną zawartość
    if (event.target !== discord) {
        showID(false);
    }
});


