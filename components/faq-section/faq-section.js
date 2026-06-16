import htmlContent from './faq-section.html?raw';
import './faq-section.css';

class FaqSection extends HTMLElement {
    constructor() {
        super();
        this._listeners = [];
    }

    connectedCallback() {
        this.innerHTML = htmlContent;
        this.initAccordion();
    }

    initAccordion() {
        const faqQuestions = this.querySelectorAll('.faq-question');
        const faqItems = this.querySelectorAll('.faq-item');

        faqQuestions.forEach(question => {
            const clickHandler = () => {
                const faqItem = question.parentElement;
                const faqAnswer = question.nextElementSibling;

                // Fecha outros itens do FAQ se abertos
                faqItems.forEach(item => {
                    if (item !== faqItem && item.classList.contains('active')) {
                        item.classList.remove('active');
                        const answer = item.querySelector('.faq-answer');
                        if (answer) answer.style.maxHeight = null;
                    }
                });

                // Alterna o estado do item clicado
                faqItem.classList.toggle('active');

                if (faqItem.classList.contains('active')) {
                    faqAnswer.style.maxHeight = faqAnswer.scrollHeight + 'px';
                } else {
                    faqAnswer.style.maxHeight = null;
                }
            };

            question.addEventListener('click', clickHandler);
            this._listeners.push({ element: question, type: 'click', fn: clickHandler });
        });
    }

    disconnectedCallback() {
        // Remove event listeners para evitar memory leaks
        this._listeners.forEach(({ element, type, fn }) => {
            element.removeEventListener(type, fn);
        });
        this._listeners = [];
    }
}

customElements.define('faq-section', FaqSection);
