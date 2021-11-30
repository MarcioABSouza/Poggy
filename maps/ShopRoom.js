import Person from '../Person.js';
import utils from '../utils.js';

export default {
    lowerSrc: 'images/maps/ShopLower.png',
    upperSrc: 'images/maps/ShopUpper.png',
    gameObjects: {
        hero: new Person({ x: utils.withGrid(5), y: utils.withGrid(11), isPlayerControlled: true, src: 'images/characters/hero.png' }),
        computer: new Person({ 
            x: utils.withGrid(5), y: utils.withGrid(6), isPlayerControlled: false, src: 'images/objects/computerTest.png',
            behaviorLoop: [
                { type: 'stand', direction: 'right' },
            ],
            talking: [{
                events: [
                    { type: 'textMessage', text: 'Tentando conectar...', faceHero: 'computer'  },
                    { type: 'textMessage', text: '...' },
                    { type: 'textMessage', text: 'Sem conexão com a Wired.' },
                ]
            }]
        })
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
};