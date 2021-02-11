const listaMascotas=document.getElementById('lista-mascotas')
const nombre=document.getElementById('nombre')
const tipo=document.getElementById('tipo')
const indice=document.getElementById('indice')
const dueno=document.getElementById('dueno')
const form=document.getElementById('form')
const btnGuardar=document.getElementById('btn-guardar')

let mascotas = [
    {
        tipo: 'Gato',
        nombre: 'Manchas',
        dueno: 'Diego'
    },
    {
        tipo: 'Gato',
        nombre: 'Manchas',
        dueno: 'Maria'
    },
    {
        tipo: 'Gato',
        nombre: 'Manchas',
        dueno: 'Diego'
    }
]

function listarMascotas() {
    const htmlMascotas = mascotas.map((mascota, index) => `<tr>
        <th scope="row">${index}</th>
        <td>${mascota.tipo}</td>
        <td>${mascota.nombre}</td>
        <td>${mascota.dueno}</td>
        <td>
            <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-info editar" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i class="bi bi-pencil-square"></i></button>
                <button type="button" class="btn btn-danger eliminar"><i class="bi bi-trash"></i></button>
            </div>
        </td>
    </tr>
    <tr>`).join('')
    listaMascotas.innerHTML = htmlMascotas
    Array.from(document.getElementsByClassName('editar')).forEach((botonEditar,index)=>botonEditar.onclick=editar(index))
    Array.from(document.getElementsByClassName('eliminar')).forEach((botonEliminar,index)=>botonEliminar.onclick=eliminar(index))
}

function enviarDatos(evt) {
    evt.preventDefault()
    const datos={
        tipo: tipo.value,
        nombre: nombre.value,
        dueno: dueno.value        
    }
    const accion=btnGuardar.innerHTML
    switch (accion) {
        case 'Editar':
            mascotas[indice.value]=datos
            break;    
        default:
            mascotas.push(datos)
            break;
    }       
    listarMascotas()
    resetModal()
}

function editar(index) {
    return function cuandoHagoClick() {
        btnGuardar.innerHTML='Editar'
        // $('#staticBackdrop').modal('toggle')
        const mascota=mascotas[index]
        nombre.value=mascota.nombre
        tipo.value=mascota.tipo
        dueno.value=mascota.dueno
        indice.value= index
        
    }
}

function resetModal() {
    nombre.value=''
    tipo.value=''
    dueno.value=''
    indice.value=''
    btnGuardar.innerHTML='Crear'
}

function eliminar(index) {    
    return function clickEliminar() {
        console.log('index',index); 
        mascotas=mascotas.filter((mascota,indiceMascota)=>indiceMascota !== index)
        listarMascotas()
    }
    
}

listarMascotas()

form.onsubmit = enviarDatos
btnGuardar.onclick= enviarDatos
editar()
