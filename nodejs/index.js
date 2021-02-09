const http = require('http');
const url = require('url');
const StringDecoder = require('string_decoder').StringDecoder


const server = http.createServer((req, res) => {
    const urlActual = req.url
    const urlParseada = url.parse(urlActual, true)

    //2. Obtener la ruta
    const ruta = urlParseada.pathname

    // 3.Quitar slash
    const rutaLimpia = ruta.replace(/^\/+|\/+$/g, '')

    // 3.1 Método HTTP
    const method = req.method.toLowerCase();


    // 3.2 Obtener Variables del query url parseado
    // console.log({urlParseada});
    const { query = {} } = urlParseada
    console.log({ query });

    // 3.3 Obtener los headers 
    const { headers } = req
    console.log(headers);

    // 3.4 Obtener payload en el caso de haberlo
    const decoder = new StringDecoder('utf-8')
    let buffer = ''

    //3.4.1 Ir acumulando la data cuando request reciba un oayload
    req.on('data', (data) => {
        buffer += decoder.write(data)
    })

    //3.4.2 Dejar de acumular Datos y decirle al decoder que finalice
    req.on('end', () => {
        buffer += decoder.end()

    // 3.5 Ordenar la data de request
    const data = {
        ruta: rutaLimpia,
        query,
        metodo,
        headers,
        payload: buffer
    }
    // 3.6 Elegir el manejadodr de la respuesta

    //4. enviar una respuesta dependiendo de la ruta
    switch (rutaLimpia) {
        case ruta:
            res.end('Esta es una ruta conocida')
            break;

        default:
            res.end('desconocida')
    }

    })

});

const enrutador = {
    ruta: (data, callback) => {
        callback(200, { mensaje: 'Esta es /ruta' })
    },
    noEncontrado: (data, callback) => {
        callback(404, { mensaje: 'no encontrado' })
    }
}




server.listen(5000, () => {
    console.log('...El servidor esta escuchando peticionnes en la url http://localhost:5000/');
});

