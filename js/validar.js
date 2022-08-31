/**
 * It checks if the text has any uppercase letters or special characters.
 * @param texto - the text to be validated
 * @returns true
 */

function validarTexto (texto) {
    console.log(texto)

    let mayusculas = /[A-Z]/g;
    let caracteresEspeciales = /[áéíóú]/g;

    if (texto.match(mayusculas)) {
        return true;
    }else if (texto.match(caracteresEspeciales)){
        return true;
    } else {
        return false;
    }

}