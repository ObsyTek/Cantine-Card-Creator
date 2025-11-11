

class Card {

    constructor(bCtx, cCtx) {
        this.blackCanvasContext = bCtx;
        this.colorCanvasContext = cCtx;

        this.blackBackground_img = new Image();
        this.colorBackground_img = new Image();

        this.blackTitleStatut_img = new Image();
        this.colorTitleStatut_img = new Image();
        this.blackTitlePseudo_img = new Image();
        this.colorTitlePseudo_img = new Image();
        this.blackTitleAlias_img = new Image();
        this.colorTitleAlias_img = new Image();
        this.blackTitlePronoms_img = new Image();
        this.colorTitlePronoms_img = new Image();


        this.ImagesName = ["Sans_Maison","Cheatars","Sales","Campeur","Louteurs"];
        this.blackHouseImg = new Image();
        this.colorHouseImg = new Image();

        this.statut = "Academicien";
        this.inviteur = "";
        this.pseudo = "";
        this.alias = "";
        this.pronoms = "";
        this.houseIndex = 0;
        this.blackProfileSource = new Image();
        this.colorProfileSource = new Image();

    }
    Init(){

        this.blackCanvasContext.font = "22px Roboto";
        this.colorCanvasContext.font = "22px Roboto";

        this.blackBackground_img.src = "img/NB/Fonds/Fond.png";
        this.colorBackground_img.src = "img/Couleur/Fonds/Fond.png";

        this.blackProfileSource.src = "img/NB/Fonds/Profil_Pic.png";
        this.colorProfileSource.src = "img/Couleur/Fonds/Profil_Pic.png";

        this.blackTitleStatut_img.src = "img/NB/Intitules/Statut.png";
        this.colorTitleStatut_img.src = "img/Couleur/Intitules/Statut.png";
        this.blackTitlePseudo_img.src = "img/NB/Intitules/Pseudo.png";
        this.colorTitlePseudo_img.src = "img/Couleur/Intitules/Pseudo.png";
        this.blackTitleAlias_img.src = "img/NB/Intitules/Alias.png";
        this.colorTitleAlias_img.src = "img/Couleur/Intitules/Alias.png";
        this.blackTitlePronoms_img.src = "img/NB/Intitules/Pronoms.png";
        this.colorTitlePronoms_img.src = "img/Couleur/Intitules/Pronoms.png";


        this.blackHouseImg.src = "img/NB/Maisons/Sans_Maison.png";
        this.colorHouseImg.src = "img/Couleur/Maisons/Sans_Maison.png";

    }

    SetHouseImage() {
        this.blackHouseImg.src = "img/NB/Maisons/"+this.ImagesName[this.houseIndex]+".png";
        this.blackHouseImg.onload = function (){
            this.blackCanvasContext.drawImage(this.blackHouseImg,0,0);
        }
        this.colorHouseImg.src = "img/Couleur/Maisons/"+this.ImagesName[this.houseIndex]+".png";
        /*this.colorHouseImg.onload = function (){
            this.colorCanvasContext.drawImage(this.colorHouseImg,0,0);
        }*/
        this.UpdateCanvas();
    }

