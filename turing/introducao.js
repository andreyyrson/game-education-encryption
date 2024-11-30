document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("startGame");

    // Função para redirecionar para a introdução
    startButton.addEventListener("click", function () {
        const userName = prompt("Por favor, insira seu nome:");
        if (userName) {
            localStorage.setItem('userName', userName);
            window.location.href = "introducao.html";
        }
    });

    // Animar o título principal
    const title = document.querySelector("h1");
    title.classList.add("animate__animated", "animate__fadeInUp");
});



document.addEventListener('DOMContentLoaded', (event) => {
    const dialogues = [
        "Bem-vindo à Operação Cripto, {name}!",
        "Você foi convidado para participar desta missão que vai mudar o rumo da humanidade",
        "Precisamos de todo seu esforço para nos ajudar a encontrar a posição dos nazistas!",
        "Atualmente eles estão avançado, mas não sabemos onde",
        "Caso você me ajude a encontrar, venceremos a guerra!",
        "Você está pronto, {name}?"
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
            window.location.href = 'fase1.html';
        }
    }

    bubble.textContent = dialogues[currentDialogueIndex].replace('{name}', userName);

    document.body.addEventListener('click', showNextDialogue);

    skipButton.addEventListener('click', () => {
        // Redirecionar para a próxima página ou ação
        window.location.href = 'fase1.html';
    });
});