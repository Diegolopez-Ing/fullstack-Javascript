
//Cuando una funcion llama a otra funcion
setTimeout(() => {
    console.log('Me4 ejecute 5 segundos despues');
}, 1000);

const ejecucion= () => {console.log('Me4 ejecute 9 segundos despues')}
setTimeout( ejecucion,1000)


function sumar(num1,num2) {
    return num1+num2
    
}


function restar(num1,num2) {
    return num1-num2
    
}


function multiplicar(num1,num2) {
    return num1*num2
    
}

function multifuncion(num1,num2,callback) {
    const resultado=callback(num1,num2)
    console.log(resultado);
}
multifuncion(4,5,multiplicar)


const miBoton= document.getElementById('miBoton')
const ejecutarBoton=evento=>{console.log(evento);
    alert('Le diste click al Boton')
}

miBoton.addEventListener('click',ejecutarBoton)
console.log(miBoton);

setTimeout(() => {
    console.log('Se ejecuto 1')
    setTimeout(() => {
        console.log('Se ejecuto 2');
        setTimeout(() => {
            console.log('se ejecuto 3');
            setTimeout(() => {
                console.log('se ejecuto 4');
            }, 4000);
        }, 10000);
    }, 2000);
}, 3000);