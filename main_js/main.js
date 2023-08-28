//////////////////////////////////////////////////////////////////////////////
//Liczniki rozpoczęcia nauki HTML + CSS + JavaScript

const start_HTML = new Date('2023-06-18');
const start_JS = new Date('2023-08-20');

const coddingHTML = document.getElementById('HTML-CSS');
const coddingJS = document.getElementById('JS');

let lastUpdate = Date.now();

function updateTimer(counter, startTime, lastUpdate) {
    const today = new Date();
    const timeDifference = today.getTime() - startTime.getTime();
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    counter.innerHTML = days + ` days`;

    const currentTime = Date.now();
    const timeLastUpdate = currentTime - lastUpdate;
    lastUpdate = currentTime;

    return timeLastUpdate / 1000; // Zwracamy czas w sekundach
}

const updateHTMLTimer = () => {
    const secondsLastUpdate = updateTimer(coddingHTML, start_HTML, lastUpdate);
    lastUpdate = Date.now();
    return secondsLastUpdate;
};

const updateJSTimer = () => {
    const secondsLastUpdate = updateTimer(coddingJS, start_JS, lastUpdate);
    lastUpdate = Date.now();
    return secondsLastUpdate;
};

updateHTMLTimer();
updateJSTimer();

setInterval(updateHTMLTimer, 86400000);
setInterval(updateJSTimer, 86400000);

////////////////////////////////////////////////////////////////////////////// 
//Zmiana zawartosci diva liczników na informacje o ostatniej aktualizacji 

const divFrame = document.getElementById('divFrame');
const original_frame = divFrame.innerHTML;

divFrame.addEventListener('mouseover', () => {
    const lastIntervalCallInfoHTML = updateHTMLTimer();
    divFrame.innerHTML = '<div class="last_update">Last update: ' + lastIntervalCallInfoHTML + ' seconds ago</div>';
});
divFrame.addEventListener('mouseout', () => {
    divFrame.innerHTML = original_frame;
});
