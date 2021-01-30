//PROTOTIPOS

function miObjeto(nombre, apellido){
    this.nombre=nombre
    this.apellido=apellido
    this.getNombreCompleto=function(){
        return `${this.nombre} ${this.apelido}`
    }
}

let objeto1= new miObjeto('Diego','Lopez')
console.log(objeto1)

let objetoJSON={nombre:'Diego',apellido:'Lopez', getNombreCompleto(){}}
objetoJSON

miObjeto.prototype.nombre='vacio'
miObjeto.prototype.apellido='vacio'


let objeto2=new miObjeto('Diego','Lopez')
console.log(objeto2.apellido);


