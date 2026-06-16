import htmlContent from './features-tabs.html?raw';
import './features-tabs.css';
import './tab-financeiro/tab-financeiro.js';
import './tab-tarefas/tab-tarefas.js';
import './tab-ia/tab-ia.js';

class FeaturesTabs extends HTMLElement {
  connectedCallback() {
    this.innerHTML = htmlContent;
    this.setupTabs();
  }

  setupTabs() {
    const tabButtons = this.querySelectorAll('.tab-btn');
    const tabPanes = this.querySelectorAll('.tab-pane');

    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        const targetTab = button.getAttribute('data-tab');

        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabPanes.forEach(pane => pane.classList.remove('active'));

        button.classList.add('active');
        const activePane = this.querySelector(`#tab-${targetTab}`);
        if (activePane) {
          activePane.classList.add('active');
        }
      });
    });
  }
}

customElements.define('features-tabs', FeaturesTabs);
