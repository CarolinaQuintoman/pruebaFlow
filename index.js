
const laCajaDePandora = (num) => {
    if (num % 2 === 0) {
      // Si es par, convertir a binario
      return num.toString(2);
    } else {
      // Si es impar, convertir a hexadecimal
      return num.toString(16);
    }
}