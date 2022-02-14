import KeyPressListener from "./controllers/KeyPressListener.js";

class TextMessage {
    constructor({ text, onComplete }) {
        this.text = text;
        this.onComplete = onComplete;
        this.element = null;
        this.document = document;
    }


    createElement() {

        this.element = document.createElement('div');
        this.element.classList.add('TextMessage');

        this.element.innerHTML = (`
        <p class='TextMessage_paragraph'>${this.text}</p>
        <button id='TextMessage_button' class='TextMessage_button'>Next</button>
        `)

        this.element.querySelector('#TextMessage_button').addEventListener('click', () => {
            //Close the text message
            this.done();
        })

        this.actionListener = new KeyPressListener('Enter', () => {
            this.actionListener.unbind();
            this.done();
        });

        this.document.querySelector('#button-a').addEventListener('click', () => {
            //Close the text message
            this.done();
        })
    }

    done() {
        this.element.remove();
        this.onComplete();
    }

    init(container) {
        this.createElement();
        container.appendChild(this.element);
    }

}

export default TextMessage;