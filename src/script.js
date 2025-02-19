//aqui foi um teste seguindo um tutorial do youtube... adptando obvio

var img = new Imagem();
img.src = "images/playerT.png";
img.onload = function() {
    Init();
}

var divPlayer = document.getElementById("player");
var contexto = divPlayer.getContext("2d");

const escala = 2;
const largura = escala*16;
const altura = escala*16;

//fiquei um tempo parado aq pensando em como continuar kkkkkk

function desenharPlayer(posX, posY, divPX, divPY) {
    contexto.drawImage(img, posX, posY, largura, altura,
        divPX, divPY, largura, altura);
}

const imagens = [3, 0, 1, 2];
var indiceImg = 0;
var contaFrame = 0;
const direcao = 0;

function animarPlayer(){
    contaFrame++;
    if(contaFrame <5){
        window.requestAnimationFrame(animarPlayer);
        return;
    }

    contaFrame = 0;
    contexto.clearRect(0, 0, divPlayer.width, divPlayer.height);
}
    desenharPlayer(imagens[indiceImg]*largura, direcao*altura, 0, 0);