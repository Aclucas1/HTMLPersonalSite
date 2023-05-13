function makeSound(key) {
    var audio = false;
    switch (key) {
        case 'w':
            audio = new Audio('./sounds/tom-1.mp3');
            break;
        case 'a':
            audio = new Audio('./sounds/tom-2.mp3');
            break;
        case 's':
            audio = new Audio('./sounds/tom-3.mp3');
            break;
        case 'd':
            audio = new Audio('./sounds/tom-4.mp3');
            break;
        case 'j':
            audio = new Audio('./sounds/snare.mp3');
            break;
        case 'k':
            audio = new Audio('./sounds/kick.mp3');
            break;
        case 'l':
            audio = new Audio('./sounds/crash.mp3');
            break;
        default:
            break;

    }
    if (audio) {
        audio.play();
    }
}

function btnAnimation(key) {
    var active_btn = document.querySelector("." + key);
    if (active_btn) {
        active_btn.classList.add('pressed');
        setTimeout(() => {
            active_btn.classList.remove('pressed')
        }, 100);
    }
}

document.querySelectorAll('button.drum').forEach(element => {
    element.addEventListener('click', () => {
        makeSound(element.textContent)
        btnAnimation(element.textContent)
    })
});

document.addEventListener('keydown', (event) => {
    makeSound(event.key)
    btnAnimation(event.key)
})

