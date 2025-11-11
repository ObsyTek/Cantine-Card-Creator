

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

        this.statut = "Académicien";
        this.inviteur = "";
        this.pseudo = "";
        this.alias = "";
        this.pronoms = "";
        this.houseIndex = 0;
        this.blackProfileSource = new Image();
        this.colorProfileSource = new Image();

    }
    Init(){

        this.blackCanvasContext.strokeStyle = "#EBECEC";
        this.colorCanvasContext.strokeStyle = "#D2DDF1";

        this.blackBackground_img.src = "img/NB/Fonds/Fond.svg";
        this.blackBackground_img.onload = function (){
            initLoaded();
        }
        this.colorBackground_img.src = "img/Couleur/Fonds/Fond.png";
        this.colorBackground_img.onload = function (){
            initLoaded();
        }

        this.blackProfileSource.src = "img/NB/Fonds/Profil_Pic.png";
        this.blackProfileSource.onload = function (){
            initLoaded();
        }
        this.colorProfileSource.src = "img/Couleur/Fonds/Profil_Pic.png";
        this.colorProfileSource.onload = function (){
            initLoaded();
        }

        this.blackTitleStatut_img.src = "img/NB/Intitules/Statut.png";
        this.blackTitleStatut_img.onload = function (){
            initLoaded();
        }
        this.colorTitleStatut_img.src = "img/Couleur/Intitules/Statut.png";
        this.colorTitleStatut_img.onload = function (){
            initLoaded();
        }
        this.blackTitlePseudo_img.src = "img/NB/Intitules/Pseudo.png";
        this.blackTitlePseudo_img.onload = function (){
            initLoaded();
        }
        this.colorTitlePseudo_img.src = "img/Couleur/Intitules/Pseudo.png";
        this.colorTitlePseudo_img.onload = function (){
            initLoaded();
        }
        this.blackTitleAlias_img.src = "img/NB/Intitules/Alias.png";
        this.blackTitleAlias_img.onload = function (){
            initLoaded();
        }
        this.colorTitleAlias_img.src = "img/Couleur/Intitules/Alias.png";
        this.colorTitleAlias_img.onload = function (){
            initLoaded();
        }
        this.blackTitlePronoms_img.src = "img/NB/Intitules/Pronoms.png";
        this.blackTitlePronoms_img.onload = function (){
            initLoaded();
        }
        this.colorTitlePronoms_img.src = "img/Couleur/Intitules/Pronoms.png";
        this.colorTitlePronoms_img.onload = function (){
            initLoaded();
        }


        this.blackHouseImg.src = "img/NB/Maisons/Sans_Maison.png";
        this.blackHouseImg.onload = function (){
            initLoaded();
        }
        this.colorHouseImg.src = "img/Couleur/Maisons/Sans_Maison.png";
        this.colorHouseImg.onload = function (){
            initLoaded();
        }

        function initLoaded() {
            initLoadCnt++;
            checkAllLoaded();
        }
        function checkAllLoaded() {

            const loadNeeded = 14;
            if(initLoadCnt == loadNeeded){reloadCanvas();}
        }
    }

    SetHouseImage() {
        this.blackHouseImg.src = "img/NB/Maisons/"+this.ImagesName[this.houseIndex]+".png";
        this.blackHouseImg.onload = function (){
            reloadCanvas();
        }
        this.colorHouseImg.src = "img/Couleur/Maisons/"+this.ImagesName[this.houseIndex]+".png";
        this.colorHouseImg.onload = function (){
            reloadCanvas();
        }
        //this.UpdateCanvas();
    }

    UpdateCanvas(){
        console.log("Update");
        this.blackCanvasContext.drawImage(this.blackProfileSource, 61, 142,240,240);
        this.colorCanvasContext.drawImage(this.colorProfileSource, 61, 142,240,240);

        this.blackCanvasContext.drawImage(this.blackBackground_img,0,0,canvasWidth,canvasHeight);
        this.colorCanvasContext.drawImage(this.colorBackground_img,0,0,canvasWidth,canvasHeight);

        //-STATUT-
        let fullStatut = this.statut;
        if(/^I/.test(this.statut) && this.inviteur != ""){
            fullStatut += " de " + this.inviteur ;
        }
        this.PrintOnCard(fullStatut.toUpperCase(),320,240);
        this.PrintOnCard("Statut:",320,240-25,true);

        //-PSEUDO--
        this.PrintOnCard(this.pseudo.toUpperCase(),320,330);
        this.PrintOnCard("Pseudo:",320,330-25,true);

        //-ALIAS-
        this.PrintOnCard(this.alias.toUpperCase(),320,410);
        this.PrintOnCard("Prénom/Alias:",320,410-25,true);

        //-PRONOM-
        this.PrintOnCard(this.pronoms.toUpperCase().replaceAll(" "," / "),320,520);
        this.PrintOnCard("Pronoms:",320,520-25,true);

        //-HOUSE-
        this.blackCanvasContext.drawImage(this.blackHouseImg,0,0,canvasWidth,canvasHeight);
        this.colorCanvasContext.drawImage(this.colorHouseImg,0,0,canvasWidth,canvasHeight);
    }
    PrintOnCard(text,xPos,yPos,label = false){
        if(label){
            this.blackCanvasContext.lineWidth = 3;
            this.colorCanvasContext.lineWidth = 3;
            this.blackCanvasContext.font = "11pt Pixelify Sans";
            this.colorCanvasContext.font = "11pt Pixelify Sans";
            this.blackCanvasContext.fillStyle = "#444445";
            this.colorCanvasContext.fillStyle = "#27537A";
        }else {
            this.blackCanvasContext.lineWidth = 7;
            this.colorCanvasContext.lineWidth = 7;
            this.blackCanvasContext.font = "18pt Roboto Condensed";
            this.colorCanvasContext.font = "18pt Roboto Condensed";
            this.blackCanvasContext.fillStyle = "#000";
            this.colorCanvasContext.fillStyle = "#000";
        }
        this.blackCanvasContext.strokeText(text,xPos,yPos);
        this.blackCanvasContext.fillText(text,xPos,yPos);
        this.colorCanvasContext.strokeText(text,xPos,yPos);
        this.colorCanvasContext.fillText(text,xPos,yPos);

    }
}

