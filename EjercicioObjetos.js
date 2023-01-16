const persona = {
    nombre: 'Nadya',
    edad: 24,
    genero: 'Femenino',
    numerohijos: 0,
    numerogatos: 9,
    juegofav: 'league of legends' 

}
console.log(persona.nombre)

//const nombre = persona.nombre;
//const edad = persona.edad; 
//const genero = persona.genero;
//const numerohijos = persona.numerohijos; 
//const numerogatos =  persona.numerogatos;
//const juegofav = persona.juegofav;

const { nombre, edad, genero, numerohijos, numerogatos, juegofav} = persona; 

console.log(`Mi nombre es ${nombre} tengo ${edad} años de edad, me identidico con el genero ${genero}, tengo ${numerohijos} hijos y ${numerogatos} gatos, mi juego favorito es ${juegofav}`)