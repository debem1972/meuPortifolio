document.addEventListener("DOMContentLoaded", function () {
    const introText = document.getElementById('intro-text');
    introText.textContent = '<p>Oi! Muito prazer! Eu sou o Daniel! Seja bem vindo ao meu portifólio!</p>';
    setTimeout(() => {
        setTimeout(() => {
            introText.style.display = 'none';
            const logo = document.querySelector('.logo');
            logo.style.display = 'block';
            setTimeout(() => {
                logo.style.opacity = '1';  // Aplica a transição de opacidade
            }, 100);  // Um pequeno delay para garantir que a transição seja aplicada
        }, 4000);  // Tempo de exibição antes de ocultar o texto e mostrar a logo.
    }, 9000); //Tempo total da animação da digitação
});