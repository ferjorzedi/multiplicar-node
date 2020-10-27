const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');
var colors = require('colors');

let crarArchivo = (base, limite) => {

    return new Promise((resolve, rejects) => {

        if (!Number(base)) {
            rejects(` el valor ${base} no es un numero `)
            return;
        }

        if (!Number(limite)) {
            rejects(` el valor ${limite} no es un numero `)
            return;
        }
        let data = '';

        for (let x = 1; x <= limite; x++) {

            data += `${base} X ${x} = ${base*x} \n`;
        }


        fs.writeFile(`Tablas/table del ${base}.txt`, data, (err) => {
            if (err) { rejects(err); } else {
                resolve(`table del ${base}.txt`);
            }

        });

    });
}


let listarTabla = (base, limite = 10) => {

    if (!Number(base)) {
        rejects(` el valor ${base} no es un numero `)
        return;
    }

    if (!Number(limite)) {
        rejects(` el valor ${limite} no es un numero `)
        return;
    }
    let data = '';

    for (let x = 1; x <= limite; x++) {

        console.log(`${base} X ${x} = ${base*x} \n`.green);
    }


    //  resolve(`${data}`);


}

module.exports = {
    crarArchivo,
    listarTabla
}