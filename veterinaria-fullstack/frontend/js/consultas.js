const listaConsultas = document.getElementById("lista-consultas")
const mascota=document.getElementById("mascota")
const veterinaria=document.getElementById("veterinaria")
const diagnostico=document.getElementById("diagnostico")
const historia=document.getElementById("historia")
const indice=document.getElementById('idice')
const btnGuardar=document.getElementById('btn-guardar')



let consultas=[]
let mascotas=[]
let veterinarias=[]
const url="http://localhost:5000"

async function listarConsultas(){
    const entidad="consultas"
    try {
        const respuesta=await fetch(`${url}/${entidad}`)
        const consultaDelServidor= await respuesta.json()
        if (Array.isArray(consultaDelServidor)) {
            consultas=consultaDelServidor
        }
        if (respuesta.ok) {
            const htmlConsultas=consultas.map((consulta, indice)=>
                `< tr >
                <th scope="row">${indice}</th>
                    <td>${consulta.mascota.nombre}</td>
                    <td>${consulta.veterinaria.nombre}${consulta.veterinaria.apellido}</td>
                    <td>${consulta.diagnostico}</td>
                    <td>${consulta.fechaCreacion}</td>
                    <td>${consulta.fechaEdicion}</td>
                    
                    <td>
                        <div class="btn-group" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-info" ><i class="bi bi-pencil-square"></i></button>
                            <button type="button" class="editar" class="btn btn-danger"><i class="bi bi-trash"></i></button>
                        </div>
                    </td>
                </tr>`
            ).join("")
            listaConsultas.innerHTML=htmlConsultas
            Array.from(document.getElementsByClassName('editar')).forEach((botonEditar,index)=>botonEditar.onclick=editar(index))

        }
    } catch (error) {
        throw error
    }
}
listarConsultas()

async function listarMascotas(){
    const entidad="mascotas"
    try {
        const respuesta=await fetch(`${url}/${entidad}`)
        const mascotasDelServidor= await respuesta.json()
        if (Array.isArray(mascotasDelServidor)) {
            mascotas=mascotasDelServidor
        }
        if (respuesta.ok) {
            const htmlMascotas=mascotas.forEach((_mascota, indice)=>{
                const optionActual =document.createElement("option")
                optionActual.innerHTML=_mascota.nombre
                optionActual.value=indice
                mascota.appendChild(optionActual)
            })
        }
    } catch (error) {
        throw error
    }
}
listarMascotas()

async function listarVeterinarias(){
    const entidad="veterinarias"
    try {
        const respuesta=await fetch(`${url}/${entidad}`)
        const veterinariasDelServidor= await respuesta.json()
        if (Array.isArray(veterinariasDelServidor)) {
            veterinarias=veterinariasDelServidor
        }
        if (respuesta.ok) {
            const htmlVeterinarias=veterinarias.forEach((_veterinaria, indice)=>{
                const optionActual =document.createElement("option")
                optionActual.innerHTML=`${_veterinaria.nombre} ${_veterinaria.apellido}`
                optionActual.value=indice
                veterinaria.appendChild(optionActual)
            })
        }
    } catch (error) {
        throw error
    }
}

function editar(index) {
    return function cuandoHagoClick() {
        btnGuardar.innerHTML='Editar'
        const consulta=consultas[index]
        mascota.value=consulta.mascota.id
        veterinaria.value=consulta.veterinaria.id
        historia.value=consulta.historia
        diagnostico.value= consulta.diagnostico
    }
}

async function enviarDatos(evt) {
    entidad="consultas"
    evt.preventDefault()
    try {
        const datos={
            mascota:mascota.value,
            veterinaria:veterinaria.value,
            diagnostico:diagnostico.value,
            historia:historia.value,
        }
        const accion=btnGuardar.innerHTML
        let urlEnvio=`${url}/${entidad}`
        let mehod="POST"
        if (accion==="Editar") {
           duenos[indice.value]=datos
           urlEnvio += `/${indice.value}`
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
        listarConsultas()
        }
    } catch (error) {
        throw error
    }    
}

btnGuardar.onclick=enviarDatos

listarConsultas()
listarVeterinarias()
listarConsultas()


   