// Função de criptografia por transposição de colunas
function columnarTranspositionEncrypt(plainText, numCols) {
    // Remove espaços e converte tudo para minúsculas
    const sanitizedText = plainText.replace(/\s+/g, '').toLowerCase();
    
    // Calcula o número de linhas necessárias
    const numRows = Math.ceil(sanitizedText.length / numCols);
    let grid = [];

    // Preenche a grade
    for (let i = 0; i < numRows; i++) {
        grid.push(sanitizedText.slice(i * numCols, (i + 1) * numCols).padEnd(numCols, '_'));
    }

    // Lê por colunas
    let encryptedMessage = '';
    for (let col = 0; col < numCols; col++) {
        for (let row = 0; row < numRows; row++) {
            encryptedMessage += grid[row][col];
        }
    }

    return encryptedMessage;
}

// Criptografar a frase "science is the key" com 4 colunas
const correctAnswer = columnarTranspositionEncrypt("science is the key", 4);

// Verificar a resposta do usuário
document.getElementById('verifyAnswerButton').addEventListener('click', () => {
    const userAnswer = document.getElementById('userAnswer').value.trim().toLowerCase();

    if (userAnswer === correctAnswer) {
        document.getElementById('successMessage').style.display = 'block';
        document.getElementById('loading').style.display = 'block';
        setTimeout(() => {
            window.location.href = 'paginaFinal.html'; // Redireciona para a próxima fase
        }, 3000); // Atraso de 3 segundos
    } else {
        alert('Resposta incorreta! Tente novamente.');
    }
});

// Botão de ajuda
document.getElementById('helpButton').addEventListener('click', () => {
    const tipContainer = document.getElementById('tipContainer');
    tipContainer.style.display = tipContainer.style.display === 'none' ? 'block' : 'none';
});