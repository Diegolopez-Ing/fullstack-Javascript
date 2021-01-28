function sumar(num1, num2){
    console.log(arguments);
    return num1+num2
}

const r=sumar(3,4)
console.log(sumar(5,-3));
console.log(r);
console.log(sumar(r,5));

/*DESTRUCTURACION*/

function restar({num3, num4}){
    console.log(arguments);
    return num3-num4
}

const b=restar({num3:3,num4:4})
console.log(b);



function multiplicar(numeros){
    console.log(arguments);
    return numeros.num3*numeros.num4
}

const f=multiplicar({num3:3,
    num4:4})
console.log(f);


