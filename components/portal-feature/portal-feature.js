import htmlContent from './portal-feature.html?raw';
import './portal-feature.css';

class PortalFeature extends HTMLElement {
  connectedCallback() {
    this.innerHTML = htmlContent;
  }
}

customElements.define('portal-feature', PortalFeature);
