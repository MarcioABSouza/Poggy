import Person from './Person.js';
import utils from './utils.js';
import OverworldEvent from './OverworldEvent.js';
class OverworldMap {
    constructor(config) {
        this.overworld = null;
        this.gameObjects = config.gameObjects;
        this.cutsceneSpaces = config.cutsceneSpaces || {};
        this.walls = config.walls || {}

        this.lowerImage = new Image();
        this.lowerImage.src = config.lowerSrc;

        this.upperImage = new Image();
        this.upperImage.src = config.upperSrc;

        this.isCutscenePlaying = false;
    }


    drawLowerImage(ctx, cameraPerson) {
        ctx.drawImage(
            this.lowerImage,
            utils.withGrid(10.5) - cameraPerson.x,
            utils.withGrid(6) - cameraPerson.y
        );

    }

    drawUpperImage(ctx, cameraPerson) {
        ctx.drawImage(
            this.upperImage,
            utils.withGrid(10.5) - cameraPerson.x,
            utils.withGrid(6) - cameraPerson.y
        );

    }

    isSpaceTaken(currentX, currentY, direction) {
        const { x, y } = utils.nextPosition(currentX, currentY, direction);
        return this.walls[`${x},${y}`] || false;
    }

    mountObjects() {
        Object.keys(this.gameObjects).forEach(key => {

            let object = this.gameObjects[key];
            object.id = key;

            object.mount(this);
        })
    }

    async startCutscene(events) {
        this.isCutscenePlaying = true;

        for (let i = 0; i < events.length; i++) {
            const eventHandler = new OverworldEvent({
                event: events[i],
                map: this
            })
            await eventHandler.init();
        }

        this.isCutscenePlaying = false;

        Object.values(this.gameObjects).forEach(object => object.doBehaviorEvent(this));
    }

    checkForActionCutscene() {
        const hero = this.gameObjects['hero'];
        const nextCoords = utils.nextPosition(hero.x, hero.y, hero.direction);
        const match = Object.values(this.gameObjects).find(object => {
            return `${object.x},${object.y}` === `${nextCoords.x},${nextCoords.y}`
        });
        if (!this.isCutscenePlaying && match && match.talking.length) {
            this.startCutscene(match.talking[0].events);
        }
    }

    checkForFootstepCutscene() {
        const hero = this.gameObjects['hero'];
        const match = this.cutsceneSpaces[`${hero.x},${hero.y}`];

        //utils.heroPositionHelper(hero.x, hero.y);

        if (!this.isCutscenePlaying && match) {
            this.startCutscene(match[0].events);
        }

    }

    addWall(x, y) {
        this.walls[`${x},${y}`] = true;
    }

    removeWall(x, y) {
        delete this.walls[`${x},${y}`];
    }

    moveWall(wasX, wasY, direction) {
        this.removeWall(wasX, wasY);
        const { x, y } = utils.nextPosition(wasX, wasY, direction);
        this.addWall(x, y);
    }

}

