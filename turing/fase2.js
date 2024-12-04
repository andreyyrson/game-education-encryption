// Função de decifração para Cifra de César
function caesarDecrypt(cipherText, shift) {
    let decryptedMessage = '';
    for (let i = 0; i < cipherText.length; i++) {
        let char = cipherText[i];

        if (char.match(/[a-z]/i)) { // Verifica se é uma letra
            const charCode = char.charCodeAt(0);
            let baseCode = char >= 'a' ? 97 : 65; // Verifica se é minúscula ou maiúscula
            let decryptedChar = String.fromCharCode(
                ((charCode - baseCode - shift + 26) % 26) + baseCode
            );
            decryptedMessage += decryptedChar;
        } else {
            decryptedMessage += char; // Mantém caracteres que não são letras
        }
    }
    return decryptedMessage;
}

// Inicializa o contador de tentativas se não existir
let attemptCount = parseInt(localStorage.getItem('attemptCount')) || 0; // Se não existir, começa em 0

// Verificar a Resposta
document.getElementById('verifyAnswerButton').addEventListener('click', () => {
    const correctAnswer = "gibraltar";
    const userAnswer = document.getElementById('userAnswer').value.trim().toLowerCase();

    if (userAnswer === correctAnswer) {
        // Resposta correta
        document.getElementById('successMessage').style.display = 'block';
        document.getElementById('loading').style.display = 'block';
        setTimeout(() => {
            window.location.href = 'fase3.html'; // Redireciona para a próxima fase
        }, 3000); // Atraso de 3 segundos
    } else {
        // Resposta incorreta
        attemptCount++;
        localStorage.setItem('attemptCount', attemptCount); // Atualiza o localStorage

        if (attemptCount >= 3) {
            // Redireciona para a tela de erro
            localStorage.removeItem('attemptCount'); // Reseta o contador
            window.location.href = 'dialogoErro.html';
        } else {
            alert(`Resposta incorreta! Você tem mais ${3 - attemptCount} tentativas.`);
        }
    }
});

// Botão de ajuda
document.getElementById('helpButton').addEventListener('click', () => {
    const tipContainer = document.getElementById('tipContainer');
    tipContainer.style.display = tipContainer.style.display === 'none' ? 'block' : 'none';
});
