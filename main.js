const start_HTML = new Date('2023-05-14');
const start_JS = new Date('2023-08-02');

const coddingHTML = document.getElementById('HTML-CSS');
const coddingJS = document.getElementById('JS');

const divFrame = document.getElementById('divFrame');
const originalDivFrame = divFrame.innerHTML;

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

setInterval(() => updateTimer(coddingHTML, start_HTML), 500);
setInterval(() => updateTimer(coddingJS, start_JS), 500);

divFrame.addEventListener('mouseenter', () => changeContent(true));
divFrame.addEventListener('mouseleave', () => changeContent(false));