window.OverworldMaps = {
    ShopRoom: {
        lowerSrc: 'images/maps/ShopLower.png',
        upperSrc: 'images/maps/ShopUpper.png',
        gameObjects: {
            hero: new Person({ x: utils.withGrid(5), y: utils.withGrid(11), isPlayerControlled: true, src: 'images/characters/hero.png' })
        },
        walls: {

            //Main Table
            [utils.asGridCoord(2, 4)]: true,
            [utils.asGridCoord(2, 5)]: true,
            [utils.asGridCoord(2, 6)]: true,
            [utils.asGridCoord(3, 6)]: true,
            [utils.asGridCoord(4, 6)]: true,
            [utils.asGridCoord(5, 6)]: true,
            [utils.asGridCoord(7, 6)]: true,
            [utils.asGridCoord(8, 6)]: true,
            [utils.asGridCoord(9, 6)]: true,
            [utils.asGridCoord(9, 5)]: true,
            [utils.asGridCoord(9, 4)]: true,

            //Left Table
            [utils.asGridCoord(3, 8)]: true,
            [utils.asGridCoord(3, 9)]: true,
            [utils.asGridCoord(3, 10)]: true,
            [utils.asGridCoord(4, 8)]: true,
            [utils.asGridCoord(4, 9)]: true,
            [utils.asGridCoord(4, 10)]: true,

            //Right Table
            [utils.asGridCoord(7, 8)]: true,
            [utils.asGridCoord(7, 9)]: true,
            [utils.asGridCoord(8, 8)]: true,
            [utils.asGridCoord(8, 9)]: true,



            //Top Wall
            [utils.asGridCoord(1, 3)]: true,
            [utils.asGridCoord(2, 3)]: true,
            [utils.asGridCoord(3, 3)]: true,
            [utils.asGridCoord(4, 3)]: true,
            [utils.asGridCoord(5, 3)]: true,
            [utils.asGridCoord(6, 3)]: true,
            [utils.asGridCoord(7, 2)]: true,
            [utils.asGridCoord(7, 3)]: true,
            [utils.asGridCoord(8, 3)]: true,
            [utils.asGridCoord(9, 3)]: true,
            [utils.asGridCoord(10, 3)]: true,

            //Left wall
            [utils.asGridCoord(0, 4)]: true,
            [utils.asGridCoord(0, 5)]: true,
            [utils.asGridCoord(0, 6)]: true,
            [utils.asGridCoord(0, 7)]: true,
            [utils.asGridCoord(0, 8)]: true,
            [utils.asGridCoord(0, 9)]: true,
            [utils.asGridCoord(0, 10)]: true,
            [utils.asGridCoord(0, 11)]: true,


            //Right wall
            [utils.asGridCoord(11, 4)]: true,
            [utils.asGridCoord(11, 5)]: true,
            [utils.asGridCoord(11, 6)]: true,
            [utils.asGridCoord(11, 7)]: true,
            [utils.asGridCoord(11, 8)]: true,
            [utils.asGridCoord(11, 9)]: true,
            [utils.asGridCoord(11, 10)]: true,
            [utils.asGridCoord(11, 11)]: true,


            //Bottom Wall
            [utils.asGridCoord(1, 12)]: true,
            [utils.asGridCoord(2, 12)]: true,
            [utils.asGridCoord(3, 12)]: true,
            [utils.asGridCoord(4, 12)]: true,
            [utils.asGridCoord(6, 12)]: true,
            [utils.asGridCoord(7, 12)]: true,
            [utils.asGridCoord(8, 12)]: true,
            [utils.asGridCoord(9, 12)]: true,
            [utils.asGridCoord(10, 12)]: true,

            //Door Wall
            [utils.asGridCoord(2, 3)]: true,
            [utils.asGridCoord(5, 13)]: true,

        },
        cutsceneSpaces: {
            [utils.asGridCoord(3, 5)]: [{
                events: [
                    { type: 'textMessage', text: 'Caixa absolutamente zerado.' },
                    { type: 'textMessage', text: 'Que azar...' },
                    { who: 'hero', type: 'walk', direction: 'right' },
                ]
            }],
            [utils.asGridCoord(5, 12)]: [{
                events: [
                    { type: 'changeMap', map: 'DemoRoom' }
                ]
            }]
        }
    },
    DemoRoom: {
        lowerSrc: 'images/maps/DemoLower.png',
        upperSrc: 'images/maps/DemoUpper.png',
        gameObjects: {
            hero: new Person({ x: utils.withGrid(6), y: utils.withGrid(6), isPlayerControlled: true, src: 'images/characters/hero.png' }),
            npc: new Person({
                x: utils.withGrid(3),
                y: utils.withGrid(6),
                behaviorLoop: [
                    { type: 'stand', direction: 'left', time: 800 },
                    { type: 'stand', direction: 'right', time: 1300 },
                    { type: 'stand', direction: 'up', time: 1800 },
                    { type: 'stand', direction: 'down', time: 300 },
                ],
                talking: [{
                    events: [
                        { type: 'textMessage', text: 'Esse é um jogo totalmente em JS...', faceHero: 'npc' },
                        { type: 'textMessage', text: 'Estamos em desenvolvimento...' },
                        { type: 'textMessage', text: 'Então tenha calma.' },
                        { who: 'hero', type: 'walk', direction: 'down' },

                    ]
                }]
            })
        },
        walls: {

            //Table 
            [utils.asGridCoord(7, 6)]: true,
            [utils.asGridCoord(8, 6)]: true,
            [utils.asGridCoord(7, 7)]: true,
            [utils.asGridCoord(8, 7)]: true,

            //Top Wall
            [utils.asGridCoord(1, 3)]: true,
            [utils.asGridCoord(2, 3)]: true,
            [utils.asGridCoord(3, 3)]: true,
            [utils.asGridCoord(4, 3)]: true,
            [utils.asGridCoord(5, 3)]: true,
            [utils.asGridCoord(6, 4)]: true,
            [utils.asGridCoord(8, 4)]: true,
            [utils.asGridCoord(7, 2)]: true,
            [utils.asGridCoord(6, 3)]: true,
            [utils.asGridCoord(8, 3)]: true,
            [utils.asGridCoord(9, 3)]: true,
            [utils.asGridCoord(10, 3)]: true,

            //Left wall
            [utils.asGridCoord(0, 4)]: true,
            [utils.asGridCoord(0, 5)]: true,
            [utils.asGridCoord(0, 6)]: true,
            [utils.asGridCoord(0, 7)]: true,
            [utils.asGridCoord(0, 8)]: true,
            [utils.asGridCoord(0, 9)]: true,

            //Right wall
            [utils.asGridCoord(11, 4)]: true,
            [utils.asGridCoord(11, 5)]: true,
            [utils.asGridCoord(11, 6)]: true,
            [utils.asGridCoord(11, 7)]: true,
            [utils.asGridCoord(11, 8)]: true,
            [utils.asGridCoord(11, 9)]: true,

            //Bottom Wall
            [utils.asGridCoord(1, 10)]: true,
            [utils.asGridCoord(2, 10)]: true,
            [utils.asGridCoord(3, 10)]: true,
            [utils.asGridCoord(4, 10)]: true,
            [utils.asGridCoord(6, 10)]: true,
            [utils.asGridCoord(7, 10)]: true,
            [utils.asGridCoord(8, 10)]: true,
            [utils.asGridCoord(9, 10)]: true,
            [utils.asGridCoord(10, 10)]: true,

            //Door Wall
            [utils.asGridCoord(2, 3)]: true,
        },
        cutsceneSpaces: {
            [utils.asGridCoord(5, 10)]: [{
                events: [
                    { type: 'textMessage', text: 'Não tem nada pra fazer lá fora!' },
                    { who: 'hero', type: 'walk', direction: 'up' },
                ]
            }],
            [utils.asGridCoord(7, 3)]: [{
                events: [
                    { type: 'changeMap', map: 'ShopRoom' },
                ]
            }]
        }
    }
}

export default OverworldMap;