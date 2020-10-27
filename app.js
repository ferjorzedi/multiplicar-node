// requires
const argv = require('./config/yargs').argv
const colors = require('colors/safe');

const { crarArchivo, listarTabla } = require('./multiplicar/miltiplicar');

let comando = argv._[0];

switch (comando) {

    case 'listar':
        console.log('---> listar');
        console.log('---> argv.base' + argv.base);
        listarTabla(argv.base, argv.limite);


        break;

    case 'crear':
        console.log('--> crear');
        console.log('---> argv.base ' + argv.base);
        crarArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado `, colors.green(archivo)))
            .catch(e => console.log(e))
        break;

    default:
        console.log("comando no reconocido");

}