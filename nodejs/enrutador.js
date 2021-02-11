    const recursos=require("./recursos")
    const mascotas=require("./ruta/mascota")
    const veterinarias =require("./ruta/veterinarias")
    const duenos =require("./ruta/duenos")
    
    module.exports= {        
    ruta: (data, callback) => {
        callback(200, { mensaje: "Esta es /ruta" })
    },
    mascotas: mascotas(recursos.mascotas),
    veterinarias: veterinarias(recursos.veterinarias),
    duenos: duenos(recursos.duenos),
    noEncontrado: (data, callback) => {
        callback(404, { mensaje: "no encontrado" })
    }
}
