import htmlContent from './pricing-section.html?raw';
import './pricing-section.css';

class PricingSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = htmlContent;
  }
}

customElements.define('pricing-section', PricingSection);
