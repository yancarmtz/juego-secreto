//CODIGO ANTERIOR:
/*let titulo = document.querySelector('h1');
titulo.innerHTML = 'Juego del numero secreto';

let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indicame el numero del 1 al 10';

function intentoDeUsuario() {
    alert('CLICK DESDE EL BOTON');
} */

//*************************************************************************************************************************************************************************** */
//CODIGO 1 ACTUAL:
//variables
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);

 //TYPEOF SIRVE PARA SABER EL TIPO DE VALOR QUE TIENE SI ES STRING O NUMBER 
 /*   console.log(typeof(numeroUsuario));
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto));
    console.log(numeroUsuario);
 */   
// EL TRIPLE IGUAL === SIRVE PARA DECIR QUE EL VALOR DE VUELTO SEA IGUAL E IGUAL EN TIPO ES DECIR NUMERO CON NUMERO, STRING CON STRING 
//    console.log(numeroUsuario === numeroSecreto);
 
    if (numeroUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces' }`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // CUANDO NO SE ACIERTA AL NUMERO SECRETO 
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento('p','El numero secreto es menor');
        } else {
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++
        //se agrega aqui el nombre de la funcion ya que es donde se esta validando la caja de texto con el id valorUsuario 
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}


function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //SI YA SORTEAMOS TODOS LOS NUMEROS 
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    } else {

    // SI EL NUMERO GENERADO ESTA EN LA LISTA 
       if (listaNumerosSorteados.includes(numeroGenerado)) {
           return generarNumeroSecreto();
       } else {
           listaNumerosSorteados.push(numeroGenerado);
           return numeroGenerado;
       }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p',`Indicame el numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //condiciones iniciales
    condicionesIniciales()
    //deshabilitar boton nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');    
}

condicionesIniciales();


//************************************************************************************************************************************************************************** */
//09 Desafío: hora de practicar
//PRÓXIMA ACTIVIDAD
//
//Saber cómo usar funciones es uno de los conceptos fundamentales en la programación y el desarrollo de software. Las funciones desempeñan un papel crucial en la organización, 
//modularización y reutilización del código.
//
//Con eso en mente, hemos creado una lista de actividades (opcionales) centradas en la práctica para mejorar aún más tu experiencia de aprendizaje. ¡Así que vamos a practicar!

//Desafíos:
//Crear una función que muestre "¡Hola, mundo!" en la consola.
/*function holaMundo() {
    console.log('¡Hola Mundo!');
}

holaMundo();
*/

//Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
/*function NombreUsuario(nombre) {
    console.log(`¡Hola ${nombre}!`);
}

NombreUsuario('Carlos');
*/

//Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
/*function calcularDoble(numero) {
    return numero * 2     
}

let resultado = calcularDoble(10);
console.log(resultado);
*/


//Crear una función que reciba tres números como parámetros y devuelva su promedio.
/*function calcularPromedio(num1, num2, num3) {
    return (num1 + num2 + num3) / 3
}

let promedio = calcularPromedio(10, 10, 4);
console.log(promedio);
*/

//Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
/*function encuentraMayor(a, b) {
    return a > b ? a : b;
}

let numeroMayor = encuentraMayor(25, 12);
console.log(numeroMayor);
*/

//Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
/*function cuadrado(numero) {
    return numero * numero;
} 

let resultado = cuadrado(9);
console.log(resultado);
*/


//*************************************************************************************************************************************************************** */
//Has sido contratado(a) para desarrollar una calculadora que calcula el promedio y así verificar la situación de aprobación de un estudiante en función de sus cuatro notas. 
//El promedio requerido para aprobar es de mínimo 5. Tu tarea es implementar dos funciones en JavaScript:

//calcularPromedio(nota1, nota2, nota3, nota4) => Esta función recibe las cuatro notas del estudiante como parámetros y devuelve el promedio calculado con base en esas notas.
//verificarAprobacion(promedio) => Esta función recibe el promedio del estudiante como parámetro y devuelve "Aprobado" si el promedio es mayor o igual a 5, en caso contrario,
// devuelve "Reprobado".
//Utiliza estos valores para las calificaciones:
/*
let nota1 = 217;
let nota2 = 110;
let nota3 = 110;
let nota4 = 110;

function calcularPromedio(nota1, nota2, nota3, nota4){
    let promedio = (nota1 +  nota2 +  nota3 +  nota4)/4
    return promedio;
}

function verificarAprobacion(promedio){
    return promedio >= 5 ? 'Aprobado' : 'Reprobado';
}

console.log(verificarAprobacion());
*/

//***************************************************************************************************************************************************************************** */
//En nuestra clase anterior, exploramos la función 'reiniciarJuego' y aprendimos a organizar nuestro código utilizando comentarios para guiar nuestras acciones paso a paso. 
//Ahora, te presentamos un desafío práctico para poner en práctica tus conocimientos sobre el uso de funciones y buenas prácticas de programación.
//
//El siguiente código en JavaScript calcula el doble y el triple de un número proporcionado. Tu tarea consiste en seleccionar las opciones que sigan las mejores prácticas
// de programación y ayuden a mejorar la legibilidad y mantenibilidad del código.
//
//function calcularDobleTriple(numero) {
//  const doble = numero * 2;
//  const triple = numero * 3;
//
//  return `El doble de ${numero} es ${doble} y el triple es ${triple}.`;
//}
//
//const numero = 5;
//const resultado = calcularDobleTriple(numero);
//console.log(resultado);
/*
function calcularDoble(numero) {
    return numero * 2;
  }
  
  function calcularTriple(numero) {
    return numero * 3;
  }
  
  const numero = 5;
  const doble = calcularDoble(numero);
  const triple = calcularTriple(numero);
  
  console.log(`El doble de ${numero} es ${doble} y el triple es ${triple}.`);
  */

