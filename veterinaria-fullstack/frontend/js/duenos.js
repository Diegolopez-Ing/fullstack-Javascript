const nombre=document.getElementById('nombre')
const documento=document.getElementById('identificacion')
const indice=document.getElementById('indice')
const apellido=document.getElementById('apellido')
const form=document.getElementById('form')
const btnGuardar=document.getElementById('btn-guardar')
const listaDuenos=document.getElementById('lista-duenos')
const url="http://localhost:5000/veterinarias"


let duenos = []

async function listarDuenos() {
    try {
        const respuesta = await fetch(url)
    const duenosDelServer = await respuesta.json()
    if (Array.isArray(duenosDelServer)) {
        duenos = duenosDelServer
    }
    if (duenos.length>0) {
        const htmlDuenos = duenos.map((dueno, index) => `<tr>
        <th scope="row">${index}</th>
        <td>${dueno.documento}</td>
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
    return
    }
    listaDuenos.innerHTML = `<tr>
        <td colspan="5">No hay Duen@s</td>
       <tr>`
    } catch (error) {
        $(".alert").show()
    }

    }

async function enviarDatos(evt) {
    evt.preventDefault()
    try {
        const datos={
            documento: documento.value,
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
    } catch (error) {
        $(".alert").show()
    }
    
}

function editar(index) {
    return function cuandoHagoClick() {
        btnGuardar.innerHTML='Editar'
        // $('#staticBackdrop').modal('toggle')
        const dueno=duenos[index]
        nombre.value=dueno.nombre
        documento.value=dueno.documento
        apellido.value=dueno.apellido
        indice.value= index
        
    }
}

function resetModal() {
    nombre.value=''
    apellido.value=''
    documento.value=''
    indice.value=''
    btnGuardar.innerHTML='Crear'
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
                listarDuenos()
            }
        } catch (error) {
            $(".alert").show() 
        }
        
    }
    
}

listarDuenos()

form.onsubmit = enviarDatos
btnGuardar.onclick= enviarDatos
editar()
