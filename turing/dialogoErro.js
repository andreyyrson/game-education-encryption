document.addEventListener('DOMContentLoaded', (event) => {
    const dialogues = [
        "Você errou 3 vezes, {name}.",
        "Estou profundamente arrependido de ter confiando em você",
        "Pelo seu descuido, o povo sofrerá as consequências.",
        "Os inimigos tomarão o poder e irão atrás de gente inocente!"
    ];
    let currentDialogueIndex = 0;

    const bubble = document.getElementById('bubble');
    const skipButton = document.getElementById('skipAll');
    const userName = localStorage.getItem('userName') || 'Recruta';

    function showNextDialogue() {
        currentDialogueIndex++;
        if (currentDialogueIndex < dialogues.length) {
            bubble.textContent = dialogues[currentDialogueIndex].replace('{name}', userName);
        } else {
            // Redirecionar para a próxima página ou ação
            window.location.href = 'finalRuim.html';
        }
    }

    bubble.textContent = dialogues[currentDialogueIndex].replace('{name}', userName);

    document.body.addEventListener('click', showNextDialogue);

    skipButton.addEventListener('click', () => {
        // Redirecionar para a próxima página ou ação
        window.location.href = 'finalRuim.html';
    });
});