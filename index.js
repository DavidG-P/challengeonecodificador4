function onClickencriptar() {
    const texto = document.getElementById("texto").value;
    if (/^[a-z]+$/.test(texto)) {
        let textoEncriptado = encriptado(texto);
        document.getElementById("resultado").innerHTML = textoEncriptado;
        document.getElementById("texto").value = "";
    } else {
        alert('texto es invalido')
    }
}

function onClickdesencriptar() {
    const texto = document.getElementById("texto").value;
    if (/^[a-z]+$/.test(texto)) {
        let textoEncriptado = desencriptado(texto);
        document.getElementById("resultado").innerHTML = textoEncriptado;
        document.getElementById("texto").value = "";
    } else {
        alert('texto es invalido')
    }
}


function encriptado(texto) {

    texto = texto.replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

    return texto;
    
}

function desencriptado(texto) {
    texto = texto.replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
    
    return texto;
}


function copiarTexto() {
   
    const resultado = document.getElementById("resultado");

    const tempInput = document.createElement("textarea");
    tempInput.value = resultado.innerText;
    document.body.appendChild(tempInput);

    tempInput.select();
    tempInput.setSelectionRange(0, 99999); 

    document.execCommand("copy");

    document.body.removeChild(tempInput);

    alert("Texto copiado al portapapeles: " + resultado.innerText);
}



