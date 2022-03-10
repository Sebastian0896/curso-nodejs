const argv = require('yargs')
        .option('b', {
            alias: 'base',
            demandOption: true,
            type: 'number',
            describe: 'Es la base por la que se va a multiplicar'
        })
        .option('l', {
            alias: 'listar',
            type: 'boolean',
            default: false,
            describe: 'Lista el archivo creado'
        })
        .option('h', {
            alias: 'hasta',
            type: 'number',
            default: 10,
            describe: 'Especifica hasta donde llegará la tabla'
        })
        .check((argv, options) =>{
            if( isNaN( argv.b ) ){
                throw 'La base tiene que ser un número'
            }
            return true
        })
        .argv;
module.exports = argv;