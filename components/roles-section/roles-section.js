import htmlContent from './roles-section.html?raw';
import './roles-section.css';

class RolesSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = htmlContent;
  }
}

customElements.define('roles-section', RolesSection);
