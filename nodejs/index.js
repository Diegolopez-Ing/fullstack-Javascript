const http = require('http');
const url = require('url');
const StringDecoder = require('string_decoder').StringDecoder
let recursos={
    mascotas:[
        { tipo: 'perro',nombre:'Firulay',dueno:'Diego'},
        { tipo: 'perro',nombre:'Firulay',dueno:'Diego'},
        { tipo: 'perro',nombre:'Firulay',dueno:'Diego'},
        { tipo: 'perro',nombre:'Firulay',dueno:'Diego'},
    ]
}


const callbackDelServidor = (req, res) => {

    // 1. obtener url desde el objeto request
    const urlActual = req.url
    const urlParseada = url.parse(urlActual, true)

    //2. Obtener la ruta
    const ruta = urlParseada.pathname

    // 3.Quitar slash
    const rutaLimpia = ruta.replace(/^\/+|\/+$/g, '')

    // 3.1 Método HTTP
    const metodo = req.method.toLowerCase();


    // 3.2 Obtener Variables del query url parseado
    const { query = {} } = urlParseada

    // 3.3 Obtener los headers 
    const { headers={} } = req

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
    console.log({data});
    // 3.6 Elegir el manejadodr de la respuesta
    let handler
    if (rutaLimpia && enrutador[rutaLimpia] && enrutador[rutaLimpia][metodo]) {
        handler=enrutador[rutaLimpia][metodo]
    }else{
        handler=enrutador.noEncontrado
    }

    //4. Ejecutar el handler(manejador)para enviar la respuesta
    if (typeof handler === 'function') {
        handler(data,(statusCode=200,mensaje)=>{
            const respuesta=JSON.stringify(mensaje)
            res.setHeader('Content-Type','application/json')
            res.writeHead(statusCode)

    //4.1 Linea donde realmente estamos respondiendo a la aplicacion Cliente
            res.end(respuesta)
        })
    } 
    })

}

const enrutador = {
    ruta: (data, callback) => {
        callback(200, { mensaje: 'Esta es /ruta' })
    },
    mascotas: {
        get:(data, callback) => {
            callback(200,recursos.mascotas)
        }
    },
    noEncontrado: (data, callback) => {
        callback(404, { mensaje: 'no encontrado' })
    }
}


const server=http.createServer(callbackDelServidor)

server.listen(5000, () => {
    console.log('El servidor esta escuchando peticionnes en la url http://localhost:5000/');
});


