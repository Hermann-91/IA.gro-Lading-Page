import htmlContent from './tab-ia.html?raw';
import './tab-ia.css';

class TabIa extends HTMLElement {
  connectedCallback() {
    this.innerHTML = htmlContent;
    this.setupChatSimulation();
  }

  setupChatSimulation() {
    const chatMessages = this.querySelector('.chat-messages');
    if (!chatMessages) return;

    const demoInteractions = [
      {
        q: "Qual a dosagem de NPK recomendada no plantio?",
        a: "No plantio do cacau, a dosagem recomendada varia entre 150g a 200g de Superfosfato Simples por cova, misturado à terra da superfície. Após 3 meses, faça a cobertura com cerca de 50g de ureia ou sulfato de amônio."
      },
      {
        q: "Como combato a monilíase do cacaueiro?",
        a: "A monilíase é altamente destrutiva. O combate envolve remoção imediata dos frutos infectados (antes de esporularem), poda para aumentar ventilação e aplicação preventiva de fungicidas cúpricos no início do período chuvoso."
      }
    ];

    let index = 0;

    this._intervalId = setInterval(() => {
      const interaction = demoInteractions[index];
      index = (index + 1) % demoInteractions.length;

      const userMsg = document.createElement('div');
      userMsg.className = 'msg user';
      userMsg.textContent = interaction.q;
      chatMessages.appendChild(userMsg);
      chatMessages.scrollTop = chatMessages.scrollHeight;

      setTimeout(() => {
        if (this._destroyed) return;
        
        const botMsg = document.createElement('div');
        botMsg.className = 'msg bot';
        chatMessages.appendChild(botMsg);
        
        let charIndex = 0;
        const text = interaction.a;
        
        const typeChar = () => {
          if (this._destroyed) return;
          if (charIndex < text.length) {
            botMsg.textContent += text.charAt(charIndex);
            charIndex++;
            chatMessages.scrollTop = chatMessages.scrollHeight;
            setTimeout(typeChar, 15);
          }
        };
        
        typeChar();
      }, 1000);

      setTimeout(() => {
        if (this._destroyed) return;
        if (chatMessages.children.length > 5) {
          chatMessages.removeChild(chatMessages.children[0]);
          chatMessages.removeChild(chatMessages.children[0]);
        }
      }, 8000);

    }, 12000);
  }

  disconnectedCallback() {
    this._destroyed = true;
    if (this._intervalId) {
      clearInterval(this._intervalId);
    }
  }
}

customElements.define('tab-ia', TabIa);
