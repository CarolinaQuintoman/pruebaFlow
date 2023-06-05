const laCajaDePandora = (numero) => {
  if (numero % 2 === 0) {
    return "0b" + numero.toString(2); // Representación binaria con "0b" al principio
  } else {
    return "0x" + numero.toString(16); // Representación hexadecimal con "0x" al principio
  }
};
