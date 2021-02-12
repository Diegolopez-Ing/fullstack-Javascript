module.exports={
    mascotas:[
        { tipo: "Gato",nombre:"Firulay",dueno:"Diego"},
        { tipo: "Pájaro",nombre:"Toby",dueno:"Maria"},
        { tipo: "Perro",nombre:"Moncho",dueno:"Sandra"},
    ],
    veterinarias:[
        { nombre: "Andrea",apellido:"Padierna",documento:"1234244"},
        { nombre: "Alexander",apellido:"Rovira",documento:"76879"},
        { nombre: "Susana",apellido:"Rua",documento:"998999"},
        { nombre: "Reinaldo",apellido:"Rueda",documento:"2021"},
       
    ],
    duenos:[
        { nombre: "Sergio",apellido:"LOpez",documento:"1234244"},
        { nombre: "Juliana",apellido:"Farid",documento:"76879"},
        { nombre: "Sara",apellido:"Usuga",documento:"998999"},
        { nombre: "Edgar",apellido:"Palacios",documento:"2021"},
       
    ],
    consultas:[
        { 
            mascota: 0,
            veterinaria:0,
            fechaCreacion: new Date(),
            fechaEdicion: new Date(),
            historia:"",
            diagnostico:""
        },

       
    ]


}
