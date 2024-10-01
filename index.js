function hello(){
    alert('Hola Mundo');
}

function edit(){
    var textoIngresado = prompt('Ingrese el texto a editar');
    console.log(textoIngresado);
    if(textoIngresado != null){
        document.getElementById('texto').innerHTML = textoIngresado;
    }
}

async function obtenerMeme() {
    try {
        const response = await fetch('https://meme-api.com/gimme');
        const data = await response.json();
        console.table(data);
        
        if (data && data.url) {
           
            const imagen = document.getElementById('prueba');
            imagen.src = data.url;
        } else {
            console.error('No se pudo obtener un meme');
        }
    } catch (error) {
        console.error('Error al obtener el meme:', error);
    }
}
// Tipo de dato: String
let hola = 'Hola Mundo';

// Tipo de dato: Number
let numero = 1000;

// Tipo de dato: Boolean
let verdadero = false;
// Tipo de dato: Vacio null
let vacio = null;

// Tipo de dato: Undefined
let indefinido = undefined;

// Tipo de dato: Symbol
let simbolo = Symbol('mi simbolo');

// Tipo de dato: BigInt
let bigint = 100n;

console.log(hola);

// Tipo de dato: Object
let objeto = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 20
}

objeto.estado = 'activo';

console.table(objeto);

let objeto2 = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 20
}

Object.freeze(objeto2);
objeto.nombre = 'Pedro';
objeto.estado = 'Vivo';
console.table(objeto2);

let objeto3= {
    nombre: 'Juan2',
    apellido: 'Perez',
    edad: 20
}
//Object seal
Object.seal(objeto3);
objeto3.nombre = 'Pedro';
objeto3.estado = 'Vivo';

console.table(objeto3);

// Tipo de dato: Array
let lenguajes = ['JavaScript', 50, 'PHP', 'Python'];

for(let i = 0; i < lenguajes.length; i++){
    console.log(lenguajes[i]);
}

// Tipo de dato: Function
let funcion = function(){
    console.log('Hola');
    return 5
}

a = funcion();

console.log(a)