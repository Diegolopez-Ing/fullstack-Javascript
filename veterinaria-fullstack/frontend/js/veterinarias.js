const listaVeterinarias = document.getElementById('lista-veterinarias')
const nombre = document.getElementById('nombre')
const documento = document.getElementById('identificacion')
const indice = document.getElementById('indice')
const apellido = document.getElementById('apellido')
const form = document.getElementById('form')
const btnGuardar = document.getElementById('btn-guardar')
const url = "http://localhost:5000/veterinarias"

let veterinarias = []

async function listarVeterinarias() {
    try {
        const respuesta = await fetch(url)
    const veterinariasDelServer = await respuesta.json()
    if (Array.isArray(veterinariasDelServer)) {
        veterinarias = veterinariasDelServer
    }

    if (veterinarias.length > 0) {
        const htmlVeterinarias = veterinarias.map((veterinaria, index) => `<tr>
                <th scope="row">${index}</th>
                <td>${veterinaria.documento}</td>
                <td>${veterinaria.nombre}</td>
                <td>${veterinaria.apellido}</td>

                <td>
                    <div class="btn-group" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-info editar" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i class="bi bi-pencil-square"></i></button>
                        <button type="button" class="btn btn-danger eliminar"><i class="bi bi-trash"></i></button>
                    </div>
                </td>
            </tr>
            <tr>`).join('')
        listaVeterinarias.innerHTML = htmlVeterinarias
        Array.from(document.getElementsByClassName('editar')).forEach((botonEditar, index) => botonEditar.onclick = editar(index))
        Array.from(document.getElementsByClassName('eliminar')).forEach((botonEliminar, index) => botonEliminar.onclick = eliminar(index))
    return
    }
    listaVeterinarias.innerHTML = `<tr>
        <td colspan="5">No hay Veterinarias</td>
       <tr>`
    } catch (error) {
        $(".alert").show()
         
    }   

}

async function enviarDatos(evt) {
    evt.preventDefault()
    try {
        const datos = {
            identificacion: identificacion.value,
            nombre: nombre.value,
            apellido: apellido.value
        }
        const accion = btnGuardar.innerHTML
        let urlEnvio=url
        let method="POST"
        if (accion==="Editar") {
                urlEnvio+= `/${indice.value}`
                method="PUT"
        }
        const respuesta = await fetch(urlEnvio, {
            method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(datos),
            mode:"cors"
        })
        if (respuesta.ok) {
            listarVeterinarias()
            resetModal()
        }
    } catch (error) {
        $(".alert").show() 
    }
    
    
}

function editar(index) {
    return function cuandoHagoClick() {
        btnGuardar.innerHTML = 'Editar'
        // $('#staticBackdrop').modal('toggle')
        const veterinaria = veterinarias[index]
        nombre.value = veterinaria.nombre
        documento.value = veterinaria.documento
        apellido.value = veterinaria.apellido
        indice.value = index

    }
}

function resetModal() {
    nombre.value = ''
    apellido.value = ''
    identificacion.value = ''
    indice.value = ''
    btnGuardar.innerHTML = 'Crear'
}

function eliminar(index) {
    const urlEnvio=`${url}/${index}`
    return async function clickEliminar() {
        try {
            const respuesta = await fetch(urlEnvio, {
                method: 'DELETE',
                mode:"cors"
            })
            if (respuesta.ok) {
                listarVeterinarias()
            }
        } catch (error) {
            $(".alert").show() 
        }
    }

}

listarVeterinarias()

form.onsubmit = enviarDatos
btnGuardar.onclick = enviarDatos
editar()
