// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1];
}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:

  // solucion bucle for
  // for (let i = 0; i < array.length; i++) {
  //   array[i]++
  // }
  // return array

  // solucion metodo map de array
  array = array.map((e) => (e += 1));
  return array;
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:

  // solucion ingresando a traves de indices
  // array[array.length] = elemento
  // return array

  // solucion metodo push de array
  // array.push(elemento)
  // return array

  // solucion utilizando metodo concat de array
  // array = array.concat([elemento])
  // return array

  // solucion spreed operator
  return (array = [...array, elemento]);
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:

  // solucion metodo unshift de array
  // array.unshift(elemento)
  // return array

  // solucion con metodo concat de metodo array
  // array = [elemento].concat(array)
  // return array

  // solucion con spreed operator
  array = [elemento, ...array];
  return array;
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:

  // let palabrasConcatenadas = ""
  // for(let i = 0; i < palabras.length; i++) {
  //   if(i !== palabras.length - 1) palabrasConcatenadas += `${palabras[i]} `
  //   else palabrasConcatenadas += palabras[i]
  // }
  // return palabrasConcatenadas

  // let palabrasConcatenadas = ''
  // for(let value of palabras) {
  //   if(value !== palabras[palabras.length -1]) palabrasConcatenadas += value + ' '
  //   else palabrasConcatenadas += value
  // }
  // return palabrasConcatenadas

  palabras = palabras.join(" ");
  return palabras;
}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:

  // solucion utilizando metodo some de array
  // return array.some(e => e === elemento)

  // solucion utilizando metodo includes de array
  return array.includes(elemento);
}

function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:

  // solucion bucle for
  // let total = 0
  // for(let i = 0; i < numeros.length; i++) {
  //   total += numeros[i]
  // }
  // return total

  // solucion bucle  for of
  // let total = 0
  // for(let value of numeros) {
  //   total += value
  // }
  // return total

  // solucion metodo reduce de array
  return numeros.reduce((acc, value) => (acc += value), 0);
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:

  // solucion bucle for
  // let total = 0
  // for(let i = 0; i < resultadosTest.length; i ++) {
  //   total += resultadosTest[i]
  // }
  // return total / resultadosTest.length

  // solucion bucle while
  // let i = 0
  // let total = 0
  // while (i < resultadosTest.length) {
  //   total += resultadosTest[i]
  //   i++
  // }
  // return total / resultadosTest.length

  // solucion bucle for of
  // let total = 0
  // for(let value of resultadosTest) {
  //   total += value
  // }
  // return total / resultadosTest.length

  //solucion metodo reduce de array
  return (
    resultadosTest.reduce((acc, puntaje) => acc + puntaje, 0) /
    resultadosTest.length
  );
}

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  // let bigger = 0
  // for(let i = 0; i < numeros.length; i ++) {
  //   if(bigger < numeros[i]) bigger = numeros[i]
  // }
  // return bigger

  // let bigger = 0
  // for(let value of numeros) {
  //   bigger < value && (bigger = value)

  // }
  // return bigger

  // let bigger = 0
  // let i = 0
  // while(i < numeros.length) {
  //   if(bigger < numeros[i]) bigger = numeros[i]
  //   i++
  // }
  // return bigger

  return numeros.reduce((acc, numero) => {
    if (acc < numero) acc = numero;
    return acc;
  }, 0);
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if (!arguments.length) return 0;
  else if (arguments.length === 1) return arguments[0];
  let result = 1;
  for (const value of arguments) {
    result *= value;
  }
  return result;
}

function cuentoElementos(arreglo) {
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí

  // let contador = 0
  // for(let i = 0; i < arreglo.length; i++) {
  // arreglo[i] > 18 && contador ++
  // }
  // return contador

  // let contador = 0
  // for(let value of arreglo) {
  //   value > 18 && contador++
  // }
  // return contador

  return arreglo.reduce((acc, e) => {
    e > 18 && acc++;
    return acc;
  }, 0);
}

function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario.
  //Escribe tu código aquí

  // if(numeroDeDia === 7 || numeroDeDia === 1 ) return "Es fin de semana"
  // return "Es dia Laboral"

  return numeroDeDia === 7 || numeroDeDia === 1
    ? "Es fin de semana"
    : "Es dia Laboral";
}

function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí

  // return n.toString().startsWith("9")

  return n.toString()[0] === "9";
}

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí
  return arreglo.every((e) => arreglo[0] === e);
}

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:

  // let result = array.filter(mes => {
  //   if(mes ==="Enero" || mes === "Marzo" || mes === "Noviembre") return true
  // })
  // return result.length < 3 ? "No se encontraron los meses pedidos" : result

  let result = array.reduce((acc, mes) => {
    if (mes === "Enero" || mes === "Marzo" || mes === "Noviembre")
      acc = [...acc, mes];
    return acc;
  }, []);

  return result.length < 3 ? "No se encontraron los meses pedidos" : result;
}

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:

  return array = array.filter((numero) => numero > 100);
}

function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  let i = 0;
  let result = [];
  let msg;

  while (i < 10) {
    numero += 2;
    if (i === numero) {
      msg = "Se interrumpió la ejecución";
      break;
    }
    i++;
    result = [...result, numero];
  }
  return msg ? msg : result;
}

function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  let i = 0;
  let result = [];
  while (i < 10) {
    if (i === 5) {
      i++;
      continue;
    }
    numero += 2;
    result = [...result, numero];
    i++;
  }
  return result;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement,
};
