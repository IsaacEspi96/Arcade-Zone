let capaTablero=document.getElementById('tablero');

for(let n=0; n<9; n++){
    let capaCasilla=document.createElement('div');
    capaCasilla.setAttribute('id', n);
    capaCasilla.setAttribute('class', 'casilla');
    capaTablero.appendChild(capaCasilla);
    capaCasilla.addEventListener('click',pulsarX);
}

let turnos=0;

function pulsarX(event){
    event.target.innerHTML = 'X'
    event.target.style.color = 'blue';
    document.getElementById('turno').innerHTML='Turno Jugador 2';
    document.getElementById('turno').style.color='red';
    for(n=0; n<9; n++){
        if(document.getElementById(n).innerHTML==''){
        document.getElementById(n).removeEventListener('click', pulsarX);
        document.getElementById(n).addEventListener('click', pulsarO);
        }
        else{
            document.getElementById(n).removeEventListener('click', pulsarX);
        }
    }
    turnos++;
    evaluar1();
}

function pulsarO(event){
    event.target.innerHTML = 'O'
    event.target.style.color = 'red';
    document.getElementById('turno').innerHTML='Turno Jugador 1'
    document.getElementById('turno').style.color='blue';
      for(n=0; n<9; n++){
        if(document.getElementById(n).innerHTML==''){
        document.getElementById(n).removeEventListener('click', pulsarO);
        document.getElementById(n).addEventListener('click', pulsarX);
        }
        else{
            document.getElementById(n).removeEventListener('click', pulsarO);
        }
    }
    turnos++;
    evaluar2();
}

