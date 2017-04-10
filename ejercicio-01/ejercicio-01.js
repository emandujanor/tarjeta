function isValidCard(creditCardNumber) {
    // Escribe tu código aquí
    if (creditCardNumber!==Number){
      return("Ingresa un numero");
      return("Error de dato");
    }
    if (creditCardNumber.length<16){
      return("Faltan numeros");
    }


}



// NO TOCAR ESTE CÓDIGO O EXPLOTARÁ LA PC EN 10 SEGUNDOS
if (typeof exports !== 'undefined') {
    exports.isValidCard = isValidCard;
}
