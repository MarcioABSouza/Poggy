import Iterable from '../Iterable.js';
import utils from '../utils.js';
import Computer from '../iterables/Computer.js';


export default {
    lowerSrc: 'images/maps/any.png',
    upperSrc: 'images/maps/anyLower.png',
    gameObjects: {
        hero: new Iterable({ x: utils.withGrid(3), y: utils.withGrid(5), isPlayerControlled: true, src: 'images/characters/hero.png' }),
        computer: new Computer({
            x: utils.withGrid(2),
            y: utils.withGrid(2),
            isPlayerControlled: false,
        }),

        smartphoneOnBedRoom: new Iterable({
            x: utils.withGrid(1),
            y: utils.withGrid(2),
            isPlayerControlled: false,
            src: 'images/objects/cellphone.png',
            behaviorLoop: [
                { type: 'stand', direction: 'down' },
            ],
            talking: [
            {
                events: [
                    { type: "interactingMenu", 
                    reactionsToVocabulary:{
                        'DontKnow': [{ type: 'textMessage', text: 'Nenhuma informação sobre isso.' }],
                        'Bateria': [{ type: 'textMessage', text: 'Baterias podem ser encomendadas no Etray.com' }]
                    } },
                ]
            },
            {
                events:  [{ type: 'textMessage', text: 'Outra mensagem' }]
            }
        ]
        }),

        mirrorOnBedRoom: new Iterable({
            x: utils.withGrid(3),
            y: utils.withGrid(0),
            isPlayerControlled: false,
            src: 'images/objects/standard.png',
            behaviorLoop: [
                { type: 'stand', direction: 'down' },
            ],
            talking: [{
                    required: ['TALKED_ONCE_MIRROR'],
                    events: [
                        { type: 'textMessage', text: 'Acho que não tem muito pra mim ver lá fora...' },
                        { type: 'textMessage', text: 'Parece #Zeeland' },

                    ]
                },
                {
                    events: [
                        { type: 'textMessage', text: 'Nossa ta bem escuro lá fora... ' },
                        { type: 'textMessage', text: 'Onde será que eu to?' },
                        { type: 'addStoryFlag', flag: 'TALKED_ONCE_MIRROR' }
                    ]
                }
            ]
        }),

        fridgeOnBedRoom: new Iterable({
            x: utils.withGrid(5),
            y: utils.withGrid(0),
            isPlayerControlled: false,
            src: 'images/objects/standard.png',
            talking: [{
                events: [
                    { type: 'textMessage', text: '... Geladeira vazia, que maravilha!' },
                    { type: "interactingMenu", textOptions: [{label:'Cerveja'},{label:'Sorvete'} ] },
                ]
            }]
        })

    },
    walls: {

        [utils.asGridCoord(4, 4)]: true,


        [utils.asGridCoord(1, 2)]: true,

        [utils.asGridCoord(1, 0)]: true,
        [utils.asGridCoord(2, 0)]: true,
        [utils.asGridCoord(3, 0)]: true,
        [utils.asGridCoord(4, 0)]: true,
        [utils.asGridCoord(6, 0)]: true,
        [utils.asGridCoord(7, 0)]: true,

        [utils.asGridCoord(1, 6)]: true,
        [utils.asGridCoord(2, 6)]: true,
        [utils.asGridCoord(3, 7)]: true,
        [utils.asGridCoord(4, 6)]: true,
        [utils.asGridCoord(5, 6)]: true,
        [utils.asGridCoord(6, 6)]: true,
        [utils.asGridCoord(7, 6)]: true,

        [utils.asGridCoord(0, 1)]: true,
        [utils.asGridCoord(0, 2)]: true,
        [utils.asGridCoord(0, 3)]: true,
        [utils.asGridCoord(0, 4)]: true,
        [utils.asGridCoord(0, 5)]: true,

        [utils.asGridCoord(6, 1)]: true,
        [utils.asGridCoord(6, 2)]: true,
        [utils.asGridCoord(6, 3)]: true,
        [utils.asGridCoord(6, 4)]: true,
        [utils.asGridCoord(6, 5)]: true,
    },
    cutsceneSpaces: {
        [utils.asGridCoord(3, 6)]: [{
            events: [
                { type: 'textMessage', text: 'Porta bloquada.' },
                { who: 'hero', type: 'walk', direction: 'up' },
            ]
        }],
    }
};