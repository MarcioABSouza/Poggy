import OverworldMap from './OverworldMap.js';
import DirectionInput from './DirectionInput.js';
import KeyPressListener from './KeyPressListener.js';
class Overworld {
    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector('.game-canvas');
        this.ctx = this.canvas.getContext('2d')
        this.map = null;
        this.document = document;
        this.sound = new Howl({
            src: ['../audio/main.mp3'],
            loop: true,
            volume: 0.1,
        });
    }


    startGameLoop() {
        const step = () => {

            //Clear Canvas
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

            //Stablishes camera person
            const cameraPerson = this.map.gameObjects.hero;

            //update all objects
            Object.values(this.map.gameObjects).forEach(object => {
                object.update({ arrow: this.directionInput.direction, map: this.map });
            })

            //draw lower layer
            this.map.drawLowerImage(this.ctx, cameraPerson);

            //draw game objects
            Object.values(this.map.gameObjects)
                .sort((a, b) => { return a.y - b.y })
                .forEach(object => { object.sprite.draw(this.ctx, cameraPerson); })

            //draw upper layer
            this.map.drawUpperImage(this.ctx, cameraPerson);


            requestAnimationFrame(() => {
                step();
            })
        }
        step();
    }

    bindActionInput() {
        new KeyPressListener('Enter', () => {
            //Is there a person her to talk to?
            this.map.checkForActionCutscene();
        })

        this.document.querySelector('#button-a').addEventListener('click', () => {
            this.map.checkForActionCutscene();

        })

    }

    bindHeroPositionCheck() {
        this.document.addEventListener('PersonWalkingComplete', e => {
            if (e.detail.whoId === 'hero') {
                this.map.checkForFootstepCutscene()
            }
        })
    }

    startMap(mapConfig) {
        this.map = new OverworldMap(mapConfig);
        this.map.overworld = this;
        this.map.mountObjects();
    }




    init() {
        this.startMap(window.OverworldMaps.DemoRoom);

        this.bindActionInput();
        this.bindHeroPositionCheck();


        this.directionInput = new DirectionInput();
        this.directionInput.init();
        this.startGameLoop();
        this.sound.play();

        this.map.startCutscene([
            { who: 'hero', type: 'stand', direction: 'down', time: 1000 },
            { who: 'hero', type: 'stand', direction: 'left', time: 1000 },
            { who: 'hero', type: 'stand', direction: 'right', time: 1000 },
            { who: 'hero', type: 'stand', direction: 'down' },

            { type: 'textMessage', text: 'Aqui vamos mós, mais um dia!' }
        ])
    }
}

export default Overworld;