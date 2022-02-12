// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "jose"; // tipo de dato string

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 4; //tipo de dato number

// Crea una variable booleana:
const nuevoBool = true; //tipo de dato boleano

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5; //operador utilizado aritmetico de resta y comparacion con igualdad estricta (compara valor y tipo de dato)

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ; //operador utilizado aritmetico de multiplicacion y comparacion con igualdad estricta (compara valor y tipo de dato)

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1; //operador utilizado aritmetico de resto y comparacion con igualdad estricta (compara valor y tipo de dato)


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
  return str
  
}

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:

  // en mi solucion utilice operador aritmetico de suma
  return x + y
}

function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:

  // en mi solucion utilice operador aritmetico de resta
  return x - y
}

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  
  // en mi solucion utilice operador aritmetico de multiplicacion
  return x * y
}

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:

  // en mi solucion utilice operador aritmetico de division
  return x / y
}

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:

  // operador utilizado de comparacion de igualdad estricta (valor y tipo de dato)
  
  // 1) mi primera solución utilizando statement if/else
  // if(x === y) {
  //   return true
  // } else {
  //   return false
  // }

  // 2) mi segunda solución utilizando statement if/else sin cuerpo
  // if(x === y) return true
  // else return false
  
  // 3) mi tercera solucion utilizando operador ternario
  // return x === y ? true : false
  
  // 4) mi cuarta solucion es retornando el resultado de la evaluacion de la expression
  return x === y
}

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:

  // operador utilizado de comparacion de igualdad estricta (valor y tipo de dato)

  // 1) mi primer solucion utilizando statement if/else
  // if(str1.length === str2.length) {
  //   return true
  // } else {
  //   return false
  // }

  // 2) mi segunda solucion utiliizando if/else sin cuerpo
  // if(str1.length === str2.length) return true
  // else {str1.length === str2.length} return false

  // 3) mi tercera solucion utilizando operador ternario
  // return str1.length === str2.length ? true : false
  
  // 4) mi cuarta solucion es retornando el resultado de la evaluacion de la expression
  return str1.length === str2.length
}

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:

  // operador utilizado de comparacion menor que

  // 1) mi primera solucion utilizando statement if/else
  // if(num < 90) {
  //   return true 
  // } else {
  //   return false
  // }

  // 2) mi segunda solucion utilizando statement if/else sin cuerpo
  // if(num < 90) return true
  // else return false
  
  // 3) mi segunda solucion utilizando operador ternario
  // return num < 90 ? true : false

  // 4) mi cuarta solucion es retornando el resultado de la evaluacion de la expression
  return num < 90
}

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:

  // operador utilizado de comparacion mayor que

  // 1) mi primera solucion utilizando statement if/else
  // if(num > 50) {
  //   return true 
  // } else {
  //   return false
  // }

  // 2) mi segunda solucion utilizando statement if/else sin cuerpo
  // if(num > 50) return true
  // else return false
  
  // 3) mi segunda solucion utilizando operador ternario
  // return num > 50 ? true : false

  // 4) mi cuarta solucion es retornando el resultado de la evaluacion de la expression
  return num > 50
  
}

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:

  // operador utilizado artimetico resto

  return x % y
}

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:

  // operador utilizado aritmetico de resto
  // Objetc Boolean utilizado para la convercion de resultado de resto

  // 1) mi primera solucion utilizando if/else statement
  // if(!Boolean(num % 2)) {
  //   return true
  // } else {
  //   return false
  // }

  // 2) mi segunda solucion utilizando if/else statement sin cuerpo
  // if(!Boolean(num % 2)) return true
  // else return false

  // 3) mi tercera solucion utiizando operador ternario
  // return !Boolean(num % 2) ? true : false

  // 4) mi cuarta solucion es retornando el resultado de la evaluacion de la expression
  return !Boolean(num % 2)
}

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:

  // operador utilizado aritmetico de resto
  // Objetc Boolean utilizado para la convercion de resultado de resto

  // 1) mi primera solucion utilizando if/else statement
  // if(Boolean(num % 2)) {
  //   return true
  // } else {
  //   return false
  // }

  // 2) mi segunda solucion utilizando if/else statement sin cuerpo
  // if(Boolean(num % 2)) return true
  // else return false

  // 3) mi tercera solucion utiizando operador ternario
  // return Boolean(num % 2) ? true : false

  // 4) mi cuarta solucion es retornando el resultado de la evaluacion de la expression
  return Boolean(num % 2)
}

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:

  // 1) primera solucion utilizando operador aritmetico de multiplicacion
  // return num*num

  // 2) segunda solucion utilizando operador de asignacion compuesta de exponenciacion
  // return num**2
  
  // 3) tercera solucion utilizando el objeto math metodo pow
  return Math.pow(num, 2)
  
}

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  
  // 1) primera solucion utilizado operador aritmetico de multiplicacion
  // return num*num*num

  // 2) segunda solucion utilizando operador de asignacion compuesta de exponenciacion
  // return num**3

  // 3) tercera solucion utilizando el objeto math metodo pow
  return Math.pow(num, 3)
}

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:

  // 1) primera solucion utilizando operador de asignacion compuesa de exponenciacion
  // return num**exponent

  // 2) segunda solucion utilizando el objeto math metodo pow
  return Math.pow(num,exponent)
}

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:

  // solucion utilizando objeto Math metodo round
  return Math.round(num)
}

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:

  // solucion utilizando el objeto Math metodo ceil
  return Math.ceil(num)
}

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  
  // solucion utilizando el objeto Math metodo random
  return Math.random()
}

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false

  // 1) solucion utilizando if/else statements con cuerpo
  // if(numero > 0) {
  //   return "Es positivo"
  // }
  // else if (numero < 0 ) {
  //   return "Es negativo"
  // }
  // else {
  //   return false
  // }

  // 2) solucion utilizando if/else if/else statement sin cuerpo
  // if(numero > 0) return "Es positivo"
  // else if (numero < 0 ) return "Es negativo"
  // else return false

  // 3) solucion utilizando operador ternario encadenado
  return numero > 0 ? "Es positivo" : numero < 0 ? "Es negativo" : false
}

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:

  // 1) solucion utilizando Objeto String y su metodo concat
  // return str.concat("!")

  // 2) solucion utilizando operador aritmetico de suma
  // return str + "!"

  // 3) solucion utilizando template strings
  return `${str}!`
}

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:

  // 1) solucion utilizando Objeto String y su metodo concat
  // return nombre.concat(" ", apellido)

  // 2) solucion utilizando operador aritmetico de suma
  // return nombre + " " + apellido

  // 3) solucion utilizando template strings
  return `${nombre} ${apellido}`
  
}

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:

  // solucion utilizando Objeto String y su metodo concat
  // return "Hola ".concat(nombre,"!")

  // solucion utilizando operador aritmetico de suma
  // return "Hola " + nombre + "!"
  
  // solucion utilizando template strings
  return `Hola ${nombre}!`
}

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  
  // solucion utilizando operador aritmetico de multiplicacion
  return alto * ancho
}


