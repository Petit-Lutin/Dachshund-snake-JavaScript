class Dog {
    constructor(idConteneur) {
        this.idConteneur = idConteneur;
        this.conteneur = document.getElementById(idConteneur);
        this.ctx = this.conteneur.getContext('2d'); //ctx = contexte
        this.ctx.fillStyle = '#a52a2a';


        this.ctx.fillRect(0, 0, 400, 400);

        // this.player = false;
        this.conteneur.addEventListener("mouseenter", (e) => {
            this.ctx.beginPath();
            var pos = this.conteneur.getBoundingClientRect(); // renvoie la taille du canvas et sa position relative par rapport à la zone d'affichage
            console.log("poxX : " + pos.x + ", posY : " + pos.y);
            console.log("e.clientX : " + e.clientX + ", e.clientY : " +e.clientY);

        });
        this.conteneur.addEventListener("mousemove", (e) => {
            var pos = this.conteneur.getBoundingClientRect();
            this.ctx.lineTo(e.clientX - pos.x, e.clientY - pos.y)

            console.log("poxX : " + pos.x + ", posY : " + pos.y);
            console.log("e.clientX : " + e.clientX + ", e.clientY : " +e.clientY);

        });
        this.conteneur.addEventListener("mouseleave", (e)=>{
            this.ctx.closePath();

        });

        // Evénements pour contrôler le diaporama au clavier
        document.addEventListener("keydown", (e) => {
            switch (e.keyCode) {
                case 37:
                    // <-
                    // this.previousImage();

                    // this.conteneur.moveTo


                    break;
                case 39:
                    //->
                    // this.nextImage();
                    break;
                case 32:
                    // espace
                    // if (this.player === true) {
                    //     this.pause()
                    // } else {
                    //     this.autoPlay()
                    // }
                    break;
                default:
                    break;
            }
        })
    }
}

const dog = new Dog("dog");