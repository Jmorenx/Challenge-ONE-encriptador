function encrypt() {
    var encriptarTexto = document.getElementById("textoEntrada").value.toLowerCase();

    var textoEntrada = encriptarTexto.replace(/e/igm, "enter");
    var textoEntrada = textoEntrada.replace(/i/igm, "imes");
    var textoEntrada = textoEntrada.replace(/a/igm, "ai");
    var textoEntrada = textoEntrada.replace(/o/igm, "ober");
    var textoEntrada = textoEntrada.replace(/u/igm, "ufat");

    document.getElementById("textoDesencriptado").innerHTML = textoEntrada;
    document.getElementById("imagenBusqueda").style.display = "none";
    document.getElementById("text1").style.display = "none";
    document.getElementById("text2").style.display = "none";
    document.getElementById("btnCopy").style.display = "show";
    document.getElementById("btnCopy").style.display = "inherit";
    document.getElementById("textoDesencriptado").style.display = "show";
    document.getElementById("textoDesencriptado").style.display = "inherit";
}

function decrypt() {
    var textoDesencriptar = document.getElementById("textoEntrada").value.toLowerCase();

    var textoEntrada = textoDesencriptar.replace(/enter/igm, "e");
    var textoEntrada = textoEntrada.replace(/imes/igm, "i");
    var textoEntrada = textoEntrada.replace(/ai/igm, "a");
    var textoEntrada = textoEntrada.replace(/ober/igm, "o");
    var textoEntrada = textoEntrada.replace(/ufat/igm, "u");

    document.getElementById("textoDesencriptado").innerHTML = textoEntrada;
}

function copy() {    
    var contenido = document.querySelector("#textoDesencriptado");
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Texto Copiado',
        showConfirmButton: false,
        timer: 1500
      })
    contenido.select();
    document.execCommand("copy");
}