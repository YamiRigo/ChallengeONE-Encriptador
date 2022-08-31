/* A function that is called when the button is clicked. */

let botonDesencriptar = document.querySelector("#desencriptar");

botonDesencriptar.addEventListener("click", ()=>{
    let textoUsuario = document.querySelector("#texto-encriptar").value;
    let textoDesencriptado = desencriptar(textoUsuario);

    let resultado = document.querySelector("#resultado");
    resultado.value = textoDesencriptado;
})



/**
 * It takes a string and replaces each character with a different character.
 * 
 * The function is called with a string as an argument. The string is then looped through and each
 * character is replaced with a different character. The function returns the new string.
 * 
 * The function is called with the string "Hello World" as an argument. The string is then looped
 * through and each character is replaced with a different character. The function returns the new
 * string.
 * 
 * @param textoUsuario - The text that the user has entered.
 * @returns The encrypted text.
 */

function desencriptar (textoUsuario) {
    let textoEncriptado = "";
    for (const clave in claves) {
        textoEncriptado = textoUsuario.replaceAll(claves[clave],clave);
        //se actualiza el texto del usuario con las modificaciones ya realizadas.
        textoUsuario = textoEncriptado;        
    }
    return (textoEncriptado);
}