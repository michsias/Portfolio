const counter_eggs = document.getElementById('counter_eggs');
const eggs_hover = document.querySelectorAll('.easter_hover');
const eggs_click = document.querySelectorAll('.easter_click');

let size_eggs = eggs_hover.length + eggs_click.length;

counter_eggs.innerHTML = '<p>' + size_eggs + '</p>';    

function decreaseSize() {
    size_eggs--;
    if (size_eggs === 0) {
        counter_eggs.style.display = 'none';
    } else {
        counter_eggs.innerHTML = '<p>' + size_eggs + '</p>';
    }
}

eggs_hover.forEach(egg => {
    egg.addEventListener('mouseover', function() {
        if (!egg.classList.contains("found")) {
            egg.classList.add("found");
            decreaseSize();
        }
    });
});

eggs_click.forEach(egg => {
    egg.addEventListener('click', function() {
        if (!egg.classList.contains("found")) {
            egg.classList.add("found");
            decreaseSize();
        }
    });
});
