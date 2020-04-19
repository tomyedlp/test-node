// requireds
const { crearArchivo } = require('./multiplicar/multiplicar');

//let base = "3";

// console.log(module); PARA VER LO QUE HAY EN EL MODULO NODE
// console.log(process) //ver los procesos del sistema

let argv = process.argv;
let parametro = argv[2];
let base = parametro.split("=")[1];

console.log(base);


crearArchivo(base)
    .then(archivo => {
        console.log(`Archivo creado: ${archivo}`);
    }).catch(err => {
        console.log(err);
    })