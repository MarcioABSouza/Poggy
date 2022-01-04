import Sprite from "./Sprite.js";
import OverworldEvent from "./OverworldEvent.js";

class GameObject {
    constructor(config) {
        this.id = null;
        this.isMounted = false;
        this.x = config.x || 0;
        this.y = config.y || 0;
        this.direction = config.direction || 'down';
        this.sprite = new Sprite({
            gameObject: this,
            src: config.src || 'images/characters/npc.png'
        });

        this.behaviorLoop = config.behaviorLoop || [];
        this.behaviorLoopIndex = 0;

        this.talking = config.talking || [];
        this.reactionsToVocabulary = config.reactionsToVocabulary || [];
    }

    mount(map) {
        this.isMounted = true;
        map.addWall(this.x, this.y);

        setTimeout(() => {
            this.doBehaviorEvent(map);
        })
    }

    update() {

    }

    async doBehaviorEvent(map) {

        //Dont do anything if there is a more important scene or there is no config
        if (map.isCutscenePlaying || this.behaviorLoop.length === 0 || this.isStanding) {
            return;
        }

        //Setting up our event with relevant info
        let eventConfig = this.behaviorLoop[this.behaviorLoopIndex];
        eventConfig.who = this.id;

        //Create an event instance
        const eventHandler = new OverworldEvent({ map, event: eventConfig });
        await eventHandler.init();

        // Setting the next event to fire
        this.behaviorLoopIndex += 1;
        if (this.behaviorLoopIndex === this.behaviorLoop.length) {
            this.behaviorLoopIndex = 0
        }

        //Do it again
        this.doBehaviorEvent(map);

    }
}

export default GameObject;