let secuencia = new Array();
let paso_usuario = 0;
let ronda = 0;
let mostrando_secuencia = false;
let jugando = false;

let botones = document.getElementsByClassName('boton-color');

for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener('click', function () {
        pulsar_color(Number(this.getAttribute('data-color')));
    });
}

function iniciar_juego() {
    secuencia = new Array();
    paso_usuario = 0;
    ronda = 0;
    jugando = true;

    document.getElementById('fin_juego').style.display = 'none';
    document.getElementById('btn_iniciar').style.display = 'none';

    siguiente_ronda();
}

function reiniciar_juego() {
    document.getElementById('fin_juego').style.display = 'none';
    iniciar_juego();
}

function siguiente_ronda() {
    ronda++;
    paso_usuario = 0;
    document.getElementById('ronda').innerText = 'Ronda: ' + ronda;
    document.getElementById('estado').innerText = 'Mira la secuencia...';

    let nuevo_color = Math.floor(Math.random() * 4);
    secuencia.push(nuevo_color);

    reproducir_secuencia();
}

function reproducir_secuencia() {
    mostrando_secuencia = true;
    let indice = 0;

    let intervalo = setInterval(function () {
        if (indice >= secuencia.length) {
            clearInterval(intervalo);
            mostrando_secuencia = false;
            document.getElementById('estado').innerText = 'Tu turno';
            return;
        }

        iluminar_boton(secuencia[indice]);
        indice++;
    }, 750);
}

function iluminar_boton(num_color) {
    let boton = document.getElementById('color' + num_color);
    boton.classList.add('iluminado');

    setTimeout(function () {
        boton.classList.remove('iluminado');
    }, 400);
}

function pulsar_color(num_color) {
    if (!jugando || mostrando_secuencia) {
        return;
    }

    iluminar_boton(num_color);

    if (num_color === secuencia[paso_usuario]) {
        paso_usuario++;

        if (paso_usuario === secuencia.length) {
            document.getElementById('estado').innerText = '¡Bien hecho!';
            setTimeout(function () {
                if (jugando) {
                    siguiente_ronda();
                }
            }, 800);
        }
    } else {
        jugando = false;
        document.getElementById('estado').innerText = 'Fallaste';
        document.getElementById('mensaje_fin').innerText =
            'Te equivocaste en la ronda ' + ronda + '. ¡Inténtalo de nuevo para superarte!';
        document.getElementById('fin_juego').style.display = 'block';
        document.getElementById('btn_iniciar').style.display = 'inline-block';
    }
}