const listaMascotas=document.getElementById('lista-mascotas')

let mascotas = [
    {
        tipo: 'Gato',
        nombre: 'Manchas',
        dueno: 'Diego'
    },
    {
        tipo: 'Gato',
        nombre: 'Manchas',
        dueno: 'Diego'
    },
    {
        tipo: 'Gato',
        nombre: 'Manchas',
        dueno: 'Diego'
    }
]

function listarMascotas() {
    const htmlMascotas = mascotas.map((mascota, indice) => `<tr>
        <th scope="row">${indice}</th>
        <td>${mascota.tipo}</td>
        <td>${mascota.nombre}</td>
        <td>${mascota.dueno}</td>
        <td>
            <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-info"><i class="bi bi-pencil-square"></i></button>
                <button type="button" class="btn btn-danger"><i class="bi bi-trash"></i></button>
            </div>
        </td>
    </tr>
    <tr>`).join('')
    listaMascotas.innerHTML = htmlMascotas
}
listarMascotas()
