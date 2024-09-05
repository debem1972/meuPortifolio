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

//------------------------------------------------------------------------
//Efeito parecido ao watss
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    var logo = document.querySelector(".logo");
    var scrollContent = document.getElementById("scroll-content");

    // Efeito de redução e movimento da logo
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        // Adiciona a classe que reduz e posiciona a logo no topo
        logo.classList.add("logo-small");
    } else {
        // Remove a classe quando o scroll retorna ao topo
        logo.classList.remove("logo-small");
    }

    // Exibir conteúdo fictício de forma suave após rolar 200px
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollContent.classList.add("visible");
    } else {
        scrollContent.classList.remove("visible");
    }
}
//-----------------------------------------------------------------