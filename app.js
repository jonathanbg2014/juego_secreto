let numeroSecreto;
let intentos;
let numeroMaximo = 10;
let listaNumerosSorteados=[];

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto;
}
function verificarIntento() {
    let numeroDeusuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeusuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if(numeroDeusuario < numeroSecreto){
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        else {
            asignarTextoElemento('p','El numero secreto es menor');
        }
        intentos++;
        limpiar();
    }
}

function limpiar() {
    document.querySelector('#valorUsuario').value = '';    
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los nuemeros posibles')
    } else {
    //Si el numero generado esta incluido en la lista
    if(listaNumerosSorteados.includes(numeroGenerado)){
        numeroSecreto();
    }
    else {
        listaNumerosSorteados.push(numeroGenerado);
    }
    }
}

function funcionesIniciales() {
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p',`Ingresar un número del 1 al ${numeroMaximo}`);
    //Generar numero aleatorio
    numeroSecreto = generarNumeroSecreto();
    //inicializar nuevo de intentos
    intentos = 1;
}

function reiniciarJuego() {
    //Limpier Input
    limpiar();
    //Funciones iniciales
    funcionesIniciales();
    //Desabilitar boton de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled',true);
}

funcionesIniciales();