function DownloadCard(type) {
    let cardImage = type == 0?
        blackCanvas.toDataURL("cardImage_black/png",1):
        colorCanvas.toDataURL("cardImage_color/png",1);
    let aDownloadLink = document.createElement('a');
    // Add the name of the file to the link
    let colorString = type == 0?"Black_":"Color_";
    aDownloadLink.download = colorString+'canvas_image.png';
    // Attach the data to the link
    aDownloadLink.href = cardImage;
    // Get the code to click the download link
    aDownloadLink.click();
    console.log("downloadStarted");
}
function reloadCanvas() {
    card.UpdateCanvas();
}
/*--------------------------------------------------------------------------------------------------*/
function loadFont(name,url){
    let customFont = new FontFace(name, "url(" + url + ")");

    customFont.load().then((font) => {
        document.fonts.add(font);
        console.log("Font loaded: "+name);
    });
}
loadFont("Roboto Condensed","https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400..700&family=Roboto+Condensed&display=swap")

let colorCanvas = document.getElementById("color-canvas");
let blackCanvas = document.getElementById("black-canvas");

const canvasWidth = blackCanvas.width;
const canvasHeight = blackCanvas.height;

let colorCanvas_context = colorCanvas.getContext("2d");
let blackCanvas_context = blackCanvas.getContext("2d");

let initLoadCnt = 0;
//init();
card = new Card(blackCanvas_context,colorCanvas_context);
card.Init();

//Events---------------
document.getElementById('statut').onchange = function () {
    let useDisplay = "none";
    card.statut = this.value;
    console.log(card.statut);
    if(/^I/.test(card.statut)){
        useDisplay = "block";
    }
    document.getElementById("inviteur-item").style.display = useDisplay;

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
    card.blackProfileSource.onload = function (){
        reloadCanvas();
    }
    card.colorProfileSource.onload = function (){
        reloadCanvas();
    }
}

card.UpdateCanvas();