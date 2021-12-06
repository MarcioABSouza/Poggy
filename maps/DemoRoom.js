import Person from '../Person.js';
import utils from '../utils.js';


export default {
    lowerSrc: 'images/maps/DemoLower.png',
    upperSrc: 'images/maps/DemoUpper.png',
    gameObjects: {
        hero: new Person({ x: utils.withGrid(6), y: utils.withGrid(6), isPlayerControlled: true, src: 'images/characters/hero.png' }),
        npc1: new Person({
            x: utils.withGrid(3),
            y: utils.withGrid(6),
            src: 'images/characters/npc7.png',
            behaviorLoop: [
                { type: 'stand', direction: 'left', time: 800 },
                { type: 'stand', direction: 'right', time: 1300 },
                { type: 'stand', direction: 'up', time: 1800 },
                { type: 'stand', direction: 'down', time: 300 },
            ],
            talking: [{
                events: [
                    { type: 'textMessage', text: 'Esse é um jogo totalmente em JS...', faceHero: 'npc1' },
                    { type: 'textMessage', text: 'Estamos em desenvolvimento...', faceHero: 'npc1' },
                    { type: 'textMessage', text: 'Então tenha calma.', faceHero: 'npc1' },
                    { who: 'hero', type: 'walk', direction: 'down' },

                ]
            }]
        }),
        computerBroked: new Person({ 
            x: utils.withGrid(8), y: utils.withGrid(6), isPlayerControlled: false, src: 'images/objects/computer.png',
            behaviorLoop: [
                { type: 'stand', direction: 'right', time: 700 },
                { type: 'stand', direction: 'up', time: 1200 },
                { type: 'stand', direction: 'right', time: 350 },
                { type: 'stand', direction: 'up', time: 500 },
            ],
            talking: [{
                events: [
                    { type: 'textMessage', text: '...' },
                    { type: 'take', who:'computerBroked'},
                    { type: 'textMessage', text: 'Você adquiriu um PC quebrado!!' },
                ]
            }]
        }),
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
};