document.addEventListener("DOMContentLoaded", function () {

    const decryptButton = document.getElementById("decryptButton");
    const cipherText = document.getElementById("cipherText").value;
    const shiftValueInput = document.getElementById("shiftValue");
    const decryptedMessage = document.getElementById("decryptedMessage");

    // Função para decifrar a Cifra de César
    function caesarCipherDecrypt(text, shift) {
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let decryptedText = "";

        // Itera sobre cada letra da mensagem criptografada
        for (let i = 0; i < text.length; i++) {
            let char = text[i].toUpperCase();
            let index = alphabet.indexOf(char);

            // Verifica se o caractere é uma letra
            if (index !== -1) {
                let newIndex = (index - shift + 26) % 26;
                decryptedText += alphabet[newIndex];
            } else {
                decryptedText += text[i]; // Mantém os espaços ou outros caracteres
            }
        }
        return decryptedText;
    }

    // Adiciona evento de clique no botão "Decifrar"
    decryptButton.addEventListener("click", function () {
        const shiftValue = parseInt(shiftValueInput.value);
        const decryptedText = caesarCipherDecrypt(cipherText, shiftValue);
        decryptedMessage.textContent = decryptedText;
    });
});
