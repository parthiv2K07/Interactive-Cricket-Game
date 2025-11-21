let team1Score = 0;
let team2Score = 0;
let runs = 0;
let wickets = 0;
let overs = 0;

const maxOvers = 5;
const maxWickets = 10;

function animateScore(id) {
    const el = document.getElementById(id);
    el.classList.add("score-animate");
    setTimeout(() => el.classList.remove("score-animate"), 200);
}

function updateScoreboard() {
    document.getElementById("team1-score").textContent = team1Score;
    document.getElementById("team2-score").textContent = team2Score;
    document.getElementById("runs").textContent = runs;
    document.getElementById("wickets").textContent = wickets;
    document.getElementById("overs").textContent = overs;

    animateScore("team1-score");
    animateScore("team2-score");
    animateScore("runs");
}

const ball = document.getElementById("ball");
function hitBall() {
    ball.style.transform = "translateX(200px) rotate(360deg)";
    setTimeout(() => {
        ball.style.transform = "translateX(0px) rotate(0deg)";
    }, 500);
}

const wicketSticks = document.getElementById("wicket");
function showWicketFlash() {
    wicketSticks.classList.add("flash");
    setTimeout(() => {
        wicketSticks.classList.remove("flash");
    }, 500);
}

document.getElementById("hit-button").addEventListener("click", () => {
    const run = Math.floor(Math.random() * 6) + 1;
    runs += run;
    team1Score += run;

    hitBall();
    updateScoreboard();
});

document.getElementById("bowl-button").addEventListener("click", () => {
    const chance = Math.random();

    if (chance < 0.3) {  
        wickets++;
        showWicketFlash();

        if (wickets >= maxWickets) showGameOver();
    } else {
        runs += 1;
        team2Score += 1;
    }

    updateScoreboard();
});

function addOver() {
    if (overs < maxOvers) {
        overs++;
        updateScoreboard();
    } else {
        showGameOver();
    }
}

function addWicket() {
    if (wickets < maxWickets) {
        wickets++;
        updateScoreboard();
    } else {
        showGameOver();
    }
}

function showGameOver() {
    document.getElementById("game-over-screen").classList.add("show");
}
