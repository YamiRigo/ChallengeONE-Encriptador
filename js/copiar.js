/* A function that copies the text in the textarea to the clipboard. */

let botonCopiar = document.querySelector("#copiar");


botonCopiar.addEventListener("click",()=>{    
    let textoCopiado = document.querySelector("#resultado").value;
    navigator.clipboard.writeText(textoCopiado);
});