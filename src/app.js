document.getElementById("encryptButton").addEventListener("click", encrypt);
document.getElementById("decryptButton").addEventListener("click", decrypt);

function encrypt() {
  const shift = 3; // Número de posiciones para desplazar
  const inputText = document.getElementById("inputEncrypt").value;
  let result = "";

  for (let i = 0; i < inputText.length; i++) {
    let char = inputText[i];
    if (char.match(/[a-z]/i)) {
      let code = inputText.charCodeAt(i);
      if (code >= 65 && code <= 90) {
        char = String.fromCharCode(((code - 65 + shift) % 26) + 65); // Para letras mayúsculas
      } else if (code >= 97 && code <= 122) {
        char = String.fromCharCode(((code - 97 + shift) % 26) + 97); // Para letras minúsculas
      }
    }
    result += char;
  }
  document.getElementById("encryptedText").innerText =
    "Su texto codificado es: " + result;
}

function decrypt() {
  const shift = 3; // Se debe usar el mismo valor de desplazamiento para desencriptar
  const inputText = document.getElementById("inputDecrypt").value;
  let result = "";

  for (let i = 0; i < inputText.length; i++) {
    let char = inputText[i];
    if (char.match(/[a-z]/i)) {
      let code = inputText.charCodeAt(i);
      if (code >= 65 && code <= 90) {
        char = String.fromCharCode(((code - 65 - shift + 26) % 26) + 65); // Para letras mayúsculas
      } else if (code >= 97 && code <= 122) {
        char = String.fromCharCode(((code - 97 - shift + 26) % 26) + 97); // Para letras minúsculas
      }
    }
    result += char;
  }

  document.getElementById("decryptedText").innerText =
    "Su texto decodificado es: " + result;
}
