const persona={
    nombre: 'Diego',
    apellido:'Lopez',
    edad: 17,
    id: 4
}

const persona2={
    nombre: 'Alberto',
    apellido:'LopMurilloez',
    edad: 22,
    id: 5
}

if (persona.edad>=18) {
    console.log('Puedes tomar Cerveza');
}
else{
    console.log('No puedes tomar cerrveza');
}


if (persona2.edad<=18) {
    console.log('NO toma cerveza');
    
} else if(persona.nombre=='Diego'){
    console.log('Canta');
}
else{
    console.log('No canta y no toma cerveza');    
}

//Diferencia de los == y ===
console.log(persona2.edad == '22');
console.log(persona2.edad === '22');

