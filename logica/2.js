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



const reg = new RegExp('^[0-9]');
const a =" 0|.?!1|ABC2|DEF3|GHI4|JKL5|MNO6|PQRS7|TUV8|WXYZ9".split("|")
let mensaje = "";
let cantidadVecesTecla = 0;
var tecla = "";
let anteriorTecla = "no";
let enUna = false;
let extUna = 0;
let timer = 0;
let fusa = false;

//la librería que encontré que permite registrar y reaccionar al presionado de teclas.
var readline = require('readline');
readline.emitKeypressEvents(process.stdin);

/* When in raw mode, input is always available character-by-character, not including modifiers.
 Additionally, all special processing of characters by the terminal is disabled, including echoing input
 characters. Ctrl+C will no longer cause a SIGINT when in this mode.*/
process.stdin.setRawMode(true); 

function tomaInput() {
  process.stdin.on('keypress', (ch, key) => {
        
    if (key && key.name == 'return') {
      process.stdin.pause();
    }
    if (key && key.name == 'backspace') {
      // Esta parte simula para el usuario la experienca de estar "borrando" dentro de la interfase (ver más abajo)
      console.clear()
      let borraUnCaracter = mensaje.slice(0, -1);
      mensaje = borraUnCaracter;
      console.log("\n\n\n\t"+mensaje);
    } else {
    // Limpia pantalla, suma al string e imprime. La idea es producir la sensación de una especie de interfase en vivo como la de una pantalla de celular.
    
    reg.test(ch) ? (
      console.clear(),
      traducido = traduce(ch),
      mensaje += traducido,
      console.log("\n\n\n\t"+mensaje),
      fusa? (null) : (
        fusa = true,
        setTimeout(() => {fusaOut()}, 1500)
        )
      )
      :
      (null)
    }
    return mensaje; //para qué voy a usar el return?
  });
}

const fusaOut = () => {
  /* extUna y timer controlan tanto este timer como el interno cuando ya está corriendo una tecla
  ver más abajo en const traduce = (aTraducir) */
  if (extUna > timer) {
    setTimeout(() => {fusaOut()}, 1500)
  } else {
    fusa = false;
  }
}

const traduce = (aTraducir) => {
  let traducido = "";

  /*anteriortecla y atraducir: para verififcar si está repitiendo tecla chequeo contra el valor input y no contra el traducido
  sino, siempre tendría un delay de 1 proceso.
  fusa: no inicia este proceso si corrió suficiente tiempo*/

  if (fusa && anteriorTecla === aTraducir) {

    enUna ? (
      //console.log("seguís en una"), debugger
      extUna = timer+1
      //console.log(timer+" "+extUna) debugger
      //setTimeout(() => {salirDeUna()}, 2000) debugger
    ) : (
      //console.log("estás en una"), debugger
      enUna = true,
      extUna = timer,
      setTimeout(() => {salirDeUna()}, 1000)
    )

    const salirDeUna = () => {
      if (extUna > timer) {
        extUna = timer;
        //console.log(timer+" "+extUna) debugger
        setTimeout(() => {salirDeUna()}, 1000)
      } else {
        enUna = false;
      }
    }

    cantidadVecesTecla === a[aTraducir].length -1 ? (
      cantidadVecesTecla = 0
    ) : (
      cantidadVecesTecla ++
    );
  } else {
    //console.log("ya no estás en una"); debugger
    cantidadVecesTecla = 0;
  }

  traducido = a[aTraducir].charAt(cantidadVecesTecla);
  anteriorTecla = aTraducir; 
  
  return traducido
}

/* function salirDeUna() {
  if (extUna > timer){
    console.log("no saliendo??")
    extUna = timer;
    setTimeout(salirDeUna, 1500)
    } else {
    console.log("saliendo?");
    enUna = false;
    }   
} */
 
async function inputTimer(tiempo) {
  await setTimeout(() => {
    console.log(revisaRepeticiones());
    }, tiempo)}

function revisaRepeticiones() {
    if (cantidadVecesTecla === 1) {
      return 1; // el usuario no ingresó más teclas
    } else if (cantidadVecesTecla === 2) {
      return 2; //si esto vuelve en el primer input, es break. pero si vuelve en el segundo, no es nada.
    }
      else if (cantidadVecesTecla === 3) {
        return 3; //si esto vuelve en el segundo input, es break. ¿en el tercero? tambien ¿no?
    } else {
      console.log("el revisar de repeticiones está devolviendo algo que no corresponde, revisar")
    }
  }


//inputTimer(1500); <- para el primer y segundo caso
//inputTimer(500); <- para tercer caso


tomaInput();








/*function tomaInput() {
  var tecla = prompt('Ingrese mensaje, presione la tecla /"enter/" para terminar: ');        
 

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