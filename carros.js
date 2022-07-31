//carro
let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 270, 314];
let velocidadeCarros = [2.3, 4.5, 3.2, 5, 3.3, 2];
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarros(){
  for(let i = 0; i < imagemCarros.length; i++){
    image (imagemCarros[i], xCarros[i], yCarros[i], 50, 40)
  }
}

function movimentaCarros(){
  for(let i = 0; i < imagemCarros.length; i++){
  xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaCarro(){
  for(let i = 0; i < imagemCarros.length; i++){
    if (passouTodaATela(xCarros[i])){
    xCarros[i] = 600;
    }
  }
}
function passouTodaATela(xCarros){
  return xCarros < -50;
}


function carrosRapidos(){
  for (let i = 0; i < imagemCarros.length; i++){
    velocidadeCarros[i] /= 0.8
  }
}

function carrosLentos(){
  for (let i = 0; i < imagemCarros.length; i++){
    velocidadeCarros[i] *= 0.8
  }
}
