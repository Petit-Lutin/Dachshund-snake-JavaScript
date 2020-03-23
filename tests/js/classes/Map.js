function Map(nom) { // Création de l'objet XmlHttpRequest
    var xhr = getXMLHttpRequest();
    // Chargement du fichier
    xhr.open("GET", './maps/' + nom + '.json', false);
    xhr.send(null);
    if (xhr.readyState != 4 || (xhr.status != 200 && xhr.status != 0)) //Code == 0 en local
    {
        thrownewError("Impossible de charger la carte nommée \"" + nom + "\" (code HTTP : " + xhr.status + ").");
    }
    var mapJsonData = xhr.responseText;

    // Analyse des données
    var mapData = JSON.parse(mapJsonData);



    this.tileset = new Tileset(mapData.tileset);
    this.terrain = mapData.terrain;

    // Pour récupérer la taille (en tiles) de la carte
    Map.prototype.getHauteur = function () {
        returnthis.terrain.length;
    }
    Map.prototype.getLargeur = function () {
        returnthis.terrain[0].length;
    }
    Map.prototype.dessinerMap = function (context) {
        for (vari = 0, l = this.terrain.length; i < l; i++) {
            varligne = this.terrain[i];
            vary = i * 32;
            for (varj = 0, k = ligne.length; j < k; j++) {
                this.tileset.dessinerTile(ligne[j], context, j * 32, y);
            }
        }
    }

}