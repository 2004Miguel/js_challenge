// En este desafío, crearás un programa que implemente el cifrado César, una técnica simple de cifrado
// de sustitución en la que cada letra en el texto original es reemplazada por una letra cierto número
// de posiciones más adelante en el alfabeto. Aquí están los requerimientos:
// -
// -
// -
// -
// Crear una variable para almacenar el mensaje a cifrar.
// Crear una variable para almacenar el desplazamiento. Este es el número de posiciones que
// cada letra del mensaje será desplazada en el alfabeto.
// Cifra el mensaje. Para cada letra del mensaje, encuentra la letra que está desplazada en el
// alfabeto y reemplaza la original por ella. Ten en cuenta que debes tratar de manera especial
// los espacios y otros caracteres no alfabéticos.
// Imprime el mensaje cifrado.

let alphabetMin = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 
    'u', 'v', 'w', 'x', 'y', 'z'
];
let alphabetMayus = [];
alphabetMayus = alphabetMin.forEach((el, index)=>{
    let mayus = el.toUpperCase();
    alphabetMayus[index] = mayus;
    return alphabetMayus[index];
});
console.log(alphabetMin);
console.log(alphabetMayus);