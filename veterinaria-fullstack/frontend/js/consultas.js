const listaConsultas = document.getElementById("lista-consultas")
let consultas=[]
const url="http://localhost:5000/consultas"

async function listarConsultas(){
    try {
        const respuesta=await fetch(url)
        const consultaDelServidor= await respuesta.json()
        if (Array.isArray(consultaDelServidor)) {
            consultas=consultaDelServidor
        }
        if (respuesta.ok) {
            const htmlConsultas=consultas.map((consulta, indice)=>
                `< tr >
                <th scope="row">${indice}</th>
                    <td>${consulta.mascota}</td>
                    <td>${consulta.veterinaria}</td>
                    <td>${consulta.fechaCreacion}</td>
                    <td>${consulta.fechaEdicion}</td>
                    
                    <td>
                        <div class="btn-group" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-info" ><i class="bi bi-pencil-square"></i></button>
                            <button type="button" class="btn btn-danger"><i class="bi bi-trash"></i></button>
                        </div>
                    </td>
                </tr>`
            ).join("")
            listaConsultas.innerHTML=htmlConsultas
        }
    } catch (error) {
        throw error
    }
}
listarConsultas()



   