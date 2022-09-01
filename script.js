const inputTexto = document.querySelector(".input-texto");
const mensaje = document.querySelector(".mensaje");


function btnEncriptar(){
    const TextoEncriptado = encriptar(inputTexto.value)
    mensaje.value = TextoEncriptado;
    mensaje.style.backgroundImage = "none";
    inputTexto.value = "";
}

function btnDesencriptar(){
    const TextoDesencriptado = desencriptar(inputTexto.value)
    mensaje.value = TextoDesencriptado;
    mensaje.style.backgroundImage = "none";
    inputTexto.value = "";
}

function encriptar(stringEncriptada){

    let matrixCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrixCodigo.length; i++){
        if(stringEncriptada.includes(matrixCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrixCodigo[i][0],matrixCodigo[i][1]);

        }
    }

    return stringEncriptada;

}


function desencriptar(stringDesencriptada){
    let matrixCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrixCodigo.length; i++){
        if(stringDesencriptada.includes(matrixCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrixCodigo[i][1],matrixCodigo[i][0]);

        }
    }
    return stringDesencriptada;

}


function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = "";
    alert("Copiado");
}