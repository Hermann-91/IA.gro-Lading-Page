import htmlContent from './hero-section.html?raw';
import './hero-section.css';

class HeroSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = htmlContent;
    this.setupEscassez();
  }

  setupEscassez() {
    const vagasRestantesSpan = this.querySelector('#vagas-restantes');
    if (vagasRestantesSpan) {
      let vagas = 45;
      
      this._intervalId = setInterval(() => {
        if (vagas > 3) {
          vagas--;
          vagasRestantesSpan.textContent = vagas;
          
          // Efeito visual no badge
          vagasRestantesSpan.parentElement.style.transform = 'scale(1.05)';
          setTimeout(() => {
            vagasRestantesSpan.parentElement.style.transform = 'scale(1)';
          }, 200);
        } else {
          clearInterval(this._intervalId);
        }
      }, 15000);
    }
  }

  // O ciclo de vida executado quando o elemento é removido do DOM
  disconnectedCallback() {
    if (this._intervalId) {
      clearInterval(this._intervalId);
    }
  }
}

customElements.define('hero-section', HeroSection);
