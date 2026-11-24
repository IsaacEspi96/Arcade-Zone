let cubo=document.getElementById('cubo');
let gota=document.getElementById('gota1');
let area=document.getElementById('areaJuego');

const velocidadGotaInicial= 20;
let velocidadGota = velocidadGotaInicial;
let puntosVelocidad = 5;

document.getElementById('final').style.visibility='hidden';

document.addEventListener('keydown', mueveCubo)

let marcador = {
    aciertos: 0,
    errores: 0,
    maxAciertos: 10,
    maxErrores: 5,

    reiniciar: function(){
        this.aciertos=0;
        this.errores=0;
    },

    actualizar: function(){
        if(this.errores<this.maxErrores){

            let num = this.errores;
            document.getElementById(num).remove();
        }

        else{
            clearInterval(funcionamiento);
            this.reiniciar();
            document.getElementById('final').style.visibility='visible';
        }
    }
}


cubo.innerHTML = marcador.aciertos + '€'; // Añade el marcador 0€ inicial al cubo



function mueveCubo(event) {
    if (event.key =='ArrowLeft') {
        const posicion = window.getComputedStyle(cubo).getPropertyValue('left').replace('px','');
        let nuevaPosicion=Number(posicion)-50;
        if (nuevaPosicion<0) {
            nuevaPosicion=0;
        }
        cubo.style.left=nuevaPosicion+'px'
    }else  if (event.key =='ArrowRight') {
      const posicion = window.getComputedStyle(cubo).getPropertyValue('left').replace('px','');
      let nuevaPosicion=Number(posicion)+50;
      if (nuevaPosicion>900) {
        nuevaPosicion=900;
      }
        
        cubo.style.left=nuevaPosicion+'px';
    }
}



let capaBoton = document.getElementById('iniciarJuego');
capaBoton.addEventListener('click', iniciar);

let capaBoton1 = document.getElementById('iniciarJuego');
capaBoton1.addEventListener('click', iniciar);
let capaBoton2 = document.getElementById('reiniciarJuego');
capaBoton2.addEventListener('click', iniciar);

let funcionamiento;

function iniciar(){
    iniciaGota();
    velocidadGota = velocidadGotaInicial;
    puntosVelocidad = 5;
    clearInterval(funcionamiento);
    funcionamiento = setInterval(caer, velocidadGota);
    document.getElementById('inicio').style.visibility='hidden';
    document.getElementById('final').style.visibility='hidden';
    document.getElementById('errores').innerHTML = '<div id="1"><i  class="bi bi-cash"></i></div> <div id="2"><i class="bi bi-cash"></i></div> <div id="3"><i class="bi bi-cash"></i></div> <div id="4"><i class="bi bi-cash"></i></div> <div id="5"><i class="bi bi-cash"></i></div>'
    cubo.innerHTML = marcador.aciertos + '€'
}


function iniciaGota(){
let gotaInicio=Math.floor(Math.random()*950);
gota.style.left=gotaInicio+'px';
gota.style.top = '0px';
}

function caer(){
    const posicion = window.getComputedStyle(gota).getPropertyValue('top').replace('px','');
    let nuevaPosicion=Number(posicion)+5;
    if(nuevaPosicion == 500){
        const posicionCubo = window.getComputedStyle(cubo).getPropertyValue('left').replace('px','');
        const posicionGota = window.getComputedStyle(gota).getPropertyValue('left').replace('px','');
        const limiteIzq = Number(posicionCubo) - 50;
        const limiteDer = Number(posicionCubo) + 100;
        //console.log('Posicion Cubo: ' +posicionCubo);
        //console.log('Posicion Gota: ' +posicionGota);
        //console.log('limiteIzq: ' +limiteIzq);
        //console.log('limiteDer: ' +limiteDer);

        if(posicionGota > limiteIzq && posicionGota < limiteDer){
            console.log('gota pillada');
            marcador.aciertos++;
            cubo.innerHTML = marcador.aciertos +'€';
            const sonido = new Audio('audio/chiclin.mp3');
            sonido.play();
            controlDificultad();
        }else{
            console.log('gota perdia');
            marcador.errores++;
            marcador.actualizar();
            }
        }

    gota.style.top=nuevaPosicion+'px';

    if(nuevaPosicion > 500){
        iniciaGota();
    }
}

function controlDificultad(){
    if (marcador.aciertos == puntosVelocidad){
        puntosVelocidad += 5;
        velocidadGota -= 2;
        clearInterval(funcionamiento);
        funcionamiento = setInterval(caer,velocidadGota);
    }
}


