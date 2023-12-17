let canvas = document.getElementById("game");
let context = canvas.getContext("2d");
let score = document.getElementById('score');
let highscore = document.getElementById('highscore');

canvas.width = 400;
canvas.height = 400;

let grid = 16;
let count = 0;
let snake = {
    speed: 10,
    x: 0,
    y: 0,
    dx: grid,
    dy: 0,
    tails: [],
    countTails: 4
};

let eat = {
    x: 0,
    y: 0,
};

let scoreAmount = 0;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min))  + min;
}

function clear() {
    canvas.width = canvas.width;
    canvas.height = canvas.height;
}

function start() {
    requestAnimationFrame(start);
    if (count++ < snake.speed) {
        return;
    }
    count = 0;
    clear();
    drawSnake();
    drawEat();
    finish();

    if(localStorage.getItem('highscore') != '' || localStorage.getItem('highscore') != null) {        
    
        highscore.innerHTML = localStorage.getItem('highscore');
    } else {
        localStorage.setItem('highscore', 0);
    }
}

function drawEat () {
    context.fillStyle = "red";
    context.fillRect(eat.x, eat.y, grid-1, grid - 1);
    if (snake.x == eat.x && snake.y == eat.y) {
        snake.countTails++;        
        eat.x = getRandomInt(0, canvas.width / grid) * grid;
        eat.y = getRandomInt(0, canvas.height / grid) * grid;
        scoreAmount++;
        score.innerHTML = scoreAmount;
    }
}

function drawSnake() {
    snake.x += snake.dx;
    snake.y += snake.dy;
    if (snake.x < 0) {
        snake.x = canvas.width - grid;
    } else if (snake.x >= canvas.width) {
        snake.x = 0;
    }
    if (snake.y < 0) {
        snake.y = canvas.height - grid;
    } else if (snake.y >= canvas.width) {
        snake.y = 0;
    }
    snake.tails.unshift({
        x: snake.x,
        y: snake.y,
    });
    if(snake.tails.length > snake.countTails) {
        snake.tails.pop();
    }
    snake.tails.forEach((tail, index) => {
        context.fillStyle = "green";
        context.fillRect(tail.x, tail.y, grid-1, grid - 1);
    })
}

function finish() {
    for (let i = 0; i < snake.tails.length; i++) {
        for (let k = 0; k < snake.tails.length; k++) {
            w = snake.tails[i];
            s = snake.tails[k];
            if (w.x == s.x && w.y == s.y && i != k) {
                snake.x = 0;
                snake.y = 0;
                snake.tails = [];
                snake.countTails = 4;
                snake.dx = grid;
                snake.dy = 0;

                

                if(scoreAmount > localStorage.getItem('highscore')) {
                    localStorage.setItem('highscore', scoreAmount)
                }

                scoreAmount = 0;
                score.innerHTML = scoreAmount;
            }
        }
    }
    
}
document.addEventListener("keydown", (e) => {
    if (e.code == "KeyA" || e.code == "ArrowLeft" && snake.dx == 0) {
        snake.dx = -grid;
        snake.dy = 0;
    } else if (e.code == 'KeyW'|| e.code == "ArrowUp" && snake.dy == 0) {
        snake.dx = 0;
        snake.dy = -grid;
    } else if (e.code == 'KeyD' || e.code == "ArrowRight" && snake.dx == 0) {
        snake.dx = grid;
        snake.dy = 0;
    } else if (e.code == 'KeyS' || e.code == "ArrowDown" && snake.dy == 0) {
        snake.dx = 0;
        snake.dy = grid;
    }
})

requestAnimationFrame(start);