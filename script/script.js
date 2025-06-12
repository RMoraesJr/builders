/**
 * Cria um carrossel de background-image em qualquer seletor.
 * @param {string} selector - Seletor CSS do elemento alvo (ex: '.hero')
 * @param {string[]} images - Array de caminhos das imagens
 * @param {number} interval - Tempo em ms entre trocas (default: 4000)
 */
function backgroundCarousel(selector, images, interval = 4000) {
  const el = document.querySelector(selector);
  if (!el || !images || images.length === 0) return;
  let idx = 0;

  function setBg() {
    el.style.backgroundImage = `url('${images[idx]}')`;
    idx = (idx + 1) % images.length;
  }

  setBg();
  setInterval(setBg, interval);
}

// Só executa após o DOM estar pronto
document.addEventListener('DOMContentLoaded', function() {
  // Carrossel da Home (se existir)
  if (document.querySelector('.hero')) {
    backgroundCarousel('.hero', [
      'img/Mediterranean style/w1024 (1).jpg',
      'img/Mediterranean style/w1024 (10).jpg',
      'img/Mediterranean style/w1024 (11).jpg',
      'img/Mediterranean style/w1024 (12).jpg',
      'img/Mediterranean style/w1024 (13).jpg'
    ], 4000);
  }

  // Carrossel dos projetos (na página projetos)
  if (document.getElementById('proj-mediterranean')) {
    backgroundCarousel('#proj-mediterranean .project-hero', [
      '../img/Mediterranean style/w1024 (1).jpg',
      '../img/Mediterranean style/w1024 (10).jpg',
      '../img/Mediterranean style/w1024 (11).jpg'
    ], 3500);

    backgroundCarousel('#proj-modern .project-hero', [
      '../img/Modern style/modern1.jpg',
      '../img/Modern style/modern2.jpg',
      '../img/Modern style/modern3.jpg'
    ], 3500);

    backgroundCarousel('#proj-classic .project-hero', [
      '../img/Classic style/classic1.jpg',
      '../img/Classic style/classic2.jpg',
      '../img/Classic style/classic3.jpg'
    ], 3500);
  }
});