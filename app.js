const tb = require("./practicas/crearTablas.js")
const argv = require("./config/yargs")
require('colors')
console.clear();
tb.creandoArchivo(argv.b, argv.l, argv.h)
.then(res =>{
    console.log(res.rainbow, 'creado')
    //console.log(argv)
})
.catch(err=>{
    console.log(err)
})
    