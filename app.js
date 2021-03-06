// requireds
const argv = require("./config/yargs").argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0]; //EL PRIMER COMANDO INTRODUCIDO TIENE COMO NOMBRE _ (UN GUION BAJO)

switch(comando) { //DEPENDE DEL COMANDO SE EJECUTA LO QUE DEBE
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => {
                console.log(`Archivo creado: ${archivo}`);
            }).catch(err => {
                console.log(err);
            })
        break;
    default:
        console.log("Comando no reconocido. ");
}


