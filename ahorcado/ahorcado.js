// Generación de la palabra aleatoria.

const lista = [
"PERRO","GATOS","RATON","CASAS","ARBOL","HOJAS","CIELO","DULCE","PLAYA","CAMPO",  
 "RISAS","LUCES","FRENO","BARCO","MOTOR","RELOJ","PAPEL","TINTA","BOTAS","QUESO",  
 "CERDO","OVEJA","MONTE","RIOJA","SELVA","VERDE","NEGRO","BLUSA","FALDA","LARGO",  
 "CORTO","JOVEN","VIEJO","SILLA","TENIS","PANEL","CALOR","FRIOS","GRANO","TRIGO",  
 "NOBLE","BRAVO","CLARO","MORAL","MAGIA","VAPOR","SALUD","COPAS","DADOS","FUEGO",  
 "HIELO","MARCA","LIBRO","LAPIZ","CARTA","TAREA","RUEDA","TECHO","PARED","PISOS",  
 "JABON","CREMA","SUERO","PULSO","CANTO","DANZA","ACTOR","GENIO","POETA","RADIO",  
 "JAULA","LENTE","METAL","NIEVE","RUBIO","PARDO","ZORRO","CISNE","ABEJA","HUESO",  
 "GRUTA","ISLAS","MANGO","LIMON","MELON","PECES","CABRA","TOROS","AGUDA","RECTA",  
 "CURVA","TRAMA","FIRMA","CIFRA","SALDO","PLAZA","RANGO","TURNO","VIAJE","BANCO",  
 "BOLSA","BRISA","CEBRA","CERCA","CINTA","CLASE","COLOR","CORAL","CUEVA","CURSO",  
 "DEDOS","DISCO","DRAMA","DROGA","ENOJO","ESPIA","ETAPA","FALSO","FAUNA","FIBRA",  
 "FLORA","FORMA","FRUTA","GAFAS","GOLPE","GRUPO","GUION","HOGAR","HOTEL","HUMOR",  
 "IDEAL","IMPAR","JUEGO","JUNTA","LEGAL","LINEA","LLAVE","LOGRO","LUCHA","MADRE"
 ,"MEDIA","MENTA","MINAS","MODAL","MOLDE","MUNDO","NADAR","NARIZ","NATAL","NIVEL",
 "NORTE","NOTAS","NUEVO","OJERA","OLIVA","ONDAS","OPERA","ORDEN","OVEJO","PACTO",
 "PAJAR","PAUSA","PECHO","PENAL","PIANO","PINTO","PLANO","PLATA","POCOS","POLLO",
 "PRADO","PRIMO","PULGA","QUEJA","QUITA","RAMPA","RAYOS","REGLA","REINA","RENAL",
 "RESTO","RITMO","ROBLE","ROCAS","RUGIR","SABER","SACRO","SAETA","SALTO","SEÑAL",
 "SERIE","SITIO","SOBRA","SONAR","SUELO","TABLA","TACTO","TARDE","TELAR","TEMOR",
 "TIMON","TOCAR","TONEL","TORRE","TRUCO","UNICO","VACAS","VALLE","VELAS","VENDA",
 "VERSO","VIGOR","VILLA","VIRAL","VISTA","VUELO","YERBA"
];


let palabra_secreta = lista[Math.floor(Math.random()*lista.length)];
console.log(palabra_secreta);

// Definimos las letras válidas para el teclado, para que el usuario no escriba caracteres diferentes.

const letras_validas = 'QWERTYUIOPASDFGHJKLÑZXCVBNM';

// Función que crea un bucle que recorre el Array de letras, crea las teclas y les damos su uso.

function crear_teclado(){
	// Primero borramos el teclado para reiniciar cuando se pulse el botón de reiniciar:
	document.getElementById('teclado').innerHTML='';
	
	for (let n=0; n<letras_validas.length; n++){
		//Creamos un div con las letras.
		let letra = document.createElement('div');
		
		//Ponemos los atributos a cada capa de letras.
		letra.setAttribute('id', letras_validas[n]);
		letra.setAttribute('class', 'tecla');
		letra.innerHTML=letras_validas[n];
		
		// Colocamos la letra creada dentro de la capa de teclado.
		document.getElementById('teclado').appendChild(letra);
		
		//Les damos una función cuando pulsamos sobre cada una.
		letra.addEventListener('click', evaluar);
	}
}

crear_teclado();
// La ejecutamos para crear el teclado.

// Función evaluar

let fallos = 0;
let aciertos = 0;
let intentos = 0;
let partidas = 1;

