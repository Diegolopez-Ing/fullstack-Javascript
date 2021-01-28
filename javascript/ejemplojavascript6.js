let miArray=[]

for (let i = 0; i < 10; i++) {
    console.log(miArray.push(i));    
    //console.log(miArray);
}

let miArray2=[]
let control=0

while (control<100) {
    miArray2.push(control)
    if (control%5==0) {
        control+=2        
    }
    else{
        control+=1
    }
}
console.log(miArray2);
console.log(miArray2.length);

//FOREACH
let miArray3=['hola','buen dia','adios']
function convertiMayusculas(texto){
    console.log(texto.toUpperCase()); 
}
miArray3.forEach(convertiMayusculas);


//MAP
let miArray4=[1,4,9,16]
const mapmiArray4=miArray4.map(x=>x*2)
console.log(mapmiArray4);


//Filter

let miArray5=[1,2,3,4,5,6,7,8,9]

function soloPares(numeroActual){
    return numeroActual%2===0
}

const filtroArray5=miArray5.filter(soloPares)
console.log(filtroArray5);

//Con Arrowfunction

let miArray6=[1,2,3,4,5,6,7,8,9]

let filtroArray6=miArray6.filter((solopares)=>solopares %2 === 0)
console.log(filtroArray6);

