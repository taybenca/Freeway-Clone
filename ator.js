let xAtor = 100;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image (imagemDoAtor, xAtor, yAtor, 30, 30)
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3
  }
  if (keyIsDown(DOWN_ARROW)){
    if(yAtor < 366){
    yAtor += 3
    }
  }
  if (keyIsDown(LEFT_ARROW)){
    xAtor -= 3
  }
  if (keyIsDown(RIGHT_ARROW)){
    xAtor += 3
  }
}

function verificaColisao(){
  ////collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle (xCarros[i], yCarros[i],   comprimentoCarro, alturaCarro, xAtor, yAtor, 15);
    if (colisao){
      atorVolta();
      somDaColisao.play();
      if(meusPontos > 0){
        meusPontos -= 1
        carrosLentos();
      }
    
    }
  }
}

function atorVolta(){
  yAtor = 366;
}

function atorAtravessou(){
  if (yAtor < 5){
    atorVolta();
    carrosRapidos();
    meusPontos += 1;
    somDoPonto.play();
  }
}

function mostraPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 60))
  text(meusPontos, width / 2, 27);
  text("LEVEL :", width / 3, 27)
}