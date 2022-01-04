import KeyboardMenu from "./KeyboardMenu.js";

class InteractingMenu {
    constructor({ textOptions, reactionsToVocabulary, onComplete }) {
        this.textOptions = textOptions || [{label:'Perguntar', description:'Pergunte algo.'}];
        this.onComplete = onComplete;
        this.reactionsToVocabulary = reactionsToVocabulary;
    }

    getOptions() {
        
       return [
            ...this.textOptions.map(text => {
        return {
            label: text.label,
            description:text.description,
            handler: () => {
                this.keyboardMenu.setOptions(     
                    window.playerState.vocabulary.map(word =>{
                        return {label: word,
                        description: '... sabe algo sobre?',
                        handler: ()=> {
                            this.remove()
                            this.handleOption(word);
                        }
                        }
                    })                
                )
            }
        }
    }),
    {
        label: 'Sair',
        description:'Sair do menu.',
        handler: () => {
            this.close()
        }
       },
    ]
}

    async handleOption(word){
        await window.OverworldMap.map.startCutscene(this.reactionsToVocabulary[word] || this.reactionsToVocabulary.DontKnow)
    };

    createElement() {
        this.element = document.createElement("div");
        this.element.classList.add("InteractingMenu");
        this.element.classList.add("overlayMenu");
        this.element.innerHTML = (`
        <h2>Select one option!</h2>
      `)
    }

    close() {
        this.keyboardMenu.end();
        this.element.remove();
        this.onComplete();
    }

    remove(){
        this.keyboardMenu.end();
        this.element.remove();
    }


    init(container) {
        this.createElement();
        this.keyboardMenu = new KeyboardMenu({
            descriptionContainer: container
        })
        this.keyboardMenu.init(this.element)
        this.keyboardMenu.setOptions(this.getOptions())

        container.appendChild(this.element);
    }
}

export default InteractingMenu;