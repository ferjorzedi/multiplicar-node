const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: '10'
    }
}

const argv = require('yargs')
    .command('listar', 'imprime en consalo la tabla de multiplicar', opts)
    .command('crear', 'Crea el archivo de la tabla de multiplicar', opts)
    .help()
    .argv;

module.exports = {
    argv
}