function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí

  // solucion utilizando operador aritmetico de multiplicacion
  return lado * 4
}


function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
  
  // solucion utilizando operador aritmetico de multiplicacion
  return (base * altura) / 2
}


function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí

  // solucion utilizando operador aritmetico de multiplicacion
  return euro * 1.20
}


function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí

  // solucion utilizando if/else statements con su bloque de codigo
  // declaro una variable con una string que contenga las vocales
  // const vocals = "aeiou"
  // if (vocals.includes(letra)) {
  //   return "Es vocal"
  // }
  // else if (letra > 1 || !vocals.includes(letra)) {
  //   return "Dato incorrecto"
  // }

  // solucion utilizando if/else statements sin bloque de codigo
  // const vocals = "aeiou"
  // if (vocals.includes(letra)) return "Es vocal"
  // else if (letra > 1 || !vocals.includes(letra)) return "Dato incorrecto"

  // solucion utilizando operador ternario y operador logico
  // const vocals = "aeiou"
  // return vocals.includes(letra) ? "Es vocal" : ((letra > 1 || !vocals.includes(letra)) && "Dato incorrecto")

  // solucion utilizando buble for
  // const vocals = "aeiou"
  // if (letra > 1) return "Dato incorrecto"
  // for (let i = 0; i < vocals.length; i++) {
  //   if (vocals[i] === letra) return "Es vocal"
    
  // }
  // return "Dato incorrecto"

  // solucion utilizando buble for of
  const vocals = "aeiou"
  if(letra > 1) return "Dato incorrecto"
  for (const value of vocals) {
    if (value === letra) return "Es vocal"
  }
  return "Dato incorrecto"


  // solucion utilizando switch statement
  // switch (letra) {
  //   case "a":
  //   case "e":
  //   case "i":
  //   case "o":
  //   case "u":
  //     return "Es vocal"
  //   default: 
  //     return "Dato incorrecto"
  // }
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
