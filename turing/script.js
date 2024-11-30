document.addEventListener("DOMContentLoaded", function () {

    const startButton = document.getElementById("startGame");

    // Função para redirecionar para a primeira fase do jogo
    startButton.addEventListener("click", function () {
        startButton.disabled = true;
        startButton.textContent = "Preparando sua missão...";

        // Após 2 segundos, redireciona para a primeira fase
        setTimeout(function () {
            window.location.href = "fase1.html"; // Redirecionamento para a fase 1
        }, 5000);
    });

    // Animar o título principal
    const title = document.querySelector("h1");
    title.classList.add("animate__animated", "animate__fadeInUp");
});
