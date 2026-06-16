import htmlContent from './problem-section.html?raw';
import './problem-section.css';

class ProblemSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = htmlContent;
  }
}

customElements.define('problem-section', ProblemSection);
