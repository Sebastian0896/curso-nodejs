const perro = {
    nombre: "Dasha",
    raza: "Pitbull",
    edad: 5,
    getPerro(){
        return `Hola, ${this.nombre} ${this.raza}`
    }
}

/* const {nombre, raza, edad = 0} = perro;
console.log(nombre, raza, edad) */

function ImprimePerro( {nombre, raza, edad} ){
   // const {nombre, raza, edad} = perro;
    console.log(nombre, raza, edad)
}

//ImprimePerro(perro)

const perros = ["Dasha", "Scooby", "Scott"];

const [,,n3] = perros; //Las comas indican que apuntan a la posicion del arreglo
console.log(n3)