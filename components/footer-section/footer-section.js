import htmlContent from './footer-section.html?raw';
import './footer-section.css';

class FooterSection extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = htmlContent;
    }
}

customElements.define('footer-section', FooterSection);
