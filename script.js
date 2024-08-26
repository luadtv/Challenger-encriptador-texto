const textArea = document.querySelector(".textarea_input");
const mensaje = document.querySelector(".textarea_output");

function btnEncriptar() {
  const textoEncriptado = encriptar(textArea.value);
  mensaje.value = textoEncriptado;
  textArea.value = "";
}

function encriptar(stringEncriptada) {
  const codigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringEncriptada = stringEncriptada.toLowerCase();

  for (let i = 0; i < codigo.length; i++) {
    if (stringEncriptada.includes(codigo[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(
        codigo[i][0],
        codigo[i][1]
      );
    }
  }
  return stringEncriptada;
}

function btnDesencriptar() {
  const textoDesencriptado = desencriptar(textArea.value);
  mensaje.value = textoDesencriptado;
  textArea.value = "";
}

function desencriptar(stringDesencriptada) {
  const codigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringDesencriptada = stringDesencriptada.toLowerCase();

  for (let i = 0; i < codigo.length; i++) {
    if (stringDesencriptada.includes(codigo[i][1])) {
      stringDesencriptada = stringDesencriptada.replaceAll(
        codigo[i][1],
        codigo[i][0]
      );
    }
  }
  return stringDesencriptada;
}

function btnCopiar() {
  /*mensaje.select();
  document.execCommand("copy");*/
  navigator.clipboard.writeText(mensaje.value);
}
