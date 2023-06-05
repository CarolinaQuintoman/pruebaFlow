function laCajaDePandora(numero){

  if (numero % 2 === 0) {
    // Convertir número par a binario
    return numero.toString(2);
  } else {
    // Convertir número impar a hexadecimal
    return numero.toString(16);
  }
}

// Ejemplo de uso
const numeroEntero = parseInt(prompt("Ingrese un número entero:"));
const resultado = convertirNumero(numeroEntero);
console.log("El resultado es:", resultado);



