import htmlContent from './tab-tarefas.html?raw';
import './tab-tarefas.css';

class TabTarefas extends HTMLElement {
  connectedCallback() {
    this.innerHTML = htmlContent;
  }
}

customElements.define('tab-tarefas', TabTarefas);
