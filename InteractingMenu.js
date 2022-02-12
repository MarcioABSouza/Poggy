import KeyboardMenu from "./KeyboardMenu.js";

class InteractingMenu {
  constructor({ textOptions, reactionsToVocabulary, onComplete }) {
    this.textOptions = textOptions || [
      { label: "Pesquisar", description: "Faça uma busca!" },
    ];
    this.onComplete = onComplete;
    this.reactionsToVocabulary = reactionsToVocabulary;
  }

  getOptions() {
    return [
      ...this.textOptions.map((text) => {
        return {
          label: text.label,
          description: text.description,
          handler: () => {
            let menuOptions =
              text.options && text.options.length > 0
                ? text.options
                : window.playerState.vocabulary;

            this.keyboardMenu.setOptions(
            [  ...menuOptions.map((word) => {
                return {
                  label: word.label || word,
                  description: word.description || "",
                  handler: () => {
                    this.remove();
                    this.handleOption(word);
                  },
                };
              }),
              this.standardMenuOptions()
            ]);
          },
        };
      }),
      this.standardMenuOptions()
    ];
  }

  standardMenuOptions (){
    return {
        label: "Sair",
        description: "Sair do menu.",
        handler: () => {
          this.close();
        },
    }
  }

  async handleOption(word) {
    if (word.events) {
        return await window.OverworldMap.map.startCutscene(word.events);
    }

    await window.OverworldMap.map.startCutscene(
      this.reactionsToVocabulary[word] || this.reactionsToVocabulary.DontKnow
    );
  }

  createElement() {
    this.element = document.createElement("div");
    this.element.classList.add("InteractingMenu");
    this.element.classList.add("overlayMenu");
    this.element.innerHTML = `
        <h2>Selecione uma opção</h2>
      `;
  }

  close() {
    this.keyboardMenu.end();
    this.element.remove();
    this.onComplete();
  }

  remove() {
    this.keyboardMenu.end();
    this.element.remove();
  }

  init(container) {
    this.createElement();
    this.keyboardMenu = new KeyboardMenu({
      descriptionContainer: container,
    });
    this.keyboardMenu.init(this.element);
    this.keyboardMenu.setOptions(this.getOptions());

    container.appendChild(this.element);
  }
}

export default InteractingMenu;
