const fs = require('fs')
const colors = require('colors')

const creandoArchivo = async(base = 5, listar = false, hasta = 10)=>{
    try{       
        
        let salida = '';
        let consola = '';
        for(let i = 1; i<= hasta; i++){
            salida += `${base} x ${i} = ${base * i}\n`
            consola += `${base} ${ 'x'.green } ${i} ${ '='.green } ${base * i}\n`
        }
        
        if(listar){
            console.log("======================")
            console.log("    Tabla del 5".green)
            console.log("======================")
            console.log(consola)
        }
        /* fs.writeFile(`tabla-del-${base}.txt`, salida, (error) =>{
            if(error) throw error;
            console.log("El archivo se ha creado".green)
        }) */

        fs.writeFileSync(`./salida/tabla-del-${base}.txt`, salida);
        return `Tabla-del: ${base}.txt`
       
    }catch(error){
        throw error;
    }
}


module.exports = {
    creandoArchivo
}