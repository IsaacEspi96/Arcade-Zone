let numero = Math.floor(Math.random() * 100) + 1;
let intentos = 0;
let max_intentos = document.getElementById('dificultad').value;
let respuestas = new Array();

function evaluar() {
    let numero_usuario = document.getElementById('numero_usuario').value;
    let aviso = document.getElementById('aviso_input');

    if (numero_usuario === '') {
        aviso.innerText = 'Escribe un número antes de probar.';
        return;
    }

    aviso.innerText = '';
    respuestas[intentos] = Number(numero_usuario);
    intentos++;

    let acerto = false;
    document.getElementById('mensaje').innerHTML = '';

    for (let pos = 0; pos < respuestas.length; pos++) {
        let linea = '<div class="fila-intento">';
        linea += '<span>Intento ' + (pos + 1) + ': escribiste <strong>' + respuestas[pos] + '</strong></span>';

        if (respuestas[pos] < numero) {
            linea += '<span class="pista-bajo">Era bajo</span>';
        } else if (respuestas[pos] > numero) {
            linea += '<span class="pista-alto">Era alto</span>';
        } else {
            linea += '<span class="pista-acierto">¡Acertaste!</span>';
            acerto = true;
        }

        linea += '</div>';
        document.getElementById('mensaje').innerHTML += linea;
    }

    if (acerto) {
        acierto();
        return;
    }

    if (intentos >= max_intentos) {
        demasiados_intentos();
    }

    document.getElementById('numero_usuario').value = '';
}

function iniciar_juego() {
    max_intentos = document.getElementById('dificultad').value;
    document.getElementById('juego').style.display = 'block';
    document.getElementById('configuracion').style.display = 'none';
    document.getElementById('fin_juego').style.display = 'none';
    document.getElementById('aviso_input').innerText = '';
}

// Funciones para reiniciar juego
function reiniciar() {
    intentos = 0;
    max_intentos = document.getElementById('dificultad').value;
    numero = Math.floor(Math.random() * 100) + 1;
    document.getElementById('configuracion').style.display = 'block';
    document.getElementById('juego').style.display = 'none';
    document.getElementById('fin_juego').style.display = 'none';
    document.getElementById('fin_juego').className = '';
    document.getElementById('mensaje').innerHTML = '';
    document.getElementById('aviso_input').innerText = '';
    document.getElementById('numero_usuario').value = '';
    respuestas = new Array();
    console.log(numero);
}

function acierto() {
    let enhorabuena = '¡Enhorabuena! Lo has conseguido en ' + intentos + ' intentos. El número era el ' + numero + '.';
    document.getElementById('juego').style.display = 'none';
    document.getElementById('fin_juego').className = 'ganar';
    document.getElementById('texto_fin').innerText = enhorabuena;
    document.getElementById('fin_juego').style.display = 'block';
}

function demasiados_intentos() {
    let fallar = 'Has superado el número máximo de intentos (' + max_intentos + '). El número secreto era el ' + numero + '. ¡Prueba de nuevo!';
    document.getElementById('juego').style.display = 'none';
    document.getElementById('fin_juego').className = 'perder';
    document.getElementById('texto_fin').innerText = fallar;
    document.getElementById('fin_juego').style.display = 'block';
}