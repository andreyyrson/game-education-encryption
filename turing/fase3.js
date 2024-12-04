// Função de criptografia por transposição de colunas
function columnarTranspositionEncrypt(plainText, numCols) {
    const sanitizedText = plainText.replace(/\s+/g, '').toLowerCase();
    const numRows = Math.ceil(sanitizedText.length / numCols);
    let grid = [];

    for (let i = 0; i < numRows; i++) {
        grid.push(sanitizedText.slice(i * numCols, (i + 1) * numCols).padEnd(numCols, '_'));
    }

    let encryptedMessage = '';
    for (let col = 0; col < numCols; col++) {
        for (let row = 0; row < numRows; row++) {
            encryptedMessage += grid[row][col];
        }
    }

    return encryptedMessage;
}

// Criptografar a frase "science is the key" com 4 colunas
const correctAnswer = columnarTranspositionEncrypt("EuropaGibraltar", 4);

// Inicializa o contador de tentativas se não existir
let attemptCount = parseInt(localStorage.getItem('attemptCount')) || 0; // Se não existir, começa em 0

// Verificar a resposta do usuário
document.getElementById('verifyAnswerButton').addEventListener('click', () => {
    const userAnswer = document.getElementById('userAnswer').value.trim().toLowerCase();
    let attemptCount = parseInt(localStorage.getItem('attemptCount'));

    if (userAnswer === correctAnswer) {
        document.getElementById('successMessage').style.display = 'block';
        document.getElementById('loading').style.display = 'block';
        setTimeout(() => {
            window.location.href = 'paginaFinal.html'; // Redireciona para a próxima fase
        }, 3000); // Atraso de 3 segundos
    } else {
        attemptCount++;
        localStorage.setItem('attemptCount', attemptCount);
        if (attemptCount >= 3) {
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