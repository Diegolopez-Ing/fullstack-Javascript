
const listaUsuarios = document.getElementById('listaUsuarios')
const boton = document.getElementById('boton')



function reqListener () {
   const usuarios =JSON.parse(this.responseText);
   console.log(usuarios);
   const usuariosRender = usuarios
   .map(singleUser=>`<li>${singleUser.nombre}</li>`)
   .join('')
   console.log(usuariosRender);
   listaUsuarios.innerHTML=usuariosRender
  }


  
  var peticion = new XMLHttpRequest();
  peticion.addEventListener("load", reqListener);
  peticion.open("GET", "https://bootcamp-dia-3.camilomontoyau.now.sh/usuarios");
  peticion.send();


  function enviarDatos() {
     peticion.open('POST', 'https://bootcamp-dia-3.camilomontoyau.now.sh/usuarios',true)
     peticion.setRequestHeader(
        'Content-type',
        'application/x-www-form-urlencoded'
     )
     peticion.send('nombre=barro 23')
     setTimeout(refrescar,3000)
     }
     function refrescar() {
      peticion.open("GET", "https://bootcamp-dia-3.camilomontoyau.now.sh/usuarios")
      peticion.send
   }

  boton.onclick=enviarDatos


  ///AJAX SIn RECARGAR///

