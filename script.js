const userInput = document.getElementById("userInput");
const animatedText = document.getElementById("animatedText");

// Exibir texto à medida que você digita
userInput.addEventListener("input", () => {
    animatedText.textContent = userInput.value;
});

// Adicionar evento para a tecla Enter
userInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault(); // Impede o comportamento padrão (como envio de formulário)
        animatedText.textContent = userInput.value; // Atualiza o texto
    }
});
