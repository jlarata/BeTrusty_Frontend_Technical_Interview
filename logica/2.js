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
const a =" 0|.,?!1|ABC2Á|DEF3É|GHI4Í|JKL5|MNO6Ó|PQRS7|TUV8Ú|WXYZ9".split("|")
let mensaje = "";
let cantidadVecesTecla = 0;
let extUna = 0;
let timer = 0;
let anteriorTecla = "no";
let enUna = false;
let fusa = false;
let upper = true;

const graficoTeclado = `\n\n\n    Escriba su mensaje, finalice con Enter: \n\n\n    Backspace para borrar, ↑ para mayúsculas\n\n\n     1:  .?! | 2: abc | 3: def\n     ------------------------ \n     4:  ghi | 5: jkl | 6: mno \n     ------------------------ \n     7: pqrs | 8: tuv | 9: wxyz\n     ------------------------\n             0: Espacio`;


//la librería que encontré que permite registrar y reaccionar al presionado de teclas.
var readline = require('readline');
readline.emitKeypressEvents(process.stdin);

/* de la docu: When in raw mode, input is always available character-by-character, not including modifiers.
 Additionally, all special processing of characters by the terminal is disabled, including echoing input
 characters. Ctrl+C will no longer cause a SIGINT when in this mode.*/
process.stdin.setRawMode(true); 

function tomaInput() {
  console.clear();
  console.log(graficoTeclado);
  process.stdin.on('keypress', (ch, key) => {
            
    if (key && key.name == 'return') {
      process.stdin.pause();
    }
    if (key && key.name === 'up') {
      upper = true;
      anteriorTecla = "no";
    }
    if (key && key.name == 'backspace') {
      // Esta parte simula para el usuario la experienca de estar "borrando" dentro de la interfase (ver más abajo)
      console.clear()
      let borraUnCaracter = mensaje.slice(0, -1);
      mensaje = borraUnCaracter;
      console.log(graficoTeclado+"\n\n\n\t"+mensaje);
    } else {
      
    // Limpia pantalla, suma al string e imprime. La idea es producir la sensación de una especie de interfase en vivo como la de una pantalla de celular.
    
    reg.test(ch) ? (
      console.clear(),
      traducido = traduce(ch),

      /*Dentro de las repeticiones de una misma tecla, se "cambia" un caracter por otro
      por eso se revisa si hay repeticiones.*/
      repeticiones = revisaRepeticiones(),
      repeticiones === 1 | repeticiones === 2 | repeticiones === 3 | repeticiones === 4
      ? (borraUnCaracter = mensaje.slice(0, -1),
        mensaje = borraUnCaracter)
        /* si repeticiones es 0, y siempre y cuando no esté en una*/
      : enUna ? (borraUnCaracter = mensaje.slice(0, -1),
        mensaje = borraUnCaracter)
        /* si es cero y no está en una, continua con el siguiente caracter
      "en una" se activa y desactiva en el método traduce */
      : (null),

      upper ? (
        mensaje += traducido
      )
      : (
        mensaje += traducido.toLowerCase()
      ),
      
      console.log(graficoTeclado+"\n\n\n\t"+mensaje),


      fusa? (null) : (
        fusa = true,
        setTimeout(() => {fusaOut()}, 2500)
        )
      )
      :
      (null)
    }
    return mensaje; //por si quisiera mostrar el mensaje después de correr el programa?
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
      extUna = timer+1
    ) : (
      enUna = true,
      extUna = timer,
      setTimeout(() => {salirDeUna()}, 1000)
    )

    const salirDeUna = () => {
      if (extUna > timer) {
        extUna = timer;
        setTimeout(() => {salirDeUna()}, 1000)
      } else {
        
        anteriorTecla == "no" ? 
        (null) : (upper = false),
        enUna = false;
      }
    }

    cantidadVecesTecla === a[aTraducir].length -1 ? (
      cantidadVecesTecla = 0
    ) : (
      cantidadVecesTecla ++
    );
  } else {
    //ya no está en una, porque se desactivó la fusa o porque se cambió de tecla
    enUna = false;
    cantidadVecesTecla = 0;

    anteriorTecla == "no" ? 
    (null) : (upper = false)
  }

  traducido = a[aTraducir].charAt(cantidadVecesTecla);
  anteriorTecla = aTraducir; 

  return traducido
}
 
function revisaRepeticiones() {
    return cantidadVecesTecla
    }
  
const t9Keyboard = value => {
  tomaInput();
  return
}

t9Keyboard();