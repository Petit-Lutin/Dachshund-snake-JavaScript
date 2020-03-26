const canvas = document.getElementById('snake');
const ctx = canvas.getContext('2d');

// create the unit
const box = 32;

//load images
const background = new Image();
background.src = "background/bg.png";
const foodImg = new Image();
foodImg.src = "sprites/food.png";

const dogHeadImg = new Image();
dogHeadImg.src = "sprites/head.png";
const dogBodyImg = new Image();
dogBodyImg.src = "sprites/body.png";
const dogTailImg = new Image();
dogTailImg.src = "sprites/tail.png";

// snake
let snake = [0, 1];
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

document.addEventListener("keydown", direction);




function direction(e) {
    switch (e.keycode) {
        case 37:
            if (d != "RIGHT") {
                d = "LEFT";
                snake[0].x = snake[0].x - box;
                for (i = 1; i < snake.length; i++) {
                    snake[i].x = snake[i - 1].x;
                }
            };
            break;
        case 38:
            if (d != "DOWN") {
                d = "UP";
                snake[0].y = snake[0].y - box;
                for (i = 1; i < snake.length; i++) {
                    snake[i].y = snake[i - 1].y;
                }
            }
            break;
        case 39:
            if (d != "LEFT") {
                d = "RIGHT";
                snake[0].x = snake[0].x + box;
                for (i = 1; i < snake.length; i++) {
                    snake[i].x = snake[i - 1].x;
                }
            }
            break;
        case 40:
            if (d != "UP") {
                d = "DOWN";
                snake[0].y = snake[0].y + box;
                for (i = 1; i < snake.length; i++) {
                    snake[i].y = snake[i - 1].y;
                }
            }
            break;
        default:
            break;
    }
}


// function direction(event) {
//     let key = event.keyCode;
//     if (key == 37 && d != "RIGHT") {
//         // left.play();
//         d = "LEFT";
//     } else if (key == 38 && d != "DOWN") {
//         // up.play();
//         d = "UP";
//     } else if (key == 39 && d != "LEFT") {
//         // right.play();
//         d = "RIGHT";
//     } else if (key == 40 && d != "UP") {
//         // down.play()
//         d = "DOWN";
//     }
// }

function draw() {
    //background
    ctx.drawImage(background, 0, 0);

    ctx.drawImage(foodImg, food.x, food.y); //place la nourriture dessinée


    //scores
    ctx.fillStyle = "white";
    ctx.font = "45px Komika Text"
    ctx.fillText(score, 2 * box, 1.6 * box);


    for (i = 0; i < snake.length; i++) {
        if (i == 0) {
            ctx.fillStyle = "green";
        } else if (i > 0 && i < snake.length - 1) {
            ctx.fillStyle = "white";
        } else {
            ctx.fillStyle = "red";
        }
        // ctx.drawImage(dImg, food.x, food.y);
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
        // ctx.strokeRect(snake[i].x, snake[i].y, box, box);
    }
    //old head position
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

   if ((snakeX == food.x) && (snakeY == food.y)) {
        score++;
        // eat.play();
        food = {
            x: Math.floor(Math.random() * 20 + 1) * box,
            y: Math.floor(Math.random() * 20 + 3) * box
        }
        //don't remove the tail

    } else {
        //remove the tail 
        snake.pop(); //last element
        // snake.splice(0, snake.length - 1);
    }
 //add new head
    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);

}

let game = setInterval(draw, 100);