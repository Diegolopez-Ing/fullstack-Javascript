    module.exports= {
    ruta: (data, callback) => {
        callback(200, { mensaje: "Esta es /ruta" })
    },
    mascotas: {
        get:(data, callback) => {
            if (typeof data.indice !== "undefined") {
                if (recursos.mascotas[data.indice]) {
                    return callback(200,recursos.mascotas[data.indice])
                }
                return callback(404,{mensaje:`Mascota con indice ${data.indice} no encontrado`}) 
            }
            callback(200,recursos.mascotas)
        },
        post:(data, callback) => {
            recursos.mascotas.push(data.payload)
            callback(201,data.payload)
        }
    },
    noEncontrado: (data, callback) => {
        callback(404, { mensaje: "no encontrado" })
    }
}
