//Sin callback

/* const getUserById = (id) =>{
    const usuario = {
        id,
        nombre: "Sebastian"
    }

    setTimeout( ()=>{
        console.log(usuario)
    }, 1500)
}

getUserById(6) */

//Con callback
/* const getUserById = (id, callback) =>{
    const usuario = {
        id,
        nombre: "Sebastian"
    }

    setTimeout( ()=>{
        callback(usuario)
    }, 1500)
}

getUserById(5, (usuario) =>{
    console.log(usuario.id)
    console.log(usuario.nombre.toUpperCase())
}) */


const Perros = [
    {
        id: 1,
        nombre: "Scott",
        raza: "Pitbull"
    },
    {
        id: 2,
        nombre: "Scooby",
        raza: "Pastor Aleman"
    },
    {
        id: 3,
        nombre: "Druppy",
        raza: "Salchicha"
    }
]

