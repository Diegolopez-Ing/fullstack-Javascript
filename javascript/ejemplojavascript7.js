//metodo 1
function miFuncion() {
    console.log('Ejecute mi Funcion');
}
miFuncion()
miFuncion()

//Metodo 2
const miFuncion2 = () =>{
    console.log('Ejecute mi funcion 2');
}
miFuncion2 ()

//Método 3
const miFuncion3 = () =>{
    console.log('Ejecute mi funcion 2');
}
miFuncion3 ()


let bb=()=>{console.log('hola')}
bb()

///THIS
function miFuncion4() {
    return function miFuncion5(){
        return this; 
    }
    
}
miFuncion4()

// Función tradicional
function bbb(a, b){
    return a + b + 100;
  }
  
  // Función flecha
  (a, b) => a + b + 100;
  
  // Función tradicional (sin argumentos)
  var a = 4;
  var b = 2;
  function bbb(){
    return a + b + 100;
  }
console.log(  bbb());  


// Función flecha (sin argumentos)
var a = 4;
var b = 2;
let resultado=() =>a + b + 100
console.log(resultado());