//*********************************************************************************************************************************************************************** */
//Desafíos: Saber cómo usar funciones es uno de los conceptos fundamentales en la programación y el desarrollo de software. Las funciones desempeñan un papel crucial 
//en la organización, modularización y reutilización del código.
//
//Con eso en mente, hemos creado una lista de actividades (opcionales) centradas en la práctica para mejorar aún más tu experiencia de aprendizaje.
// ¡Así que vamos a practicar!

//Desafíos:
//Sugestión de respuestas

//1.Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
/*
function calcularIMC(altura, peso) {
  var imc = peso / (altura * altura);
  return imc;
}

//2.Crea una función que calcule el valor del factorial de un número pasado como parámetro.

function calcularFactorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  } else {
    return numero * calcularFactorial(numero - 1);
  }
}
// Ejemplo de uso
let numero = 5;
let resultado = calcularFactorial(numero);
console.log(`El factorial de ${numero} es ${resultado}`);

//3.Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales. Para esto, 
//considera la cotización del dólar igual a R$4,80.

function convertirDolaresAReales(dolares) {
  var cotizacionDolar = 4.80;
  var reales = dolares * cotizacionDolar;
  return reales;
}
// Ejemplo de uso
let valorEnDolar = 50;
let valorEnReales = convertirDolaresAReales(valorEnDolar);
console.log(`${valorEnDolar} dólares  es R$ ${valorEnReales}`);

//4.Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.

function calcularAreaYPerimetroRectangular(altura, anchura) {
  var area = altura * anchura;
  var perimetro = 2 * (altura + anchura);
  console.log("Área: " + area);
  console.log("Perímetro: " + perimetro);
}
// Ejemplo de uso
let altura = 3; // en metros
let anchura = 5; // en metros
calcularAreaYPerimetroRectangular(altura, anchura);

//5.Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. 
//Considera Pi = 3,14.

function calcularAreaYPerimetroCircular(radio) {
  var pi = 3.14;
  var area = pi * radio * radio;
  var perimetro = 2 * pi * radio;
  console.log("Área: " + area);
  console.log("Perímetro: " + perimetro);
}
// Ejemplo de uso
let radio = 4; // en metros
calcularAreaYPerimetroCircular(radio);

//6.Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.

function mostrarTablaDeMultiplicar(numero) {
  for (var i = 1; i <= 10; i++) {
    var resultado = numero * i;
    console.log(numero + " x " + i + " = " + resultado);
  }
}
// Ejemplo de uso
let numero = 7;
mostrarTablaDeMultiplicar(numero);
*/

//************************************************************************************************************************************************************************** */
//************************************************************************************************************************************************************************** */
//*Un array, arreglo o lista en JavaScript es una estructura de datos que permite almacenar y organizar múltiples valores en una sola variable. Los valores en un array pueden 
//*ser de cualquier tipo de dato, como números, strings, objetos, otros arrays, y así sucesivamente. Los arrays en JavaScript son indexados, 
//*lo que significa que cada valor dentro de ellos está asociado con un índice numérico, generalmente comenzando desde el índice 0.
//
//*Creando un array
//*Puedes crear un array en JavaScript declarando una variable y asignándole valores entre corchetes [].
//
//let frutas = ["Manzana", "Uva", "Naranja"];
// 
//*Accediendo a los valores Los elementos de un array se acceden mediante índices numéricos, que comienzan en 0.
//
//*Índice	Elemento
//*     0	"Manzana"
//*     1	"Uva"
//*     2	"Naranja"
//
//console.log(frutas[0]); // Salida: "Manzana"
//console.log(frutas[2]); // Salida: "Naranja"
// 
//*Añadiendo nuevos elementos
//*Para agregar un elemento al final del array, puedes usar el método push.
//
//frutas.push("Fresa");
//console.log(frutas); // Salida: ["Manzana", "Uva", "Naranja", "Fresa"]
// 
//*Eliminando el último elemento
//*Para eliminar el último elemento, puedes usar el método pop.
//
//frutas.pop();
//console.log(frutas); // Salida: ["Manzana", "Uva", "Naranja"]
// 
//*¿Qué lenguajes de programación utilizan arrays?
//*Aquí tienes una lista de algunos lenguajes de programación que utilizan arrays:
//
//*JavaScript
//*Python
//*Java
//*C++
//*C#
//*Ruby
//*PHP
//*Swift
//*Kotlin
//*Go
//*Otros lenguajes también admiten el uso de arrays o estructuras de datos similares para almacenar colecciones de valores. Aprender sobre arrays es importante 
//*porque desempeñan un papel fundamental en el desarrollo de aplicaciones de software.
//
//*Las listas o arrays proporcionan una manera eficiente de almacenar y acceder a conjuntos de datos, lo que permite a los programadores organizar 
//*la información de manera lógica y manipular estos datos de manera efectiva.
//
//*Con el conocimiento de cómo trabajar con arrays, es posible crear algoritmos más poderosos, resolver problemas 
//*de programación de manera más eficiente y crear aplicaciones más dinámicas e interactivas.