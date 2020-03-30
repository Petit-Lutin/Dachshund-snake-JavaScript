const cvs = document.getElementById('snake');
const ctx = cvs.getContext('2d');

// create the unit
const box = 32;

//load images
const background = new Image();
background.src = "background/bg.png";
const sprites = new Image();
sprites.src = "sprites/sprites_small.png";

//load audio files
const dead = new Audio();
const eat = new Audio();
const up = new Audio();
const left = new Audio();
const right = new Audio();
const down = new Audio();

dead.src = "audio/dead.mp3";
eat.src = "audio/eat.mp3";
up.src = "audio/up.mp3";
left.src = "audio/left.mp3";
right.src = "audio/right.mp3";
down.src = "audio/down.mp3";

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
        // left.play();
        d = "LEFT";
    } else if (key == 38 && d != "DOWN") {
        // up.play();
        d = "UP";
    } else if (key == 39 && d != "LEFT") {
        // right.play();
        d = "RIGHT";
    } else if (key == 40 && d != "UP") {
        // down.play()
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


//old head position
let snakeX = snake[0].x;
let snakeY = snake[0].y;

function draw() { //drawing on the canvas

    //which direction goes the snake ?

    if (d == "LEFT") snakeX -= box;
    if (d == "UP") snakeY -= box;
    if (d == "RIGHT") snakeX += box;
    if (d == "DOWN") snakeY += box;


    ctx.drawImage(background, 0, 0);


    for (let i = 0; i < snake.length; i++) { //context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);


        //at the very beginning of the game, the dog's size is 1box
        if (snake.length == 1) { //we choose the right element on the sprite

            if (d == "LEFT") {
                ctx.drawImage(sprites, 32, 64, 32, 32, snake[i].x, snake[i].y, 32, 32); //horizontal dog looking to the left

            } else if (d == "RIGHT") {
                ctx.drawImage(sprites, 32, 32, 32, 32, snake[i].x, snake[i].y, 32, 32); //horizontal dog looking to the right

            } else if (d == "UP") {
                ctx.drawImage(sprites, 64, 32, 32, 32, snake[i].x, snake[i].y, 32, 32); //vertical dog looking up

            } else if (d == "DOWN") {
                ctx.drawImage(sprites, 96, 32, 32, 32, snake[i].x, snake[i].y, 32, 32); //vertical dog looking up
            } else if (d == null) {
                ctx.drawImage(sprites, 32, 32, 32, 32, snake[i].x, snake[i].y, 32, 32); //horizontal dog looking to the right by default
            }

        } else if (i == 0 && snake.length >= 2) { //drawing a bigger head according to the axis and direction


            if (d == "LEFT") {
                ctx.drawImage(sprites, 32, 96, 32, 32, snake[i].x, snake[i].y, 32, 32);

            } else if (d == "RIGHT") {
                ctx.drawImage(sprites, 96, 0, 32, 32, snake[i].x, snake[i].y, 32, 32);

            } else if (d == "UP") {
                ctx.drawImage(sprites, 0, 0, 32, 32, snake[i].x, snake[i].y, 32, 32);

            } else if (d == "DOWN") {
                ctx.drawImage(sprites, 128, 64, 32, 32, snake[i].x, snake[i].y, 32, 32);
            }


        } else if (i > 0 && i < snake.length - 1 && snake.length >= 2) { //drawing the body TODO: simplify code because belly is symmetrical 
            // ctx.drawImage(dogBodyImg, snake[i].x, snake[i].y);

            if (snake[i].x > snake[i - 1].x) { //d == "LEFT"
                ctx.drawImage(sprites, 64, 0, 32, 32, snake[i].x, snake[i].y, 32, 32);

            } else if (snake[i].x < snake[i - 1].x) { //d == "RIGHT"
                ctx.drawImage(sprites, 64, 0, 32, 32, snake[i].x, snake[i].y, 32, 32);

            } else if (snake[i].y > snake[i - 1].y) { //d == "UP"
                ctx.drawImage(sprites, 0, 32, 32, 32, snake[i].x, snake[i].y, 32, 32);

            } else if (snake[i].y < snake[i - 1].y) { //d == "DOWN"
                ctx.drawImage(sprites, 0, 32, 32, 32, snake[i].x, snake[i].y, 32, 32);
            }



        } else { // drawing a bigger tail according to the axis and direction

            if (snake[i].x > snake[i - 1].x) { //d == "LEFT"
                ctx.drawImage(sprites, 96, 96, 32, 32, snake[i].x, snake[i].y, 32, 32);

            } else if (snake[i].x < snake[i - 1].x) { //d == "RIGHT"
                ctx.drawImage(sprites, 32, 0, 32, 32, snake[i].x, snake[i].y, 32, 32);

            } else if (snake[i].y > snake[i - 1].y) { //d == "UP"
                ctx.drawImage(sprites, 0, 64, 32, 32, snake[i].x, snake[i].y, 32, 32);

            } else if (snake[i].y < snake[i - 1].y) { //d == "DOWN"
                ctx.drawImage(sprites, 128, 0, 32, 32, snake[i].x, snake[i].y, 32, 32);
            }
        }
      
    }

    ctx.fillStyle = "red";
    ctx.drawImage(sprites, 0, 96, 32, 32, food.x, food.y, 32, 32); //illustration of food
    // ctx.fillRect(food.x, food.y, box, box); //dessine un rectangle

    // //old head position
    // let snakeX = snake[0].x;
    // let snakeY = snake[0].y;


    // //which direction goes the snake ?

    // if (d == "LEFT") snakeX -= box;
    // if (d == "UP") snakeY -= box;
    // if (d == "RIGHT") snakeX += box;
    // if (d == "DOWN") snakeY += box;

    // if (snake.length <= 1) {
    //     // let snakeTail = {
    //     //     x: snake[0].x,
    //     //     y: snake[0].y + box
    //     // };
    //     snake.splice(snake.length, 0, snakeTail);
    //     // snake.unshift(newHead);

    // }
    //if the snake eats the food
    if ((snakeX == food.x) && (snakeY == food.y)) {
        score++;
        // eat.play(); 
        food = {
            x: Math.floor(Math.random() * 20 + 1) * box,
            y: Math.floor(Math.random() * 20 + 3) * box
        }
        for (i = 0; i < snake.length; i++) { //check for the food not to be placed where the snake is
            if (snake[i].x == food.x) {
                food.x = Math.floor(Math.random() * 20 + 1) * box
            }
            if (snake[i].y == food.y) {
                food.y = Math.floor(Math.random() * 20 + 3) * box
            }
        }
        //don't remove the tail

    } else {
        //remove the tail 
        snake.pop(); //last element
    }

    //add new head
    let newHead = {
        x: snakeX,
        y: snakeY
    }


    //game over
    if (snakeX < box || snakeX > 20 * box || snakeY < 3 * box || snakeY > 22 * box || collision(newHead, snake)) {
        clearInterval(game);
        // dead.play();
    }

    snake.unshift(newHead);

    //scores
    ctx.fillStyle = "white";
    ctx.font = "45px Komika Text"
    ctx.fillText(score, 2 * box, 1.6 * box);

}
let game = setInterval(draw, 100);