    UpdateCanvas(){
        console.log("Update");
        this.blackCanvasContext.drawImage(this.blackProfileSource, 22, 52,88,88);
        this.colorCanvasContext.drawImage(this.colorProfileSource, 22, 52,88,88);

        this.blackCanvasContext.drawImage(this.blackBackground_img,0,0,380,242);
        this.colorCanvasContext.drawImage(this.colorBackground_img,0,0,380,242);

        //-STATUT-
        this.blackCanvasContext.drawImage(this.blackTitleStatut_img,0,0,380,242);
        this.colorCanvasContext.drawImage(this.colorTitleStatut_img,0,0,380,242);

        let fullStatut = this.statut;
        if(this.statut == "Invite" && this.inviteur != ""){
            fullStatut += " de " + this.inviteur ;
        }
        this.blackCanvasContext.fillText(fullStatut.toUpperCase(),122,85);
        this.colorCanvasContext.fillText(fullStatut.toUpperCase(),122,85);

        //-PSEUDO--
        this.blackCanvasContext.drawImage(this.blackTitlePseudo_img,0,0,380,242);
        this.colorCanvasContext.drawImage(this.colorTitlePseudo_img,0,0,380,242);

        this.blackCanvasContext.fillText(this.pseudo.toUpperCase(),122,130);
        this.colorCanvasContext.fillText(this.pseudo.toUpperCase(),122,130);

        //-ALIAS-
        this.blackCanvasContext.drawImage(this.blackTitleAlias_img,0,0,380,242);
        this.colorCanvasContext.drawImage(this.colorTitleAlias_img,0,0,380,242);

        this.blackCanvasContext.fillText(this.alias.toUpperCase(),120,180);
        this.colorCanvasContext.fillText(this.alias.toUpperCase(),120,180);

        //-PRONOM-
        this.blackCanvasContext.drawImage(this.blackTitlePronoms_img,0,0,380,242);
        this.colorCanvasContext.drawImage(this.colorTitlePronoms_img,0,0,380,242);

        this.blackCanvasContext.fillText(this.pronoms.toUpperCase().replaceAll(" "," / "),120,225);
        this.colorCanvasContext.fillText(this.pronoms.toUpperCase().replaceAll(" "," / "),120,225);

        //-HOUSE-
        this.blackCanvasContext.drawImage(this.blackHouseImg,0,0,380,242);
        this.colorCanvasContext.drawImage(this.colorHouseImg,0,0),380,242;
    }
}
function UpdateField(fieldId, thisEllement) {
    card.UpdateCanvas();
}
function DownloadCard(type) {
    let cardImage = type == 0?
        colorCanvas.toDataURL("cardImage/png"):
        blackCanvas.toDataURL("cardImage/png");
    let aDownloadLink = document.createElement('a');
    // Add the name of the file to the link
    aDownloadLink.download = 'canvas_image.png';
    // Attach the data to the link
    aDownloadLink.href = cardImage;
    // Get the code to click the download link
    aDownloadLink.click();
    console.log("downloadStarted");
}

let colorCanvas = document.getElementById("black-canvas");
let blackCanvas = document.getElementById("color-canvas");
let colorCanvas_context = colorCanvas.getContext("2d");
let blackCanvas_context = blackCanvas.getContext("2d");

card = new Card(colorCanvas_context, blackCanvas_context);
card.Init();

//Events---------------
document.getElementById('statut').onchange = function () {
    let useDisplay = "none";
    if(this.value == "Invite"){
        useDisplay = "block";
    }
    document.getElementById("inviteur-item").style.display = useDisplay;
    //document.getElementById("inviteur-label").style.display = useDisplay;

    card.statut = this.value;
    card.UpdateCanvas();
}
document.getElementById('inviteur').onchange = function () {
    card.inviteur = this.value;
    card.UpdateCanvas();
}
document.getElementById('pseudo').onchange = function () {
    card.pseudo = this.value;
    card.UpdateCanvas();
}
document.getElementById('alias').onchange = function () {
    card.alias = this.value;
    card.UpdateCanvas();
}
document.getElementById('pronoms').onchange = function () {
    card.pronoms = this.value;
    card.UpdateCanvas();
}
document.getElementById('house').onchange = function () {
    card.houseIndex = this.value;
    card.SetHouseImage();
}
document.getElementById('profilImage').onchange = function () {
    console.log(this.value);
    card.blackProfileSource.src = URL.createObjectURL(document.getElementById('profilImage').files[0]);
    card.colorProfileSource.src = URL.createObjectURL(document.getElementById('profilImage').files[0]);
    card.UpdateCanvas();
}

card.UpdateCanvas();
//card.SetBackgroundImage("img/Fond_Couleur.png");