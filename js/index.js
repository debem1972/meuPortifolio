document.addEventListener("DOMContentLoaded", function () {
    const introText = document.getElementById('intro-text');
    introText.textContent = '<p>Oi! Muito prazer! Eu sou o Daniel! Seja bem vindo ao meu portifólio!</p>';
    setTimeout(() => {
        //introText.innerHTML = '&lt;/&gt;';  //Tag de fechamento </>
        setTimeout(() => {
            introText.style.display = 'none';
            document.querySelector('.logo').style.display = 'block';
        }, 4000);  // Tempo de exibição do '&lt;/&gt;' antes de ocultar o texto e mostrar a logo.
    }, 9000); //Tempo total da animação da digitação
});