// création de la classe Canvas qui crée des instances d'objets canvas
class CanvasBoard {
    constructor(idConteneur) {
        this.idConteneur = idConteneur;
        this.conteneur = document.getElementById(idConteneur);
        this.ctx = this.conteneur.getContext('2d'); //ctx = contexte
        this.ctx.fillStyle = '#f5deb3';

        this.ctx.fillRect(0, 0, 600, 400); //on remplit de (0,0) à (300px,200px) -> rectangle de 300px/200px
        // this.drawReset()

        // this.conteneur.addEventListener("pointerdown", (e) => {
        //     this.paint = true;
        //     this.signature = true;
        //     this.ctx.beginPath();
        //     var pos = this.conteneur.getBoundingClientRect() // renvoie la taille du canvas et sa position relative par rapport à la zone d'affichage
        //     this.ctx.moveTo(e.clientX - pos.x, e.clientY - pos.y); //on démarre la ligne à partir des coordonnées actuelles jusqu'aux nouvelles coordonnées | on soustrait la position du canvas
        // })

        // this.conteneur.addEventListener("pointermove", (e) => {
        //     if (e.buttons === 0) {
        //         // désactive le tracé si le pointeur bouge mais n'est pas appuyé
        //         this.paint = false;
        //     } else {
        //         // on autorise le tracé
        //         var pos = this.conteneur.getBoundingClientRect()
        //         this.ctx.lineTo(e.clientX - pos.x, e.clientY - pos.y)
        //         this.ctx.stroke()
        //     }
        // })

        // this.conteneur.addEventListener("pointerup", (e) => {
        //     this.paint = false;
        //     this.ctx.closePath();
        // })
    }

    // drawReset() {
    //     this.paint = false //la peinture/le tracé n'est pas autorisé au départ
    //     this.signature = false;
    //     this.ctx.clearRect(0, 0, 300, 200);
    // };
}

const canvas1 = new CanvasBoard("canvasboard");