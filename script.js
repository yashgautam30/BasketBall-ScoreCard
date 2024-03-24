let home = document.getElementById("score1");
let away = document.getElementById("score2");

let score1 = 0;
let score2 = 0;

function oneH() {
    score1 += 1
    home.textContent = score1;
}

function twoH() {
    score1 += 2
    home.textContent = score1;
}

function threeH() {
    score1 += 3
    home.textContent = score1;
}

function oneA() {
    score2 += 1
    away.textContent = score2;
}

function twoA() {
    score2 += 2
    away.textContent = score2;
}

function threeA() {
    score2 += 3
    away.textContent = score2;
}

function start() {
    document.getElementById("init").classList.toggle("countdown");
    document.querySelector(".countdown").innerHTML = '<h1>Time Left: <span id="timer">00:30</span></h3>'
    
    begin();
}

function announceWinner() {
    if (score1 > score2) {
        document.querySelector(".countdown").innerHTML = '<h1 id="#winner">HOME WON!</h1>';
    }
    else if (score2 > score1) {
        document.querySelector(".countdown").innerHTML = '<h1 id="#winner">AWAY WON!</h1>';
    }
    else {
        document.querySelector(".countdown").innerHTML = '<h1 id="#winner">MATCH TIED!</h1>';
    }
}

let interval;

function begin() {
    let countDownDate = new Date().setSeconds(new Date().getSeconds() + 31);

    interval = setInterval(() => {
        let now = new Date().getTime();

        let timeDiff = countDownDate - now;

        let mins = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        let secs = Math.floor((timeDiff % (1000 * 60)) / (1000));

        let formatMins = mins < 10 ? "0" + mins : mins;
        let formatSecs = secs < 10 ? "0" + secs : secs;

        document.querySelector("#timer").innerHTML = formatMins + ":" + formatSecs;

        if (timeDiff < 0) {
            clearInterval(interval);

            announceWinner();
        }


    }, 1000);
}

function reset() {

    score1 = 0;
    home.textContent = 0;

    score2 = 0;
    away.textContent = 0;

    document.querySelector("#init").classList.toggle("countdown");
    document.querySelector("#init").innerHTML = '<button onclick="start()" class="start-btn">Start</button>'

}