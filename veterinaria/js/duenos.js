const listaDuenos=document.getElementById('lista-duenos')
const nombre=document.getElementById('nombre')
const identificacion=document.getElementById('identificacion')
const pais=document.getElementById('pais')
const indice=document.getElementById('indice')
const apellido=document.getElementById('apellido')
const form=document.getElementById('form')
const btnGuardar=document.getElementById('btn-guardar')

let duenos = [
    {
        pais: 'Peru',
        nombre: 'Manchas',
        apellido: 'Diego',
        identificacion: '1023'
    },
    {
        pais: 'Colombia',
        nombre: 'Manchas',
        apellido: 'Maria',
        identificacion: '1023'
    },
    {
        pais: 'Venezuela',
        nombre: 'Manchas',
        apellido: 'Diego',
        identificacion: '1023'
    }
]

function listarDuenos() {
    const htmlDuenos = duenos.map((dueno, index) => `<tr>
        <th scope="row">${index}</th>
        <td>${dueno.identificacion}</td>
        <td>${dueno.pais}</td>
        <td>${dueno.apellido}</td>
        <td>${dueno.nombre}</td>

        <td>
            <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-info editar" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i class="bi bi-pencil-square"></i></button>
                <button type="button" class="btn btn-danger eliminar"><i class="bi bi-trash"></i></button>
            </div>
        </td>
    </tr>
    <tr>`).join('')
    listaDuenos.innerHTML = htmlDuenos
    Array.from(document.getElementsByClassName('editar')).forEach((botonEditar,index)=>botonEditar.onclick=editar(index))
    Array.from(document.getElementsByClassName('eliminar')).forEach((botonEliminar,index)=>botonEliminar.onclick=eliminar(index))
}

function enviarDatos(evt) {
    evt.preventDefault()
    const datos={
        pais: pais.value,
        identificacion: identificacion.value,
        nombre: nombre.value,
        apellido: apellido.value        
    }
    const accion=btnGuardar.innerHTML
    switch (accion) {
        case 'Editar':
            duenos[indice.value]=datos
            break;    
        default:
            duenos.push(datos)
            break;
    }       
    listarDuenos()
    resetModal()
}

function editar(index) {
    return function cuandoHagoClick() {
        btnGuardar.innerHTML='Editar'
        // $('#staticBackdrop').modal('toggle')
        const dueno=duenos[index]
        nombre.value=dueno.nombre
        pais.value=dueno.pais
        identificacion.value=dueno.identificacion
        apellido.value=dueno.apellido
        indice.value= index
        
    }
}

function resetModal() {
    nombre.value=''
    pais.value=''
    apellido.value=''
    identificacion.value=''
    indice.value=''
    btnGuardar.innerHTML='Crear'
}

function eliminar(index) {    
    return function clickEliminar() {
        console.log('index',index); 
        duenos=duenos.filter((dueno,indiceDueno)=>indiceDueno !== index)
        listarDuenos()
    }
    
}

listarDuenos()

form.onsubmit = enviarDatos
btnGuardar.onclick= enviarDatos
editar()
