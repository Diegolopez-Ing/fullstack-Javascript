const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const urlActual= req.url
    const urlParseada= url.parse(urlActual,true)
        //2. Obtener la ruta
    const ruta=urlParseada.pathname

    // 3.Quitar slash
    const rutaLimpia=ruta.replace(/^\/+|\/+$/9, '')

    //4. enviar una respuesta dependiendo de la ruta
    if (ruta=== 'ruta') {
        res.end('Hola Diego en el server http');
    }
    else{
        res.end('Estas en una ruta que no conozco');

    }
});

server.listen(5000,()=>{
    console.log('...El servidor esta escuchando peticionnes en la url http://localhost:5000/');
});