function evaluar1(){

    if(document.getElementById(0).innerHTML+document.getElementById(1).innerHTML+document.getElementById(2).innerHTML=='XXX'){
        document.getElementById('turno').innerHTML='Ha ganado el jugador 1';
        document.getElementById('turno').style.color='blue';
        document.getElementById('turno').style.fontSize='3em';
        document.getElementById(0).style.color='yellow';
        document.getElementById(1).style.color='yellow';
        document.getElementById(2).style.color='yellow';
        for(n=0; n<9; n++){
        document.getElementById(n).removeEventListener('click', pulsarO);
        }
    }
    else if(document.getElementById(3).innerHTML+document.getElementById(4).innerHTML+document.getElementById(5).innerHTML=='XXX'){
        document.getElementById('turno').innerHTML='Ha ganado el jugador 1';
        document.getElementById('turno').style.color='blue';
        document.getElementById('turno').style.fontSize='3em';
        document.getElementById(3).style.color='yellow';
        document.getElementById(4).style.color='yellow';
        document.getElementById(5).style.color='yellow';
        for(n=0; n<9; n++){
        document.getElementById(n).removeEventListener('click', pulsarO);
        }
    }
    else if(document.getElementById(6).innerHTML+document.getElementById(7).innerHTML+document.getElementById(8).innerHTML=='XXX'){
        document.getElementById('turno').innerHTML='Ha ganado el jugador 1';
        document.getElementById('turno').style.color='blue';
        document.getElementById('turno').style.fontSize='3em';
        document.getElementById(6).style.color='yellow';
        document.getElementById(7).style.color='yellow';
        document.getElementById(8).style.color='yellow';
        for(n=0; n<9; n++){
        document.getElementById(n).removeEventListener('click', pulsarO);
        }
    }
    else if(document.getElementById(0).innerHTML+document.getElementById(3).innerHTML+document.getElementById(6).innerHTML=='XXX'){
        document.getElementById('turno').innerHTML='Ha ganado el jugador 1';
        document.getElementById('turno').style.color='blue';
        document.getElementById('turno').style.fontSize='3em';
        document.getElementById(0).style.color='yellow';
        document.getElementById(3).style.color='yellow';
        document.getElementById(6).style.color='yellow';
        for(n=0; n<9; n++){
        document.getElementById(n).removeEventListener('click', pulsarO);
        }
    }
    else if(document.getElementById(1).innerHTML+document.getElementById(4).innerHTML+document.getElementById(7).innerHTML=='XXX'){
        document.getElementById('turno').innerHTML='Ha ganado el jugador 1';
        document.getElementById('turno').style.color='blue';
        document.getElementById('turno').style.fontSize='3em';
        document.getElementById(1).style.color='yellow';
        document.getElementById(4).style.color='yellow';
        document.getElementById(7).style.color='yellow';
        for(n=0; n<9; n++){
        document.getElementById(n).removeEventListener('click', pulsarO);
        }
    }
    else if(document.getElementById(2).innerHTML+document.getElementById(5).innerHTML+document.getElementById(8).innerHTML=='XXX'){
        document.getElementById('turno').innerHTML='Ha ganado el jugador 1';
        document.getElementById('turno').style.color='blue';
        document.getElementById('turno').style.fontSize='3em';
        document.getElementById(2).style.color='yellow';
        document.getElementById(5).style.color='yellow';
        document.getElementById(8).style.color='yellow';
        for(n=0; n<9; n++){
        document.getElementById(n).removeEventListener('click', pulsarO);
        }
    }
    else if(document.getElementById(0).innerHTML+document.getElementById(4).innerHTML+document.getElementById(8).innerHTML=='XXX'){
        document.getElementById('turno').innerHTML='Ha ganado el jugador 1';
        document.getElementById('turno').style.color='blue';
        document.getElementById('turno').style.fontSize='3em';
        document.getElementById(0).style.color='yellow';
        document.getElementById(4).style.color='yellow';
        document.getElementById(8).style.color='yellow';
        for(n=0; n<9; n++){
        document.getElementById(n).removeEventListener('click', pulsarO);
        }
    }
    else if(document.getElementById(2).innerHTML+document.getElementById(4).innerHTML+document.getElementById(6).innerHTML=='XXX'){
        document.getElementById('turno').innerHTML='Ha ganado el jugador 1';
        document.getElementById('turno').style.color='blue';
        document.getElementById('turno').style.fontSize='3em';
        document.getElementById(2).style.color='yellow';
        document.getElementById(4).style.color='yellow';
        document.getElementById(6).style.color='yellow';
        for(n=0; n<9; n++){
        document.getElementById(n).removeEventListener('click', pulsarO);
        }
    }
    else{
        final();
    }
}

