document.addEventListener("DOMContentLoaded", function () {
    const introText = document.getElementById('intro-text');
    const logo = document.querySelector('.logo');
    const title = document.querySelector('.title');

    introText.textContent = '<p>Oi! Muito prazer! Eu sou o Daniel! Seja bem vindo ao meu portifólio!</p>';

    setTimeout(() => {
        setTimeout(() => {
            introText.style.display = 'none';
            logo.style.display = 'block';
            setTimeout(() => {
                logo.style.opacity = '1';  // Aplica a transição de opacidade
                title.style.opacity = '1'; // Mostra o título junto com a logo
            }, 100);  // Um pequeno delay para garantir que a transição seja aplicada
        }, 4000);  // Tempo de exibição antes de ocultar o texto e mostrar a logo.
    }, 9000); //Tempo total da animação da digitação
});

//------------------------------------------------------------------------
//Efeito de scroll na logo e no h3
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    var minhaLogo = document.getElementById("logo");
    var logo = document.querySelector(".logo");
    var imgTitle = document.querySelector("#danielTitle");

    // Efeito de redução e movimento da logo e do h3
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        minhaLogo.style.height = "5em";
        minhaLogo.style.width = "5em";
        minhaLogo.style.position = 'relative';
        minhaLogo.style.marginLeft = '10px';
        minhaLogo.style.marginTop = '0';
        imgTitle.style.display = 'block';
        logo.style.height = '30px';
    } else {
        minhaLogo.style.height = "40em";
        minhaLogo.style.width = "40em";
        minhaLogo.style.position = 'absolute';
        minhaLogo.style.marginLeft = '36%';
        minhaLogo.style.marginTop = '20%';
        imgTitle.style.display = 'none';
        logo.style.height = '600px';        
    }
}
