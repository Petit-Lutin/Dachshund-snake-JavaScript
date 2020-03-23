let gameStart = false;

let dog = {
    head: 1,
    body: [],
    tail: 1
};
// Hero image
var dogReady = false;
var dogImage = new Image();
dogImage.onload = function () {
	dogReady = true;
};
dogImage.src = "sprites/head.png";


let canvasboard = document.getElementById("canvasboard");

ctx = canvasboard.getContext('2d');
ctx.fillStyle = '#f5deb3';

let coordonnees = [
    xmin = 0,
    ymin = 0,
    xmax = 600,
    ymax = 400
];

ctx.fillRect(xmin, ymin, xmax, ymax);

// start() {
//     var pos = canvasboard.getBoundingClientRect();
//     pos.x = xmax / 2;
//     pos.y = ymax / 2;
//     ctx.drawImage("sprites/head.png", pos.x, pos.y);
// }

canvasboard.reset = function () {
	dog.x = canvasboard.width / 2;
	dog.y = canvasboard.height / 2;
}

canvasboard.render = function () {
	// if (bgReady) {
	// 	ctx.drawImage(bgImage, 0, 0);
	// }

	if (dogReady) {
        ctx.drawImage(dogImage,xmax/2, ymax/2);
        console.log("dessin chien")
	}
};
canvasboard.addEventListener("mouseenter", (e) => {
    ctx.beginPath();
    var pos = canvasboard.getBoundingClientRect(); // renvoie la taille du canvas et sa position relative par rapport à la zone d'affichage
    // console.log("poxX : " + pos.x + ", posY : " + pos.y);
    // console.log("e.clientX : " + e.clientX + ", e.clientY : " +e.clientY);
    ctx.moveTo(e.clientX - pos.x, e.clientY - pos.y);
    if (e.clientX - pos.x === xmin) {
        // console.log("perdu, vous avez touché xmin");
    };

    // console.log("e.clientX - pos.x : "+ e.clientX - pos.x + " e.clientY - pos.y :"+ e.clientY - pos.y)
});
canvasboard.addEventListener("mousemove", (e) => {
    var pos = canvasboard.getBoundingClientRect();
    ctx.lineTo(e.clientX - pos.x, e.clientY - pos.y);
    // console.log("poxX : " + pos.x + ", posY : " + pos.y);
    // console.log("e.clientX : " + e.clientX + ", e.clientY : " +e.clientY);
    // console.log("e.clientX - pos.x : "+ e.clientX - pos.x + " e.clientY - pos.y :"+ e.clientY - pos.y)
    // console.log(e.clientX - pos.x)
    // console.log(e.clientY - pos.y)
    if (e.clientX - pos.x === xmin) {
        // console.log("perdu, vous avez touché xmin");
    }
    switch (e.clientX - pos.x) {
        case xmin:
            console.log("perdu, vous avez touché xmin");
            break;
        case xmax:
            console.log("perdu, vous avez touché xmax");
            break;
        default:
            break;
    }

    switch (e.clientY - pos.y) {
        case ymin:
            console.log("perdu, vous avez touché ymin");
            break;
        case ymax:
            console.log("perdu, vous avez touché ymax");
            break;
        default:
            break;
    }

});

canvasboard.addEventListener("mouseleave", (e) => {
    var pos = canvasboard.getBoundingClientRect();

    if (e.clientX - pos.x === xmin) {
        console.log("perdu, vous avez touché xmin");
    };
    ctx.closePath();

})