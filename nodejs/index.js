const http = require("http");
const url = require("url");
const StringDecoder = require("string_decoder").StringDecoder
const enrutador=require("./enrutador")
const requestHandler=require("./request-handlerr")

global.recursos={
    mascotas:[
        { tipo: "perro",nombre:"Firulay",dueno:"Diego"},
        { tipo: "perro",nombre:"Firulay",dueno:"Diego"},
        { tipo: "perro",nombre:"Firulay",dueno:"Diego"},
        { tipo: "perro",nombre:"Firulay",dueno:"Diego"},
    ]
}

const server=http.createServer(requestHandler)

server.listen(5000, () => {
    console.log("El servidor esta escuchando peticionnes en la url http://localhost:5000/");
});


