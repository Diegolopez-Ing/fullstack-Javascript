    module.exports= {
        
    ruta: (data, callback) => {
        callback(200, { mensaje: "Esta es /ruta" })
    },
    mascotas: {
        get:(data, callback) => {
            if (typeof data.indice !== "undefined") {
                if (global.recursos.mascotas[data.indice]) {
                    return callback(200,global.recursos.mascotas[data.indice])
                }
                return callback(404,{mensaje:`Mascota con indice ${data.indice} no encontrado`}) 
            }
            callback(200,global.recursos.mascotas)
        },
        post:(data, callback) => {
            global.recursos.mascotas.push(data.payload)
            callback(201,data.payload)
        }
    },
    noEncontrado: (data, callback) => {
        callback(404, { mensaje: "no encontrado" })
    }
}
