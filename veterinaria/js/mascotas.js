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
                <button type="button" class="btn btn-info editar" data-indice=${index}><i class="bi bi-pencil-square"></i></button>
                <button type="button" class="btn btn-danger"><i class="bi bi-trash"></i></button>
            </div>
        </td>
    </tr>
    <tr>`).join('')
    listaMascotas.innerHTML = htmlMascotas
    Array.from(document.getElementsByClassName('editar')).forEach((botonEditar)=>botonEditar.onclick=editar)
}

function enviarDatos(evt) {
    console.log('evento',evt);
    const datos={
        tipo: tipo.value,
        nombre: nombre.value,
        dueno: dueno.value        
    }
    mascotas.push(datos)
    listarMascotas()
}
function editar(evt) {
    console.log('editar',evt);
}

listarMascotas()

form.onsubmit = enviarDatos
btnGuardar.onclick= enviarDatos

editar()
