
const capaTablero = document.getElementById('tablero');
let casillas;
let numBombas;
let celdas;
crear();

document.getElementById('dificultad').addEventListener('change', crear);

document.getElementById('reiniciar').addEventListener('click', reiniciar);

document.getElementById('flagGrande').addEventListener('click', bandera);

function reiniciar(){
    crear();
}

function crear(){
    capaTablero.innerHTML='';
    casillas = document.getElementById('dificultad').value;
    numBombas = Math.floor((casillas*casillas)*0.16);

    for(let n=0; n<casillas; n++){
        for(let m=0; m<casillas; m++){
            let capaCasilla = document.createElement('div');
            capaCasilla.setAttribute('id', `(${n},${m})`);
            capaCasilla.setAttribute('class', 'casilla');
            capaTablero.appendChild(capaCasilla);
            capaCasilla.style.width = (100/casillas)-0.6+'%';
            capaCasilla.style.height = (100/casillas)-0.6+'%';
            capaCasilla.addEventListener('click', evaluar)
        }
    }

    for(let n=0; n<numBombas; n++){
        pos1 = Math.floor(Math.random()*casillas);
        pos2 = Math.floor(Math.random()*casillas);
        if(document.getElementById(`(${pos1},${pos2})`).innerHTML==''){
        document.getElementById(`(${pos1},${pos2})`).innerHTML = '<img id="bomba" src="bomb.png"/>';
        document.getElementById(`(${pos1},${pos2})`).classList.replace('casilla', 'casillaBomba');
        }
        else{
            n--;
        }
    }
    celdas=(casillas*casillas)-numBombas;
    document.getElementById('resultado').innerHTML = 'Le quedan '+celdas+' casillas por desvelar';
    document.getElementById('resultado').style.color = 'black';
}

let evaluaciones = [[-1,-1], [-1,0], [-1,+1], [0,-1], [0,+1], [+1,-1], [+1,0], [+1,+1]];

function evaluar(event){

    if(event.target.className=='casillaBomba'){
        let imagenesBomba = document.querySelectorAll('#bomba');
        for(let n of imagenesBomba){
            n.style.visibility='visible';
        }
        let imagenesBandera = document.querySelectorAll('#flag');
        for(let n of imagenesBandera){
            n.style.visibility='hidden';
        }
        let capasBombas = document.querySelectorAll('.casillaBomba');
        for(let n of capasBombas){
            n.style.backgroundColor = 'red';
            n.removeEventListener('click', evaluar);
        }
        let capasCasillas = document.querySelectorAll('.casilla');
        for(let n of capasCasillas){
            n.removeEventListener('click', evaluar);
        }
        
        capaTablero.innerHTML += '<img id="explosion" src="explosion.gif"/>';
        document.getElementById('resultado').innerHTML = '¡Le ha explotado una bomba! Puede volver a intentarlo';
        document.getElementById('resultado').style.color = 'red';
    }
    else{
        let numero = 0;
        let limpio = event.target.id.replace('(', '').replace(')', '');
        let coordenadas = limpio.split(',');
        let xActual = Number(coordenadas[0]);
        let yActual = Number(coordenadas[1]);

        for(let n=0; n<evaluaciones.length; n++){
            let xCasillaEvaluar = xActual + evaluaciones[n][0];
            let yCasillaEvaluar = yActual + evaluaciones[n][1];
                if(xCasillaEvaluar>=0 && yCasillaEvaluar>=0 && xCasillaEvaluar<casillas && yCasillaEvaluar<casillas){
                let idCasillaEvaluar = `(${xCasillaEvaluar},${yCasillaEvaluar})`;
                capaEvaluar = document.getElementById(idCasillaEvaluar);
                    if(capaEvaluar.className=='casillaBomba'){
                        numero++;
                    }
                }
        }

        event.target.removeEventListener('click', evaluar);
        event.target.style.backgroundColor='white';
        event.target.innerHTML = numero;
        event.target.classList.replace('casilla', 'vacia');

        celdas--;
        document.getElementById('resultado').innerHTML = 'Le quedan '+celdas+' casillas por desvelar';

        // Si ya no quedan celdas por desvelar, ha ganado:
        if(celdas==0){
            capaTablero.innerHTML += '<img id="confeti" src="confeti.gif"/>';
            document.getElementById('resultado').innerHTML = '¡Ha desvelado todas las casillas sin tocar ninguna bomba!';
            document.getElementById('resultado').style.color = 'blue';
            let casillasBomba = document.querySelectorAll('.casillaBomba');
            for(let n of casillasBomba){
            n.removeEventListener('click', evaluar);
            }
        }

        // Si al evaluar el número 0, activará el listener de sus vecinos:
        if(numero==0){
            for(let n=0; n<evaluaciones.length; n++){
                let xCasillaEvaluar = xActual + evaluaciones[n][0];
                let yCasillaEvaluar = yActual + evaluaciones[n][1];
                    if(xCasillaEvaluar>=0 && yCasillaEvaluar>=0 && xCasillaEvaluar<casillas && yCasillaEvaluar<casillas){
                    let idCasillaEvaluar = `(${xCasillaEvaluar},${yCasillaEvaluar})`;
                    capaEvaluar = document.getElementById(idCasillaEvaluar);
                    capaEvaluar.dispatchEvent(new Event('click'));
                }
            }
        }
    }
}

function bandera(){
    //document.body.style.cursor = "url('flag.png')";
    let casillas1 = document.querySelectorAll('.casilla');
    for(let n of casillas1){
        n.removeEventListener('click', evaluar);
        n.addEventListener('click', añadirBandera);
    }
    let casillas2 = document.querySelectorAll('.casillaBomba');
    for(let n of casillas2){
        n.removeEventListener('click', evaluar);
        n.addEventListener('click', añadirBandera);
    }
}

function añadirBandera(event){
    event.target.innerHTML += '<img id="flag" src="flag.png"/>';
    let casillas1 = document.querySelectorAll('.casilla');
    for(let n of casillas1){
        n.removeEventListener('click', añadirBandera);
        n.addEventListener('click', evaluar);
    }
    let casillas2 = document.querySelectorAll('.casillaBomba');
    for(let n of casillas2){
        n.removeEventListener('click', añadirBandera);
        n.addEventListener('click', evaluar);
    }
}