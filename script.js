let timer = 60;
let score = 0;
let hitrn = 0;

function increaseScore() {
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}

function getNewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitVal").textContent = hitrn;
}

function makeBubble() {
    let clutter = "";

for (let i = 1; i <= 168; i++) {
    let rn = Math.floor(Math.random() * 10)
    clutter += `<div class="bubble">${rn}</div>`;  // It will override previous value 
}

document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
    let timerint = setInterval(function() {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerVal").textContent = timer; 
        }else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
        }
    }, 1000);
}

document.querySelector("#pbtm").addEventListener("click", function (details)  {
    let clickedNum = Number(details.target.textContent);
    if (clickedNum === hitrn) {
        increaseScore();
        makeBubble();
        getNewHit();
    }
})

getNewHit();
runTimer();
makeBubble();