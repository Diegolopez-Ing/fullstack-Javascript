    const recursos=require("./recursos")
    const mascotas=require("./ruta/mascota")
    module.exports= {        
    ruta: (data, callback) => {
        callback(200, { mensaje: "Esta es /ruta" })
    },
    mascotas: mascotas(recursos.mascotas),
    noEncontrado: (data, callback) => {
        callback(404, { mensaje: "no encontrado" })
    }
}
