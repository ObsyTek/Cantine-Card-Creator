

class Card {

    constructor(bCtx, cCtx) {
        this.blackCanvasContext = bCtx;
        this.colorCanvasContext = cCtx;

        this.blackBackground_img = new Image();
        this.colorBackground_img = new Image();

        this.ImagesName = ["VIDE","Lantern","Skull","Sel","Tente","Coffre"];
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

        this.fieldStart = 220;
        this.fieldSpacing = 125;
        this.labelSpacing = 55;
    }
    Init(){

        this.blackCanvasContext.strokeStyle = "#EBECEC";
        this.colorCanvasContext.strokeStyle = "#D2DDF1";

        this.blackBackground_img.src = "img/NB/Fonds/Fond.png";
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

        this.blackHouseImg.src = "img/NB/Maisons/VIDE.png";
        this.blackHouseImg.onload = function (){
            initLoaded();
        }
        this.colorHouseImg.src = "img/Couleur/Maisons/VIDE.png";
        this.colorHouseImg.onload = function (){
            initLoaded();
        }

        function initLoaded() {
            initLoadCnt++;
            checkAllLoaded();
        }
        function checkAllLoaded() {

            const loadNeeded = 6;
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
    }

    UpdateCanvas(){
        console.log("Update");
        this.blackCanvasContext.drawImage(this.blackProfileSource, 61, 142,240,240);
        this.colorCanvasContext.drawImage(this.colorProfileSource, 61, 142,240,240);

        this.blackCanvasContext.drawImage(this.blackBackground_img,0,0,canvasWidth,canvasHeight);
        this.colorCanvasContext.drawImage(this.colorBackground_img,0,0,canvasWidth,canvasHeight);

        let visibleFieldIndex = 0;
        //-STATUT-
        let fullStatut = this.statut;
        if(/^I/.test(this.statut) && this.inviteur != ""){
            fullStatut += " de " + this.inviteur ;
        }
        if(this.statut != ""){
            this.PrintOnCard(fullStatut.toUpperCase(), 325, this.fieldStart + visibleFieldIndex * this.fieldSpacing);
            this.PrintOnCard("Statut:", 325, this.fieldStart + visibleFieldIndex * this.fieldSpacing - this.labelSpacing, true);
            visibleFieldIndex++;
        }
        //-PSEUDO--
        if(this.pseudo != ""){
            this.PrintOnCard(this.pseudo.toUpperCase(), 325, this.fieldStart + visibleFieldIndex * this.fieldSpacing);
            this.PrintOnCard("Pseudo:", 325, this.fieldStart + visibleFieldIndex * this.fieldSpacing - this.labelSpacing, true);
            visibleFieldIndex++;
        }
        //-ALIAS-
        if(this.alias != ""){
            this.PrintOnCard(this.alias.toUpperCase(), 325, this.fieldStart + visibleFieldIndex * this.fieldSpacing);
            this.PrintOnCard("Prénom/Alias:", 325, this.fieldStart + visibleFieldIndex * this.fieldSpacing - this.labelSpacing, true);
            visibleFieldIndex++;
        }
        //-PRONOM-
        this.PrintOnCard(this.pronoms.toUpperCase().replaceAll(" "," / "),325,this.fieldStart+visibleFieldIndex*this.fieldSpacing);
        this.PrintOnCard("Pronoms:",325,this.fieldStart+visibleFieldIndex*this.fieldSpacing-this.labelSpacing,true);

        //-HOUSE-
        this.blackCanvasContext.drawImage(this.blackHouseImg,61,400,240,240);
        this.colorCanvasContext.drawImage(this.colorHouseImg,61,400,240,240);
    }
    PrintOnCard(text,xPos,yPos,label = false){
        if(label){
            this.blackCanvasContext.lineWidth = 3;
            this.colorCanvasContext.lineWidth = 3;
            this.blackCanvasContext.font = "20pt Pixelify Sans";
            this.colorCanvasContext.font = "20pt Pixelify Sans";
            this.blackCanvasContext.fillStyle = "#444445";
            this.colorCanvasContext.fillStyle = "#27537A";
        }else {
            this.blackCanvasContext.lineWidth = 7;
            this.colorCanvasContext.lineWidth = 7;
            this.blackCanvasContext.font = "36pt Roboto Condensed";
            this.colorCanvasContext.font = "36pt Roboto Condensed";
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