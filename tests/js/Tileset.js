function Tileset(url) {
    // Chargement de l'image dans l'attribut image
    this.image = newImage();
    this.image.referenceDuTileset = this;

    this.image.onload = function () {
        if (!this.complete) thrownewError("Erreur de chargement du tileset nommé \"" + url + "\".");

        // Largeur du tileset en tiles
        this.referenceDuTileset.largeur = this.width / 32;

        //coordonnée x
        varxSourceEnTiles = numero % this.largeur;
        if (xSourceEnTiles == 0) xSourceEnTiles = this.largeur;

        //coordonnée y
        varySourceEnTiles = Math.ceil(numero / this.largeur);

        //numéro
        varxSource = (xSourceEnTiles - 1) * 32;
        varySource = (ySourceEnTiles - 1) * 32;
    }
    this.image.src = "../../tilesets/" + url;


    
}

// Méthode de dessin du tile numéro "numero" dans le contexte 2D"context" aux coordonnées x et y
Tileset.prototype.dessinerTile = function (numero, context, xDestination, yDestination) {
    context.drawImage(this.image, xSource, ySource, 32, 32, xDestination, yDestination, 32, 32);
}