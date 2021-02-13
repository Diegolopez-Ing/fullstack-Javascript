const url = require("url");
const StringDecoder = require("string_decoder").StringDecoder
const enrutador=require("./enrutador")

module.exports = (req, res) => {

    // 1. obtener url desde el objeto request
    const urlActual = req.url
    const urlParseada = url.parse(urlActual, true)

    //2. Obtener la ruta
    const ruta = urlParseada.pathname

    // 3.Quitar slash
    const rutaLimpia = ruta.replace(/^\/+|\/+$/g, "")

    // 3.1 Método HTTP
    const metodo = req.method.toLowerCase();
// 3.1.1 Dar perrmisos de CORSS
    res.setHeader("Access-Control-Allow-Origin","*")
    res.setHeader("Access-Control-Allow-Headers","*")
    res.setHeader("Access-Control-Allow-Methods","OPTIONS,GET,PUT,DELETE,POST")

    // 3.1.2 Dar permiso de COORS escribieddo lo header

    if (metodo === 'options') {
        res.writeHead(204)
        res.end()
        return
    }

    // 3.2 Obtener Variables del query url parseado
    const { query = {} } = urlParseada

    // 3.3 Obtener los headers 
    const { headers={} } = req

    // 3.4 Obtener payload en el caso de haberlo
    const decoder = new StringDecoder("utf-8")
    let buffer = ""

    //3.4.1 Ir acumulando la data cuando request reciba un oayload
    req.on("data", (data) => {
        buffer += decoder.write(data)
    })

    //3.4.2 Dejar de acumular Datos y decirle al decoder que finalice
    req.on("end", () => {
        buffer += decoder.end()
        if (headers["content-type"]==="application/json") {
            buffer=JSON.parse(buffer)
        }
        // 3.4.3 Revisar si tiene subrutas, para este caso es el indice del array
        // let indice= null

        if (rutaLimpia.indexOf("/")> -1) {
            var [rutaPrincipal,indice]=rutaLimpia.split("/")
        }
    // 3.5 Ordenar la data de request
    const data = {
        indice,
        ruta: rutaPrincipal || rutaLimpia,
        query,
        metodo, 
        headers,
        payload: buffer
    }
   
    console.log({data});
    // 3.6 Elegir el manejadodr de la respuesta
    let handler
    if (data.ruta && enrutador[data.ruta] && enrutador[data.ruta][metodo]) {
        handler=enrutador[data.ruta][metodo]
    }else{
        handler=enrutador.noEncontrado
    }

    //4. Ejecutar el handler(manejador)para enviar la respuesta
    if (typeof handler === "function") {
        handler(data,(statusCode=200,mensaje)=>{
            const respuesta=JSON.stringify(mensaje)
            res.setHeader("Content-Type","application/json")
            res.writeHead(statusCode)

    //4.1 Linea donde realmente estamos respondiendo a la aplicacion Cliente
            res.end(respuesta)
        })
    } 
    })

}