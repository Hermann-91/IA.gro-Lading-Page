import htmlContent from './menu-bar.html?raw';
import './menu-bar.css';

class MenuBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = htmlContent;
    this.setupThemeToggle();
    this.setupMenuToggle();
  }

  setupThemeToggle() {
    const themeToggle = this.querySelector('#themeToggle');
    const themeIcon = themeToggle ? themeToggle.querySelector('.theme-icon') : null;
    
    // Recupera a preferência salva - padrão (default) definido como 'light'
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    if (currentTheme === 'light') {
      document.body.classList.add('light-theme');
      if (themeIcon) themeIcon.textContent = '☀️';
    } else {
      document.body.classList.remove('light-theme');
      if (themeIcon) themeIcon.textContent = '🌙';
    }

    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        
        let theme = 'dark';
        if (document.body.classList.contains('light-theme')) {
          theme = 'light';
          if (themeIcon) themeIcon.textContent = '☀️';
        } else {
          if (themeIcon) themeIcon.textContent = '🌙';
        }
        
        localStorage.setItem('theme', theme);
      });
    }
  }

  setupMenuToggle() {
    const menuToggle = this.querySelector('#menuToggle');
    const navLinks = this.querySelector('.nav-links');

    if (menuToggle && navLinks) {
      menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const spans = menuToggle.querySelectorAll('span');
        spans.forEach(span => span.classList.toggle('active'));
      });
      
      const links = navLinks.querySelectorAll('a');
      links.forEach(link => {
        link.addEventListener('click', () => {
          navLinks.classList.remove('active');
          const spans = menuToggle.querySelectorAll('span');
          spans.forEach(span => span.classList.remove('active'));
        });
      });
    }
  }
}

customElements.define('menu-bar', MenuBar);
