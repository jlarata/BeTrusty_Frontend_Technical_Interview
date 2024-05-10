/*
  Los primeros dispositivos móviles tenían un teclado llamado T9
  con el que se podía escribir texto utilizando únicamente su
  teclado numérico (del 0 al 9).

  Crea una función que transforme las pulsaciones del T9 a su representación con letras.
    - Debes buscar cuál era su correspondencia original
    - Cada bloque de pulsaciones va separado por un guión.
    - Si un bloque tiene más de un número, debe ser siempre el mismo.
    - Ejemplo:
      Entrada: 6-666-88-777-33-3-33-888
      Salida: MOUREDEV
 */



var mensaje = "";
var traducido = "";

var repeticionesMismaTecla = 0;
var tecla = "";
var anteriorTecla = "";

//la librería que encontré que permite registrar y reaccionar al presionado de teclas.

var readline = require('readline');
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

function tomaInput() {
  process.stdin.on('keypress', (ch, key) => {
    if (key && key.name == 'return') {
      process.stdin.pause();
    }
    mensaje += ch;
    console.log(mensaje);
    return ch;
  });
}

tomaInput();




function revisaRepeticiones() {
    if (repeticionesMismaTecla == 1) {
      return 1; // el usuario no ingresó más teclas
    } else if (repeticionesMismaTecla == 2) {
      return 2; //si esto vuelve en el primer input, es break. pero si vuelve en el segundo, no es nada.
    }
      else if (repeticionesMismaTecla == 3) {
        return 3; //si esto vuelve en el segundo input, es break. ¿en el tercero? tambien ¿no?
    } else {
      console.log("el revisar de repeticiones está devolviendo algo que no corresponde, revisar")
    }
  }
 
async function inputTimer(tiempo) {
  await setTimeout(() => {
    console.log(revisaRepeticiones());
    }, tiempo)}

//inputTimer(1500); <- para el primer y segundo caso
//inputTimer(500); <- para tercer caso



//->imprime "ingrese mensaje para terminar enter"*/




/*function tomaInput() {
  var tecla = prompt('Ingrese mensaje, presione la tecla /"enter/" para terminar: ');        
  console.log(`${tecla}`);}*/

  /*while (tecla  Enter*/


//tomaInput();

/*
  ->tecla = input 

    repeticionesmismatecla == 0 ?

      repeticionesMismaTecla ++
      anteriorTecla = tecla
      traducido = traduce tecla * repeticiones
      string+traducido
      console.log(traducido)

      inputTimer(1500); <- si esto devuelve 1, continue

      fin while /continue?

    :

    inputTimer();

      if (timerInput) {
        repeticionesmismatecla = 0
        fin while (break?)
      }

      ---- esto iría afuera----
      -> async timerInput() {
          await setTimeout(() => {
          si repeticionesmismatecla != 1
            return true
          sino
            repeticionesmismatecla = 0
            return false
         }, 2000)}

      --- esquema de lo anterior---
      -> corre tiempo
      -> si supera X tiempo sin input  
      -> repeticionesmismatecla = 0
      -> fin while

      si tecla === anteriorTecla
    -> y si repeticionesmismatecla no es === 3
      -> repeticionesmismatecla  ++
      -> string-traducido
      -> traducido = traduce tecla * repeticiones
      -> string+traducido
      -> fin while
      sino
      -> traducido = traduce tecla * repeticiones
      -> string+traducido
      -> repeticionesmismatecla = 1
      -> fin while




->imprime "otro mensaje?"
s/n
  repite 1
  fin

  <- esto ultimo es un gran while al rededor
*/





/*function tomaInput() {
  var name = prompt('What is your name? ');
  return (`Hey there ${name}`);
  }*/




const t9Keyboard = value => {
  return
}


//console.log(tomaInput());