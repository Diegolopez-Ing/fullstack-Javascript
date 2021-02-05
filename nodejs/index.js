const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const urlActual= req.url
    const urlParseada= url.parse(urlActual,true)
    console.log({urlActual,urlParseada});
    //1. Obtendremos la URL desde el objeto req
    //2. Obtener la ruta
    //3. enviar una respuesta dependiendo de la ruta
  res.end('Hola Diego en el server http');
});

server.listen(5000,()=>{
    console.log('...El servidor esta escuchando peticionnes en la url http://localhost:5000/');
});