/*window.addEventListener('scroll', function () {
    const logo = document.querySelector('.logo');
    const logoImg = document.getElementById('logo');
    const scrollY = window.scrollY;
    const maxScale = 1;
    const minScale = 0.5;
    const startPos = 200; // Início do efeito
    const endPos = 600;   // Fim do efeito

    // Cálculo da proporção do scroll
    const scrollRange = endPos - startPos;
    let scale = maxScale - (scrollY - startPos) / scrollRange;

    // Limitar o valor de escala
    if (scale < minScale) scale = minScale;
    if (scrollY < startPos) scale = maxScale;

    // Aplicar transformação conforme o scroll
    if (scrollY >= startPos && scrollY <= endPos) {
        logo.style.transform = `translateY(${-(scrollY - startPos)}px) scale(${scale})`;
    }

    // Fixar a logo no topo e na esquerda
    if (scrollY > endPos) {
        logo.classList.add('fixed-logo');
    } else {
        logo.classList.remove('fixed-logo');
    }
});*/

//-------------------------------------------------------------------------
/*window.addEventListener('scroll', function () {
    const logoContainer = document.querySelector('.logo');
    const logoImg = document.getElementById('logo');
    const scrollY = window.scrollY;
    const startPos = 50; // Começa a partir de 150px de scroll
    const endPos = 330;   // Fim do efeito aos 600px de scroll

    // Cálculo da escala com base no scroll
    const scrollRange = endPos - startPos;
    let scale = 1 - (scrollY - startPos) / scrollRange; // Diminui a escala gradualmente
    if (scale < 0.5) scale = 0.5; // Limita a escala a 0.5
    if (scrollY < startPos) scale = 1;

    // Move e redimensiona a logo conforme o scroll
    if (scrollY >= startPos && scrollY <= endPos) {
        logoContainer.style.transform = `translateY(${-(scrollY - startPos)}px) scale(${scale})`;
    }

    // Fixa a logo no topo e ajusta seu tamanho ao atingir o fim do efeito
    if (scrollY > endPos) {
        logoContainer.classList.add('fixed-logo');
    } else {
        logoContainer.classList.remove('fixed-logo');
    }
});*/

//---------------------------------------------------------------------
// JavaScript para o efeito de rolagem
/*window.addEventListener('scroll', function() {
    const logo = document.querySelector('#logo');
    const logoContainer = document.querySelector('.logo');
    
    
    // Calcula o valor de scale baseado no scroll
    const startPos = 10; // Posição onde a escala começa
    const endPos = 350; // Posição onde a escala termina
    const scrollPos = window.scrollY;
    
    // Verifica a posição do scroll e ajusta a escala da imagem
    let scale = 1;
    if (scrollPos >= startPos && scrollPos <= endPos) {
        scale = 1 - (scrollPos - startPos) / (endPos - startPos) * (1 - 0.5);
    } else if (scrollPos > endPos) {
        scale = 0.5;
    }

    // Aplica a transformação na imagem
    logo.style.transform = `scale(${scale})`;
    
    // Ajusta a altura da div logo conforme a escala da imagem
    logoContainer.style.height = `${logo.offsetHeight * scale}px`;
    
    // Adiciona ou remove a classe fixed-logo com base na rolagem
    if (scrollPos > startPos) {
        logoContainer.classList.add('fixed-logo');
    } else {
        logoContainer.classList.remove('fixed-logo');
    }
});*/

//-------------------------------------------------------------------------
// JavaScript para o efeito de rolagem
window.addEventListener('scroll', function () {
    const logo = document.querySelector('#logo');
    const logoContainer = document.querySelector('.logo');

    // Calcula o valor de scale baseado no scroll
    const startPos = 10;  // Posição onde a escala começa
    const endPos = 350;   // Posição onde a escala termina
    const scrollPos = window.scrollY;

    console.log(scrollPos);

    // Verifica a posição do scroll e ajusta a escala da imagem
    let scale = 1;
    if (scrollPos >= startPos && scrollPos <= endPos) {
        scale = 1 - (scrollPos - startPos) / (endPos - startPos) * (1 - 0.5);
    } else if (scrollPos > endPos) {
        scale = 0.5;
    }

    // Aplica a transformação na imagem (escala e deslocamento no eixo X)
    const translateX = Math.min(scrollPos / 2, 50); // Limita o deslocamento no eixo X a 10px
    logo.style.transform = `scale(${scale}) translateX(${translateX}px)`;

    // Ajusta a altura da div logo conforme a escala da imagem
    logoContainer.style.height = `${logo.offsetHeight * scale}px`;

    // Monitora a posição da div logo e aplica a classe fixed-logo quando atinge o topo
    const logoRect = logoContainer.getBoundingClientRect();
    if (logoRect.top <= 0) {
        logoContainer.classList.add('fixed-logo');
        logoContainer.style.display = 'block';  // Muda de flex para block

        // Adiciona margens para ajustar a posição da imagem ao atingir o topo
        logo.style.margimleft = '10px';
        logo.style.margimtop = '10px';
        logo.style.position = 'relative';

    } else {
        logoContainer.classList.remove('fixed-logo');
        logoContainer.style.display = 'flex';

        // Remove margens quando a logo não está no topo
        logo.style.marginleft = '0px';
        logo.style.margintop = '0px';
    }
});



