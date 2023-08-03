//Licznik nauki

// Deklaracja stałej daty rozpoczęcia nauki
const start_HTML = new Date('2023-05-14');
const start_JS = new Date('2023-08-02');

//Uchytw na id znacznika p
const coddingHTML = document.getElementById('HTML-CSS');
const coddingJS = document.getElementById('JS');

//Funkcja przyjmuje dwa agumenty i zwraca liczbe dni nauki
function updateTimer(counter, startTime) 
{
    const today = new Date();
    const timeDifference = today.getTime() - startTime.getTime();

    // Obliczanie liczby dni
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    // Wyświetlanie czasu na stronie
    counter.innerHTML = days + ` days`;
}

// Aktualizuj licznik co 24H
setInterval(updateTimer(coddingHTML, start_HTML), 1000);
setInterval(updateTimer(coddingJS, start_JS), 1000);


//Informacja kiedy był update dni

const divFrame = document.getElementById('divFrame')
const originalDivFrame = 
'<div id="coddingTitle"><h2>Codding since:</h2></div><div><ul id="coddingList"><li>HTML + CSS<p id="HTML-CSS"></p></li><li>JavaScript<p id="JS"></p></li></ul></div>';

function changeContent(replace)
{
    if(replace) 
    {
      divFrame.innerHTML = " ";

      const newDiv = document.createElement('div');
      newDiv.textContent = "Hi";
      divFrame.appendChild(newDiv);
    }
    else
    {
      divFrame.innerHTML = originalDivFrame;
    }
}



 


























const burger = document.querySelector('#switch');
const nav = document.querySelector('#navBox')

burger.addEventListener('click', function() 
{
  burger.classList.toggle('activeBurger');
  nav.classList.toggle('navBox-bg');
});
