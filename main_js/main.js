//////////////////////////////////////////////////////////////////////////////
//Liczniki rozpoczęcia nauki HTML + CSS + JavaScript

const start_HTML = new Date('2023-06-18');
const start_JS = new Date('2023-08-20');

const coddingHTML = document.getElementById('HTML-CSS');
const coddingJS = document.getElementById('JS');

let lastUpdate = Date.now();

function updateTimer(counter, startTime) {
    const today = new Date();
    const timeDifference = today.getTime() - startTime.getTime();
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    counter.innerHTML = days + ` days`;
}

setTimeout(updateTimer(coddingHTML, start_HTML), 2000);
setTimeout(updateTimer(coddingJS, start_JS), 2000);

setInterval(updateTimer(coddingHTML, start_HTML), 5000);
setInterval(updateTimer(coddingJS, start_JS), 5000);


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