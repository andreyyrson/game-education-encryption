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

    // Função para mostrar e esconder a dica
    const helpButton = document.getElementById("helpButton");
    const tipContainer = document.getElementById("tipContainer");

    helpButton.addEventListener("click", function () {
        if (tipContainer.style.display === "none" || tipContainer.style.display === "") {
            tipContainer.style.display = "flex";
        } else {
            tipContainer.style.display = "none";
        }
    });

    // Verificar a palavra secreta
    const checkCodeButton = document.getElementById("checkCodeButton");
    const secretCodeInput = document.getElementById("secretCode");
    const successMessage = document.getElementById("successMessage");
    const loading = document.getElementById("loading");

    checkCodeButton.addEventListener("click", function () {
        const secretCode = secretCodeInput.value.toUpperCase();
        if (secretCode === "THERE IS A SECRET CODE!") {
            successMessage.style.display = "block";
            loading.style.display = "block";
            setTimeout(() => {
                window.location.href = "fase2.html";
            }, 2000);
        } else {
            alert("Código incorreto. Tente novamente.");
        }
    });
});