function evaluar2(){

    if(document.getElementById(0).innerHTML+document.getElementById(1).innerHTML+document.getElementById(2).innerHTML=='OOO'){
        document.getElementById('turno').innerHTML='Ha ganado el jugador 2';
        document.getElementById('turno').style.color='red';
        document.getElementById('turno').style.fontSize='3em';
        document.getElementById(0).style.color='yellow';
        document.getElementById(1).style.color='yellow';
        document.getElementById(2).style.color='yellow';
        for(n=0; n<9; n++){
        document.getElementById(n).removeEventListener('click', pulsarX);
        }
    }
    else if(document.getElementById(3).innerHTML+document.getElementById(4).innerHTML+document.getElementById(5).innerHTML=='OOO'){
        document.getElementById('turno').innerHTML='Ha ganado el jugador 2';
        document.getElementById('turno').style.color='red';
        document.getElementById('turno').style.fontSize='3em';
        document.getElementById(3).style.color='yellow';
        document.getElementById(4).style.color='yellow';
        document.getElementById(5).style.color='yellow';
        for(n=0; n<9; n++){
        document.getElementById(n).removeEventListener('click', pulsarX);
        }
    }
    else if(document.getElementById(6).innerHTML+document.getElementById(7).innerHTML+document.getElementById(8).innerHTML=='OOO'){
        document.getElementById('turno').innerHTML='Ha ganado el jugador 2';
        document.getElementById('turno').style.color='red';
        document.getElementById('turno').style.fontSize='3em';
        document.getElementById(6).style.color='yellow';
        document.getElementById(7).style.color='yellow';
        document.getElementById(8).style.color='yellow';
        for(n=0; n<9; n++){
        document.getElementById(n).removeEventListener('click', pulsarX);
        }
    }
    else if(document.getElementById(0).innerHTML+document.getElementById(3).innerHTML+document.getElementById(6).innerHTML=='OOO'){
        document.getElementById('turno').innerHTML='Ha ganado el jugador 2';
        document.getElementById('turno').style.color='red';
        document.getElementById('turno').style.fontSize='3em';
        document.getElementById(0).style.color='yellow';
        document.getElementById(3).style.color='yellow';
        document.getElementById(6).style.color='yellow';
        for(n=0; n<9; n++){
        document.getElementById(n).removeEventListener('click', pulsarX);
        }
    }
    else if(document.getElementById(1).innerHTML+document.getElementById(4).innerHTML+document.getElementById(7).innerHTML=='OOO'){
        document.getElementById('turno').innerHTML='Ha ganado el jugador 2';
        document.getElementById('turno').style.color='red';
        document.getElementById('turno').style.fontSize='3em';
        document.getElementById(1).style.color='yellow';
        document.getElementById(4).style.color='yellow';
        document.getElementById(7).style.color='yellow';
        for(n=0; n<9; n++){
        document.getElementById(n).removeEventListener('click', pulsarX);
        }
    }
    else if(document.getElementById(2).innerHTML+document.getElementById(5).innerHTML+document.getElementById(8).innerHTML=='OOO'){
        document.getElementById('turno').innerHTML='Ha ganado el jugador 2';
        document.getElementById('turno').style.color='red';
        document.getElementById('turno').style.fontSize='3em';
        document.getElementById(2).style.color='yellow';
        document.getElementById(5).style.color='yellow';
        document.getElementById(8).style.color='yellow';
        for(n=0; n<9; n++){
        document.getElementById(n).removeEventListener('click', pulsarX);
        }
    }
    else if(document.getElementById(0).innerHTML+document.getElementById(4).innerHTML+document.getElementById(8).innerHTML=='OOO'){
        document.getElementById('turno').innerHTML='Ha ganado el jugador 2';
        document.getElementById('turno').style.color='red';
        document.getElementById('turno').style.fontSize='3em';
        document.getElementById(0).style.color='yellow';
        document.getElementById(4).style.color='yellow';
        document.getElementById(8).style.color='yellow';
        for(n=0; n<9; n++){
        document.getElementById(n).removeEventListener('click', pulsarX);
        }
    }
    else if(document.getElementById(2).innerHTML+document.getElementById(4).innerHTML+document.getElementById(6).innerHTML=='OOO'){
        document.getElementById('turno').innerHTML='Ha ganado el jugador 2';
        document.getElementById('turno').style.color='red';
        document.getElementById('turno').style.fontSize='3em';
        document.getElementById(2).style.color='yellow';
        document.getElementById(4).style.color='yellow';
        document.getElementById(6).style.color='yellow';
        for(n=0; n<9; n++){
        document.getElementById(n).removeEventListener('click', pulsarX);
        }
    }
    else{
        final();
    }
}

function final(){
    if(turnos==9){
    document.getElementById('turno').innerHTML='¡Empate!';
    document.getElementById('turno').style.color='purple';
    document.getElementById('turno').style.fontSize='3em';
    }
}

function reiniciar(){
    for(n=0; n<9; n++){
        document.getElementById(n).innerHTML='';
        document.getElementById(n).addEventListener('click',pulsarX);
    }
    document.getElementById('turno').innerHTML='Turno Jugador 1';
    document.getElementById('turno').style.color='blue';
    document.getElementById('turno').style.fontSize='2em';
    turnos=0;
}