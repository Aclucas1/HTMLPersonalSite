var buttonColors = ["red", "blue", "green", "yellow"]
var gamePattern = []
var userClickedPattern = []
var level = 0

function animatePress(color) {
    var btn = $('#' + color)
    btn.addClass('pressed');
    setTimeout(function () {
        btn.removeClass('pressed')
    }, 100);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function playSound(name) {
    var audio = new Audio('sounds/' + name + '.mp3');
    audio.play();
}

function checkAnswer(current) {
    console.log(userClickedPattern)
    if (userClickedPattern[current] === gamePattern[current]) {
        console.log('correct')
        setTimeout(() => { }, 500)
        if (userClickedPattern.length === gamePattern.length) {
            console.log('Next Level');
            nextSequence();
        }
    } else {
        $('h1').text('Game Over!')
        level = 0;
        gamePattern = []
        setTimeout(() => { nextSequence() }, 1000)
    }
}

function nextSequence() {
    level += 1;
    $('h1').text('Level ' + level)
    userClickedPattern = []
    let intId;
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    console.log(gamePattern)
    gamePattern.forEach(c => {
        var p = Promise.resolve();
        p.then(() => playSound(c))
            .then(() => sleep(400))
            .then(() => $('#' + c).fadeOut(200).fadeIn(200))
            .then(() => sleep(400));
    });
}

$(".btn").on('click', function () {
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length - 1)
});

$(document).on('keyup', () => {
    if (level === 0) {
        nextSequence();
    }
});