//DESTRUCTURING
let miObjeto={
    a:1,
    b:2,
    c:'hola',
    d: function () {console.log('Soy la funcion')},
    e:true

}

miObjeto
console.log(miObjeto.e);

let {a,b,c,e}=miObjeto
a
b
c
//d
e

//Para los arreglos importa el orden en que se encuentran
let miArray= [1,2,'hola',()=>console.log('Soy otra funcino'),true]

console.log(miArray);
let [numero1,numero2,hola,funcion,booleano]= miArray
numero1
numero2
hola
funcion
booleano


//Para las funciones

let {d,...otros}=miObjeto
d
otros

let[numero11,...resto]=miArray
numero11
resto

//Spread Operator

let [uno,dos,...restante]= miArray

uno
dos
restante




