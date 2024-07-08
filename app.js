let numeroSecreto = 0;
let intentos = 0;
let NumerosDescartados = [];
let NumeroMaximo = 15;
let tope = IntentosMaximos(3,6);


function AsignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}
function VerificarIntentos(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto){
        AsignarTextoElemento('p',`¡Felicidades! acertaste el numero en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else if(intentos === tope){
        AsignarTextoElemento('p',`Has perdido llegaste al numero maximo de intentos`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        if (numeroDeUsuario > numeroSecreto){
            AsignarTextoElemento('p','EL numero secreto es menor');
        }else{
            AsignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos ++;
        limpiarCaja();
    }
    return;
}

function GenerarNumeroSecreto() {
    let NumeroGenerado = Math.floor(Math.random()* NumeroMaximo) + 1;
    if (NumerosDescartados.length == NumeroMaximo){
        AsignarTextoElemento('p',`Has perdido llegaste al numero maximo de intentos ${intentos} en total`);
    }else{
        if (NumerosDescartados.includes(NumeroGenerado)){
            return GenerarNumeroSecreto();
        }else{
            NumerosDescartados.push(NumeroGenerado);
            return NumeroGenerado;
        }
    }
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales(){
    AsignarTextoElemento('h1','Juego del numero secreto!');
    AsignarTextoElemento('h2',`Tienes ${tope} intentos para acertar. ¡Buena suerte!`);
    AsignarTextoElemento('p',`Ingresa un numero del 1 al ${NumeroMaximo}`);
    numeroSecreto = GenerarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    // limpiar caja
    limpiarCaja();
    // indicar mensaje de intervalos de numeros
    // Generar el numero aletorio
    // inicializar el numero de intentos
    condicionesIniciales();
    // desabilitar el boton del nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');}
    let refresh = document.getElementById('reiniciar');
    refresh.addEventListener('click', _ => {
            location.reload();
})

function IntentosMaximos(min,max) {
    return Math.floor(Math.random()* (max - min)) + min;
}

condicionesIniciales();