function evaluar(x){
	// target busca la capa que ha disparado el evento, id recoge su id y luego imprime ese id.
	// Cambiamos el estilo de la capa ya pulsada
	document.getElementById(x.target.id).style.color=('white');
	document.getElementById(x.target.id).style.background=('grey');
	// Eliminamos el Listener de la tecla para que no se pueda volver a pulsar.
	x.target.removeEventListener('click', evaluar);


// Para comprobar si la letra seleccionada está en la palabra, recorremos cada letra de la palabra y la comparamos con la pulsada.

	let acierto = false;
	// Variable para verificar si la letra está en alguna posición. Si está, se cambia a true, si mo se mantiene en false.
	
	for (let n=0; n<palabra_secreta.length; n++){
		if(x.target.id == palabra_secreta[n]){
			document.getElementById(n).innerHTML=x.target.id;
			acierto = true;
			aciertos++;
			intentos++;
		}
	}
	
	if(acierto == false){
		fallos++;
		intentos++;
		dibujar();
	}
	
	else if (aciertos == palabra_secreta.length){
		document.getElementById('fin_juego').style.visibility='visible';
		document.getElementById('mensaje').innerHTML='¡Enhorabuena! ¡Has salvado al pobre hombre! La palabra era '+ palabra_secreta + '. Podemos intentar ahorcarlo de nuevo si quieres reintentarlo.';
	}
	
	document.getElementById('info2').innerHTML='Intentos: ' + intentos;
	
/* Forma similar con if, evaluando capa a capa:

	if(x.target.id == palabra_secreta[0]){
		document.getElementById('0').innerHTML=x.target.id;
	}
	
	if(x.target.id == palabra_secreta[1]){
		document.getElementById('1').innerHTML=x.target.id;
	}
	
	if(x.target.id == palabra_secreta[2]){
		document.getElementById('2').innerHTML=x.target.id;
	}
	
	if(x.target.id == palabra_secreta[3]){
		document.getElementById('3').innerHTML=x.target.id;
	}
	
	if(x.target.id == palabra_secreta[4]){
		document.getElementById('4').innerHTML=x.target.id;
	} */
	
}


// FUNCIÓN DIBUJAR

dibujar(); // Se ejecuta la función inicialmente con fallos = 0 para ocultar el monigote de primeras.

function dibujar(){
	
	if(fallos==0){
		document.getElementById('cabeza').style.visibility='hidden';
		document.getElementById('brazo_izq').style.visibility='hidden';
		document.getElementById('tronco').style.visibility='hidden';
		document.getElementById('brazo_der').style.visibility='hidden';
		document.getElementById('pierna_izq').style.visibility='hidden';
		document.getElementById('pierna_der').style.visibility='hidden';
	}
	if(fallos==1){
		document.getElementById('cabeza').style.visibility='visible';
	}
	if(fallos==2){
		document.getElementById('tronco').style.visibility='visible';
	}
	if(fallos==3){
		document.getElementById('brazo_izq').style.visibility='visible';
	}
	if(fallos==4){
		document.getElementById('brazo_der').style.visibility='visible';
	}
	if(fallos==5){
		document.getElementById('pierna_izq').style.visibility='visible';
	}
	if(fallos==6){
		document.getElementById('pierna_der').style.visibility='visible';
		
		// Mostramos la palabra secreta, enseñando en rojo las sílabas que faltaban:
		
			for (let n=0; n<palabra_secreta.length; n++){
				if(document.getElementById(n).innerHTML==''){
					document.getElementById(n).innerHTML=palabra_secreta[n];
					document.getElementById(n).style.color='red';
				}
			}
			
		//Informamos que el juego ha terminado y damos la opción de reiniciar:
		document.getElementById('fin_juego').style.visibility='visible';
		document.getElementById('mensaje').innerHTML='¡Has ahorcado al pobre hombre! La palabra era '+ palabra_secreta + '. Te han condenado a cadena perpetua, pero no te preocupes, puedes intentarlo de nuevo con otra palabra.';
	}
		// Cuando las comillas internas dan problemas de sintaxis, se pueden poner como \' '\.
}



// FUNCIÓN reiniciar_juego


function reiniciar_juego(){
	aciertos=0;
	fallos=0;
	intentos=0;
	document.getElementById('info2').innerHTML='Intentos: 0';
	partidas++;
	document.getElementById('info1').innerHTML='Partidas: ' + partidas;
	dibujar();
	palabra_secreta = lista[Math.floor(Math.random()*lista.length)];
	console.log(palabra_secreta);
	document.getElementById('fin_juego').style.visibility='hidden';
	crear_teclado();
	
	for (let n=0; n<palabra_secreta.length; n++){
		document.getElementById(n).innerHTML='';
		document.getElementById(n).style.color='black';
	}
}