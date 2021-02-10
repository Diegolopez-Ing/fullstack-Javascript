const http = require("http");
const requestHandler=require("./request-handler")

global.recursos={
    mascotas:[
        { tipo: "Gato",nombre:"Firulay",dueno:"Diego"},
        { tipo: "perro",nombre:"Toby",dueno:"Andres"},
        { tipo: "Loro",nombre:"Lazzy",dueno:"Mario"},
        { tipo: "perro",nombre:"Moncho",dueno:"Juliana"},
    ]
}

const server=http.createServer(requestHandler)

server.listen(5000, () => {
    console.log("El servidor esta escuchando peticionnes en la url http://localhost:5000/");
});


