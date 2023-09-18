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

setInterval(() => {
    updateTimer(coddingHTML, start_HTML);
}, 86400000);
setInterval(() => {
    updateTimer(coddingJS, start_JS);
}, 86400000);

document.addEventListener("DOMContentLoaded", function () {
    updateTimer(coddingHTML, start_HTML);
    coddingHTML.classList.toggle('animation_days'); 

    updateTimer(coddingJS, start_JS);
    coddingJS.classList.toggle('animation_days'); 
  });

document.addEventListener("DOMContentLoaded", function () {  
    setTimeout(function () {
        const animatedElement = document.getElementById('profession');
        animatedElement.classList.toggle('animation_title'); 
    }, 500); 
  });

  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        const animatedElement = document.getElementById('avatar');
        animatedElement.classList.toggle('animation_avatar'); 
    }, 750); 
  });


////////////////////////////////////////////////////////////////////////////// 
//Zmiana zawartosci diva liczników na informacje o ostatniej aktualizacji 

// let lastUpdateTimestamp = Date.now();

// const divFrame = document.getElementById('divFrame');
// const original_frame = divFrame.innerHTML;

// function updateDivFrameContent() {
//     const now = Date.now();
//     const secondsPassed = Math.floor((now - lastUpdateTimestamp) / 1000);
//     divFrame.innerHTML = '<div class="last_update">Last update: ' + secondsPassed + ' seconds ago</div>';
// }

// function resetDivFrameContent() {
//     divFrame.innerHTML = original_frame;
// }

// divFrame.addEventListener('mouseover', () => {
//     updateDivFrameContent(); // Update immediately on mouseover
//     const intervalId = setInterval(updateDivFrameContent, 1000); // Update every second
//     divFrame.addEventListener('mouseout', () => {
//         clearInterval(intervalId); // Stop updating when mouse is out
//         resetDivFrameContent();
//     });
// });




