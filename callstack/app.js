const obtenerNombre=()=>'Diego'

const obtenerApellido=()=>'Lopez'


function obtenerNombreCompleto(){
    const nombre=obtenerNombre
    const apellid=obtenerApellido
    return `${nombre} ${apellid}`
}

const nombreCompleto = obtenerNombreCompleto()
console.log('Nombre Completo',nombreCompleto);

