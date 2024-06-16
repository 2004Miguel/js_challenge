// 7. Validador de Dirección de Correo Electrónico
// En este desafío, crearás un programa que valide una dirección de correo electrónico. Aquí están los
// requerimientos:
// -
// -
// -
// Crear una variable para almacenar la dirección de correo electrónico. Esta será la dirección
// de correo electrónico que tu programa comprobará.
// Comprobar si la dirección de correo electrónico es válida. Para ser válida, una dirección de
// correo electrónico debe tener exactamente un símbolo de arroba (@), al menos un punto
// después del símbolo de arroba, y al menos un carácter antes del símbolo de arroba y
// después del punto. Este es un chequeo básico y no cubre todas las posibilidades de formatos
// de correo electrónico válidos, pero servirá para este desafío.
// Imprime un mensaje indicando si la dirección de correo electrónico es válida o no.

let correo = "alguien@algo.com";
let arroba = 0;
let punto = 0;
let caracter = 0;
let acorreo = correo.split("");
console.log(typeof(acorreo[0]));

acorreo.forEach((el, index) =>{
    if(el=="@"){
        arroba += 1;
    }
    if(typeof(el)=="string"){
        caracter += 1;
    }
    if(el == "."){
        punto += 1;
    }
})

