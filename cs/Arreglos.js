
// En datos primitivos, el paso de datos es por valor.
let velocidadMaxima = 80;
let velocidadActual = velocidadMaxima; // 80
velocidadActual = 20;

console.log( velocidadActual ); // 20
console.log( velocidadMaxima ); // 80

// En los objetos el pase de datos es por referencia
const autos = ["Tsuru", "Vochito", "Atos"];
const cochera = autos; // ["Tsuru", "Vochito", "Atos"]
console.log( autos );
console.log( cochera );

cochera[3] = "Mazda";
console.log( autos ); // ["Tsuru", "Vochito", "Atos"]
console.log( cochera ); // ["Tsuru", "Vochito", "Atos", "Mazda"]


function agregarAuto ( autosArr, nuevoAuto ) {
  autosArr.push( nuevoAuto )   // Agregar un elemnto al final del arreglo
  return autosArr;
}

// Funciones que debemos evitar realizar
// esto es considerado uian función impura.
function agregarAuto2 ( nuevoAuto ) {
  cochera.push( nuevoAuto )   // Agregar un elemnto al final del arreglo  
}

const autosExibicion =  agregarAuto( cochera, "BMW" );
agregarAuto2("Pointiac");

console.log( autosExibicion ); //  ["Tsuru", "Vochito", "Atos", "Mazda", "BMW"]
console.log( autos ); //  ["Tsuru", "Vochito", "Atos", "Mazda", "BMW"]
console.log( cochera ); //  ["Tsuru", "Vochito", "Atos", "Mazda", "BMW"]

console.log( agregarAuto( ["Toreto", "Bob Esponja"] , "Nube voladora"  ) );


// -------------------------------------------------------
// Verificar que un objeto es un arreglo.

console.log( typeof 23  ); // number
console.log( typeof "hola" ); // string
console.log( typeof true ); // boolean
console.log( typeof "false" ); // string
console.log( typeof varibleSinDeclarar ); // undefined
console.log( typeof 45n ); // bigint
console.log( typeof { clave: "valor", name: "Sergio" } ); //  object
console.log( typeof autos ); // object
console.log("Es arreglo? " +  Array.isArray( "Hola" ) ); // false
console.log("Es arreglo? " +  Array.isArray( autos ) ); // true

console.log( typeof null ); // object
console.log( null === null ); // true

// Obtener la longitud del arreglo
const personas = [ "Kim", "Misael", "Itzel" ];
console.log("N. personas: " + personas.length );

// Búsqueda de elemento en el arreglo
console.log("Índice de Misael: " +  personas.indexOf("Misael") ); // 1
console.log("Índice de Itzel: " +  personas.indexOf("Itzel") ); // 2
console.log("Índice de Pavel: " +  personas.indexOf("Pavel") ); // -1

// Agregar un elemento al final del arreglo
// personas[3] = "Carlos";
// personas[ personas.length ] = "Carlos";
personas.push("Carlos");
personas.push("Kim", "Tony");
console.log( personas );

// Agregaría a Fernando en el índice 20 y dejaría 14 espacios vacios
// personas[20] = "Fernando";
// console.log( personas );

// Agregar elementos al inicio del arreglo
// personas[0] = "Rafael"; // Esta forma REEMPLAZA un elemento
console.log("N.Personas: " + personas.unshift("Rafael"));
console.log( personas );

// Eliminar un elemento al final del arreglo
console.log( "Persona eliminada: " + personas.pop() );
console.log( personas );

// Eliminar un elemento al inicio del arreglo
console.log( "Persona eliminada: " + personas.shift() );
console.log( personas );

// Clonar un arreglo
const ch34 = personas.slice();
ch34.push("Alan", "Jocelyn");
console.log(personas);
console.log(ch34);

// Eliminar y agregar elementos en un índice determinado 
console.log("=====");
console.log(personas);
console.log("Personas eliminadas: " + personas.splice(2, 2));
console.log(personas);

// Agregar personas desplazando sin eliminar a las otras 
console.log("Personas eliminadas: "+ personas.splice(2, 0, "Yaz", "Jorge"));
console.log(personas);

