const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const urlActual= req.url
    const urlParseada= url.parse(urlActual,true)

        //2. Obtener la ruta
    const ruta=urlParseada.pathname

    // 3.Quitar slash
    const rutaLimpia=ruta.replace(/^\/+|\/+$/g,'')

// 3.1 Método HTTP
    const method=req.method.toLowerCase();

    
    // 3.2 Obtener Variables del query url parseado
    // console.log({urlParseada});
    const { query ={} }= urlParseada
    console.log({query});

    // 3.3 Obtener los headers 
    const { headers} =req
    console.log(headers);


    //4. enviar una respuesta dependiendo de la ruta
    switch (rutaLimpia) {
        case ruta:
            res.end('Esta es una ruta conocida')
            break;    
        default:
            res.end('desconocida')
    }
    
});

server.listen(5000,()=>{
    console.log('...El servidor esta escuchando peticionnes en la url http://localhost:5000/');
});

