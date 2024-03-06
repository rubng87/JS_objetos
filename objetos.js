// OBJETOS

let array = ["Maria", "Pau", 25, ["C/Plaça de Sant Jaume", 1], ["HTML", 'CSS'], true, 1200]

console.log(array[3]);

//Ke : value
// clave : valor
let objetoEstudiante = {
    nombre : "Maria",
    apellido : "Pau",
    edad : 25,
    direccion : ["C/Plaça de Sant Jaume", 1],
    lenguajes : ["HTML", 'CSS'],
    estaEstudiando : true,
    sueldoNEto : 1200,
    actividad : function (){
        return ("Estoy estudiando mucho JavaScript")
        
    },
    "vive en Barcelona" : false


}

console.log(objetoEstudiante.nombre);
console.log(objetoEstudiante.direccion);
console.log(objetoEstudiante["nombre"]);
console.log(objetoEstudiante["vive en Barcelona"]);
//console.log(objetoEstudiante."vive en Barcelona"); //Esto no es posible

console.log(objetoEstudiante.actividad())

//JSON
//JavaScript Object Notation

const json = {
    "nombre" : "Maria"
}


let listaEstudiantes = [
    {nombre: "Pep"},
    {nombre: "Sara"},
    {nombre: "Anna"}
]

let productoSupermercado = new Object()
productoSupermercado.name = "Leche"
console.log(productoSupermercado);
productoSupermercado.precio = 1.2
productoSupermercado.cantidad = 2
productoSupermercado.oferta = true


delete productoSupermercado.oferta //Para quitar un propiedad
console.log(productoSupermercado);

// let nombre =objetoEstudiante.nombre
// nombre = objetoEstudiante["nombre"]

let { nombre : nombreEstudiante } = objetoEstudiante
// let nombreEstudiante = nombre

console.log(nombreEstudiante);