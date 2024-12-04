const substitutionTable = {
    "A": "D", "B": "E", "C": "F", "D": "G", "E": "H", "F": "I", 
    "G": "J", "H": "K", "I": "L", "J": "M", "K": "N", "L": "O", 
    "M": "P", "N": "Q", "O": "R", "P": "S", "Q": "T", "R": "U", 
    "S": "V", "T": "W", "U": "X", "V": "Y", "W": "Z", "X": "A", 
    "Y": "B", "Z": "C"
};


function substitutionDecrypt(cipherText) {
    let decryptedMessage = '';
    for (let i = 0; i < cipherText.length; i++) {
        let char = cipherText[i].toUpperCase();

        if (char.match(/[A-Z]/)) {
          
            for (let key in substitutionTable) {
                if (substitutionTable[key] === char) {
                    decryptedMessage += key;
                    break;
                }
            }
        } else {
            decryptedMessage += char; 
        }
    }
    return decryptedMessage;
}

let attemptCount = 0;

// Verificar a Resposta
document.getElementById('verifyAnswerButton').addEventListener('click', () => {
    const correctAnswer = "Europa";
    const userAnswer = document.getElementById('userAnswer').value.trim();

    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        document.getElementById('successMessage').style.display = 'block';
        document.getElementById('loading').style.display = 'block';
        setTimeout(() => {
            window.location.href = 'fase2.html'; 
        }, 3000); 
    } else {
        attemptCount++;
        if (attemptCount >= 3) {
            window.location.href = 'dialogoErro.html';
        } else {
            alert(`Resposta incorreta! Você tem mais ${3 - attemptCount} tentativas.`);
        }
    }
});


document.getElementById('helpButton').addEventListener('click', () => {
    const tipContainer = document.getElementById('tipContainer');
    tipContainer.style.display = tipContainer.style.display === 'none' ? 'block' : 'none';
});