const persona={
    nombre: 'Diego',
    Apellido: 'Lopez',
    id: 12,
    nombreCompleto: function(){
        return `${this.nombre} ${this.Apellido}`
    }

}
console.log(persona.nombreCompleto());


const miArray=[1,2,3,'hola',28,{a:1}]
console.log(miArray);
console.log(typeof miArray);
