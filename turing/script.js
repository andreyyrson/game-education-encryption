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
