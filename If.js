var edad= prompt ('Proporciona tu edad')

if ( edad >= 18 && edad <= 100) {
    console.log ('Eres mayor de edad, puedes ingresar.');
    
} 
else if 
    (edad < 18 ) {
    console.log ('Eres menor de edad, no se pudo ingresar.')
} 
else if (edad >= 100) {

console.log ('Error, dedad incorrecta')
}


var cantidadhijos= 1; 
var edadhijo= 5;

var pesohijo= 35.5;
var estaturahijo= 1.50;

var tieneHijos = true; 
var mayordeEdad= true;
var estudios= 'Primaria';

console.log('Hola  mi nombre es' + nombre);
console.log(`Hola mi nombre es ${nombre} mi edad es ${edad} tengo ${cantidadhijos} hijo de ${edadhijo} años, mi hijo pesa ${pesohijo}  kg y tiene una estatura de
${estaturahijo}, el estudia ${estudios}');