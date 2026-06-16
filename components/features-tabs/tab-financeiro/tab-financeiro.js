import htmlContent from './tab-financeiro.html?raw';
import './tab-financeiro.css';

class TabFinanceiro extends HTMLElement {
  connectedCallback() {
    this.innerHTML = htmlContent;
  }
}

customElements.define('tab-financeiro', TabFinanceiro);
