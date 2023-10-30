for(let i= 0; i <= 10; i++) {
    console.log(`8 x ${i} = ${i*8}`);
}

// Detener el ciclo for usando break 
for(let i=0; i <= 10; i++) {
    if (i >= 5) {
        break;
    } 
    console.log(`7 x ${i} = ${i*7}`)
}

// Iterar la variable nombre, imprimir cada caracter y detenerse cuando se encuentr
// letra S

//const nombre = prompt("Nombre: ").toLowerCase();
const nombre = "Victor";
for(let i=0; i < nombre.length; i++) {
    const letra = nombre.charAt(i);
    if (letra === "s") {
        break;
    } 
    console.log(letra);
}


const colores = ["Rojo", "Cian", "Negro", "Gris Nardo", "Morado", "Amarillo"];

for ( let index = 0; index <  colores.length ; index++ ){
    if( colores[index].toLowerCase() === "amarillo"){
        break;
    }
    console.log("color: " + colores[index] );
}


// Uso de forEach
function imprimirColores(color) {
    console.log("Mi función imprime: " + color);
}

colores.forEach(imprimirColores);
colores.forEach(color => console.log("Mi color en arrow function: " + color));


// Uso del método de ordenamiento SORT
const apellidos = ["Flores", "corpus", "Ferro", "Ortiz", "Villa", "Zepeda", "Alvarez"];
apellidos.sort();
console.log(apellidos);

function compara(a,b) {
    return a-b;
}

function comparaDescendente(a,b) {
    return b - a;
}

const edades = [28, 38, 19, 3, 36, 45];
console.log(edades.sort(compara));
console.log(edades.sort(comparaDescendente));
