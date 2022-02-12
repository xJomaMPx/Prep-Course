// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:

  // solucion utilizando if/else if/else statements
  // if(x > y) {
  //   return x
  // } else if (x < y) {
  //   return y
  // } else {
  //   const returnRandom = Math.round(Math.random())
  //   return returnRandom ? x : y 
  // }

  // solucion utilizando if/else if/else statements sin bloque
  // if(x > y) return x
  // else if(x < y) return y
  // else {
  //   const returnRandom = Math.round(Math.random())
  //   return returnRandom ? x : y
  // }

  // solucion utilizando operador ternario
  return x > y ? x : x < y ? y : Math.round(Math.random()) ? x : y  
}

function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
  
  // solucion utilizando operador ternario
  return edad >= 18 ? "Allowed" : "Not allowed"
}
  
function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
  
  // solucion utilizando operador ternario
  return status === 1 ? "Online" : status === 2 ? "Away" : "Offline"
}

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:

  // solucion utilizando switch statement
  // switch(idioma) {
  //   case "aleman":
  //     return "Guten Tag!"
  //   case "mandarin":
  //     return "Ni Hao!"
  //   case "ingles":
  //     return "Hello!"
  //   default:
  //     return "Hola!"
  // }

  // solucion utilizando if / else if / else
  // if(idioma === "aleman") return "Guten Tag!"
  // else if(idioma === "mandarin") return "Ni Hao!" 
  // else if(idioma === "ingles") return "Hello!" 
  // else return "Hola!"

  // solucion utilizando operador ternario
  return idioma === "aleman" ? "Guten Tag!" : idioma === "mandarin" ? "Ni Hao!" : idioma === "ingles" ? "Hello!" : "Hola!"

}

function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.
  switch(color) {
    case "blue":
      return "This is blue"
    case "red":
      return "This is red"
    case "green":
      return "This is green"
    case "orange":
      return "This is orange"
    default:
      return "Color not found"

  }
}

function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:

  // solucion con operador logico OR si ambas condiciones son true devuelve true, si una es true y la otra false devuelve true, si ninguna es true devuelve false
  // es es decir que para obtener true espera que al menos uno sea true
  return numero === 10 || numero === 5
  
}

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  
  // solucion con operador logico AND si ambas condiciones son true devuelve true, si una es true y la otra false devuelve false, si ninguna es true devuelve false
  // es decir que para obtener true si o si ambos deben ser true
  return numero < 50 && numero > 20
}

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  
  // // solucion iterando bucle for
  // const numberToString = numero.toString()
  // for(let i = 0;i < numberToString.length; i++) {
    //   if (numberToString[i] === ".") return false
    //   else if (i === numberToString.length - 1) return true
    // }

  // solucion pasandolo a cadena con el metodo toString del objeto number y metodo includes del objeto String
  // return !numero.toString().includes(".")
    
  // solucion con el metodo isInteger del objeto number
  return Number.isInteger(numero)
}

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero

  // solucion utilizando if / else if / else statement
  // if (!(numero % 3) && !(numero % 5)) return "fizzbuzz"
  // else if(!(numero % 3)) return "fizz"
  // else if (!(numero % 5)) return "buzz"
  // else return numero

  // solucion utiliizando operador ternario ?
  return !(numero % 3) && !(numero % 5) ? "fizzbuzz" : !(numero % 3) ? "fizz" : !(numero % 5) ? "buzz" : numero
}

function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false.
  if(!num1 || !num2 || !num3) return "Error"
  else if(num1 < 0 || num2 < 0 || num3 < 0) return "Hay negativos"
  else if(num1 > num2 && num1 > num3) return "Número 1 es mayor y positivo"
  else if(num3 > num2 && num3 > num1) return num3 + 1
  else return false
}

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos

  // solucion bucle while
  if(numero < 2) return false
  let i = 2
  while(i < numero){
    if(numero % i === 0) return false
    i++
  }
  return true
}

function esVerdadero(valor){
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí

  // solucion if/ else if statement
  // if(valor) return "Soy verdadero"
  // else if(!valor) return "Soy falso"
  
  // solucion con operadores logicos AND y OR
  // return (valor && "Soy verdadero") || (!valor && "Soy falso")

  // solucion operador ternario ?
  return valor ? "Soy verdadero" : "Soy falso"
}

function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí
  
  // solucion bucle for
  let tablaDelSeis = []
  for(let i = 0; i <= 10;i++ ) {
    tablaDelSeis.push(6 * i)
  }
  return tablaDelSeis

  // solucion bucle while
  // let i = 0
  // let tablaDelSeis = []
  // while (i <= 10) {
  //   tablaDelSeis.push(i * 6)
  //   i++
  // }
  // return tablaDelSeis

  // solucion bucle for of
  // let tablaDelSeis = [0,1,2,3,4,5,6,7,8,9,10]
  // let i = 0
  // for(let value of tablaDelSeis) {
  //   tablaDelSeis[i] = value * 6
  //   i++
  // }
  // return tablaDelSeis
  
  // solucion forEach del objeto array
  // let tablaDelSeis = [0,1,2,3,4,5,6,7,8,9,10]
  // tablaDelSeis.forEach((e,i) => tablaDelSeis[i] = e * 6)
  // return tablaDelSeis

  // solucion map del objeto array
  // let tablaDelSeis = [0,1,2,3,4,5,6,7,8,9,10]
  // return tablaDelSeis.map(e => e * 6)

}

function tieneTresDigitos(numero){
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí
  return numero.toString().length === 3 ? true : false
}

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  let i = 0
  do {
    numero += 5
    i++
  } while (i < 8);
  return numero
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};
