const http = require("http");
const requestHandler=require("./request-handler")


const server=http.createServer(requestHandler)

server.listen(5000, () => {
    console.log("El servidor esta escuchando peticionnes en la url https://veterinaria-backend-delta.vercel.app/");
});


