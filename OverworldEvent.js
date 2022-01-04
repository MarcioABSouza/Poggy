import SceneTransition from "./SceneTransition.js";
import TextMessage from "./TextMessage.js";
import utils from "./utils.js";
import InteractingMenu from './InteractingMenu.js';
class OverworldEvent {
    constructor({ map, event }) {
        this.map = map;
        this.event = event;
    }

    stand(resolve) {
        const who = this.map.gameObjects[this.event.who]

        who.startBehavior({ map: this.map }, { type: 'stand', direction: this.event.direction, time: this.event.time });

        const completeHandler = e => {
            if (e.detail.whoId === this.event.who) {
                document.removeEventListener('PersonStandComplete', completeHandler);
                resolve();
            }
        }

        document.addEventListener('PersonStandComplete', completeHandler);

    };

    walk(resolve) {

        const who = this.map.gameObjects[this.event.who]

        who.startBehavior({ map: this.map }, { type: 'walk', direction: this.event.direction, retry: true });

        const completeHandler = e => {
            if (e.detail.whoId === this.event.who) {
                document.removeEventListener('PersonWalkingComplete', completeHandler);
                resolve();
            }
        }

        document.addEventListener('PersonWalkingComplete', completeHandler);

    }

    textMessage(resolve) {
        if (this.event.faceHero) {
            const obj = this.map.gameObjects[this.event.faceHero];
            obj.direction = utils.oppositeDirection(this.map.gameObjects['hero'].direction);
        }

        let keywords = this.event.text.split(' ').filter(word => (word.includes('#')));
        if (keywords.length){
            keywords.forEach(word =>{
                let keyword = word.substring(1);
                if(!window.playerState.vocabulary.includes(keyword)){
                    window.playerState.vocabulary.push(keyword);
                }
            });
        };

        const message = new TextMessage({
            text: this.event.text,
            onComplete: () => resolve()
        });

        message.init(document.querySelector('.game-container'))
    }

    changeMap(resolve) {
        const sceneTransition = new SceneTransition();
        sceneTransition.init(document.querySelector('.game-container'), () => {
            this.map.overworld.startMap(window.OverworldMaps[this.event.map]);
            resolve()

            sceneTransition.fadeOut();
        })

    }

    take(resolve) {
        delete this.map.gameObjects[this.event.who];
        resolve()
    }

    addStoryFlag(resolve) {
        window.playerState.storyFlags[this.event.flag] = true;
        resolve();
    }

    interactingMenu(resolve) {
        const menu = new InteractingMenu({
            textOptions: this.event.textOptions,
            reactionsToVocabulary: this.event.reactionsToVocabulary,
            talkingEvents:this.event.talkingEvents,
            onComplete: () => {
                resolve();
            }
        })
        menu.init(document.querySelector(".game-container"))
    }


    addCutsceneSpace(resolve) {
        window.OverworldMaps[this.event.map].cutsceneSpaces[this.event.placeCoords] = this.event.eventToBeAdd;
        resolve();
    }


    init() {
        return new Promise(resolve => {
            this[this.event.type](resolve);
        })
    }
}

export default OverworldEvent;