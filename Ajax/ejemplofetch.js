
const listaUsuarios = document.getElementById('listaUsuarios')
const boton = document.getElementById('boton')
let usuarios=[]



function render() {
    const usuariosRender = usuarios
        .map(singleUser => `<li>${singleUser.nombre}</li>`)
        .join('')
    console.log(usuariosRender);
    listaUsuarios.innerHTML = usuariosRender
}

function enviarDatos() {
    const data = { nombre: 'Lunes 11' }
    fetch('https://bootcamp-dia-3.camilomontoyau.now.sh/usuarios', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then((response)=>response.json())
    .then(respuestaJSON =>{
        console.log('respuestaJSON',respuestaJSON)
        refrescar();
    })
}
function refrescar() {
    fetch('https://bootcamp-dia-3.camilomontoyau.now.sh/usuarios')
    .then(response=>response.json())
    .then(respuestaUsuarios =>{
        console.log('respuestaUsuarios',respuestaUsuarios);
        usuarios=respuestaUsuarios
        render()
})
}
boton.onclick = enviarDatos