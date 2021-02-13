const mascota = require("../../backend/ruta/mascota")

const nombre = document.getElementById('nombre')
const tipo = document.getElementById('tipo')
const indice = document.getElementById('indice')
const dueno = document.getElementById('dueno')
const form = document.getElementById('form')
const btnGuardar = document.getElementById('btn-guardar')
const listaMascotas = document.getElementById('lista-mascotas')
const url = "http://localhost:5000/mascotas"

let mascotas = []

async function listarMascotas() {
    try {
        const respuesta = await fetch(url)
        const mascotasDelServer = await respuesta.json()
        if (Array.isArray(mascotasDelServer)) {
            mascotas = mascotasDelServer
        }
        if (mascotas.length > 0) {
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
            Array.from(document.getElementsByClassName('editar')).forEach((botonEditar, index) => botonEditar.onclick = editar(index))
            Array.from(document.getElementsByClassName('eliminar')).forEach((botonEliminar, index) => botonEliminar.onclick = eliminar(index))
            return
        }
        listaMascotas.innerHTML = `<tr>
        <td colspan="5">No hay Mascotas</td>
       <tr>`

    } catch (error) {
       $(".alert").show()
    }
}

async function enviarDatos(evt) {
    evt.preventDefault()
    try {
        const datos = {
            tipo: tipo.value,
            nombre: nombre.value,
            dueno: dueno.value
        }
        let method = "POST"
        let urlEnvio = url
        const accion = btnGuardar.innerHTML
        if (accion === 'Editar') {

            mascotas[indice.value] = datos
            urlEnvio = `${url}/${indice.value}`
            method = "PUT"

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
            listarMascotas()
            resetModal()
        }
    } catch (error) {
        $(".alert").show()    }

}

function editar(index) {
    return function cuandoHagoClick() {
        btnGuardar.innerHTML = 'Editar'
        // $('#staticBackdrop').modal('toggle')
        const mascota = mascotas[index]
        nombre.value = mascota.nombre
        tipo.value = mascota.tipo
        dueno.value = mascota.dueno
        indice.value = index
    }
}

function resetModal() {
    nombre.value = ''
    tipo.value = ''
    dueno.value = ''
    indice.value = ''
    btnGuardar.innerHTML = 'Crear'
}

function eliminar(index) {
    const urlEnvio = `${url}/${index}`
    return async function clickEliminar() {
        try {
            const respuesta = await fetch(urlEnvio, {
                method: 'DELETE',

            })
            if (respuesta.ok) {
                listarMascotas()
                resetModal()
            }
        } catch (error) {
            $(".alert").show()        }

    }

}

listarMascotas()

form.onsubmit = enviarDatos
btnGuardar.onclick = enviarDatos
editar()
