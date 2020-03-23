

const cvs = document.getElementById('snake');
const ctx = cvs.getContext('2d');

// create the unit
const box = 32;

//load images
const background = new Image();
background.src = "background/bg.png";
const foodImg = new Image();
foodImg.src = "sprites/food.png";

//load audio files
const dead=new Audio();
const eat=new Audio();
const up=new Audio();
const left=new Audio();
const right=new Audio();
const down=new Audio();

dead.src="audio/dead.mp3";
eat.src="audio/eat.mp3";
up.src="audio/up.mp3";
left.src="audio/left.mp3";
right.src="audio/right.mp3";
down.src="audio/down.mp3";

// create the snake
let snake = [];
snake[0] = {
    x: 9 * box,
    y: 10 * box
};

// create the food random position
let food = {
    x: Math.floor(Math.random() * 20 + 1) * box,
    y: Math.floor(Math.random() * 20 + 3) * box
}





// create the score var
let score = 0;

//control the snake
let d;


// let allowPlay=document.getElementById("launchPlay");
// allowPlay.addEventListener("click", (e)=>
// {
// })


document.addEventListener("keydown", direction);


function direction(event) {
    let key = event.keyCode;
    if (key == 37 && d != "RIGHT") {
        left.play();
        d = "LEFT";
    } else if (key == 38 && d != "DOWN") {
        up.play();
        d = "UP";
    } else if (key == 39 && d != "LEFT") {
        right.play();
        d = "RIGHT";
    } else if (key == 40 && d != "UP") {
        down.play()
        d = "DOWN";
    }
}

//check collision
function collision(head, array) {
    for (let i = 0; i < array.length; i++) {
        if (head.x == array[i].x && head.y == array[i].y) {
            return true;
        }
    }
    return false;
}

function draw() {
    ctx.drawImage(background, 0, 0);

    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = (i == 0) ? "green" : "white";
        ctx.fillRect(snake[i].x, snake[i].y, box, box);

        ctx.strokeStyle = "red";
        ctx.strokeRect(snake[i].x, snake[i].y, box, box);
    }

    ctx.fillStyle = "red";
    ctx.drawImage(foodImg, food.x, food.y); //place la nourriture dessinée
    // ctx.fillRect(food.x, food.y, box, box); //dessine un rectangle

  //old head position
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    //which direction

    if (d == "LEFT") snakeX -= box;
    if (d == "UP") snakeY -= box;
    if (d == "RIGHT") snakeX += box;
    if (d == "DOWN") snakeY += box;

    //if the snake eats the food
    if ((snakeX == food.x) && (snakeY == food.y)) {
        score++;
        eat.play();
        food = {
            x: Math.floor(Math.random() * 20 + 1) * box,
            y: Math.floor(Math.random() * 20 + 3) * box
        }
        //don't remove the tail
    } else {
        //remove the tail 
        snake.pop();
    }

    //add new head
    let newHead = {
        x: snakeX,
        y: snakeY
    }

    //game over
    if (snakeX < box || snakeX > 20 * box || snakeY < 3 * box || snakeY > 22 * box || collision(newHead, snake)) {
        clearInterval(game);
        dead.play();
    }

 snake.unshift(newHead);
    //scores
    ctx.fillStyle = "white";
    ctx.font = "45px Komika Text"
    ctx.fillText(score, 2 * box, 1.6 * box);
}

let game = setInterval(draw, 100);
