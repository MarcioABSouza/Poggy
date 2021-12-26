import Person from '../Person.js';
import utils from '../utils.js';


export default {
    lowerSrc: 'images/maps/any.png',
    upperSrc: 'images/maps/anyLower.png',
    gameObjects: {
        hero: new Person({ x: utils.withGrid(3), y: utils.withGrid(5), isPlayerControlled: true, src: 'images/characters/hero.png' }),
        npc1: new Person({
            x: utils.withGrid(5),
            y: utils.withGrid(5),
            src: 'images/characters/npc7.png',
            behaviorLoop: [
                { type: 'stand', direction: 'left' },
            ],
            talking: [{
                    required: ['GOT_KEY', 'NPC1_FINAL'],
                    events: [
                        { type: 'textMessage', text: 'Cara, não tenho como te ajudar...', faceHero: 'npc1' },
                        { type: 'textMessage', text: 'Estamos presos aqui?', faceHero: 'npc1' },
                    ],
                },
                {
                    required: ['GOT_KEY'],
                    events: [
                        { type: 'textMessage', text: 'Hum... isso parece com uma senha...', faceHero: 'npc1' },
                        { type: 'textMessage', text: 'Tenta usar o painel na porta.', faceHero: 'npc1' },
                        {
                            type: 'addCutsceneSpace',
                            map: 'BedRoom',
                            eventToBeAdd: [{
                                events: [
                                    { type: 'changeMap', map: 'Outside' },
                                ]
                            }],
                            placeCoords: [utils.asGridCoord(3, 6)]
                        },
                        { type: 'addStoryFlag', flag: 'NPC1_FINAL' }

                    ],
                },
                {
                    events: [
                        { type: 'textMessage', text: 'Tu já viu qual é daquele pc?', faceHero: 'npc1' },
                        { type: 'textMessage', text: 'Tem um arquivo com a senha em algum canto.', faceHero: 'npc1' },
                        { type: 'addStoryFlag', flag: 'TALKED_ONCE' }

                    ]
                }
            ]
        }),
        computerOnBedRoom: new Person({
            x: utils.withGrid(2),
            y: utils.withGrid(2),
            isPlayerControlled: false,
            src: 'images/objects/computer.png',
            behaviorLoop: [
                { type: 'stand', direction: 'right' },
            ],
            talking: [{
                    required: ['GOT_KEY', 'TALKED_ONCE'],
                    events: [
                        { type: 'textMessage', text: 'Conectando...' },
                        { type: 'textMessage', text: 'Nada de importante...' },
                        { type: 'textMessage', text: 'Blip...' },
                    ]
                },
                {
                    required: ['TALKED_ONCE'],
                    events: [
                        { type: 'textMessage', text: 'Conectando...' },
                        { type: 'textMessage', text: 'Procurando arquivos...' },
                        { type: 'textMessage', text: 'Arquivo encontrado...' },
                        { type: 'textMessage', text: '    XXT&$$JD@@_11qAs#33$' },
                        { type: 'textMessage', text: 'Você obteve SENHA.' },
                        { type: 'addStoryFlag', flag: 'GOT_KEY' }
                    ]
                },
                {
                    events: [
                        { type: 'textMessage', text: '... sem conexão!!!' },
                    ]
                }
            ]
        }),
        smartphoneOnBedRoom: new Person({
            x: utils.withGrid(1),
            y: utils.withGrid(2),
            isPlayerControlled: false,
            src: 'images/objects/cellphone.png',
            behaviorLoop: [
                { type: 'stand', direction: 'down' },
            ],
            talking: [{
                events: [
                    { type: 'textMessage', text: '... um celular' },
                    { type: 'textMessage', text: '... mas sem bateria...' },
                ]
            }]
        }),
        mirrorOnBedRoom: new Person({
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
        })

    },
    walls: {

        [utils.asGridCoord(1, 2)]: true,

        [utils.asGridCoord(1, 0)]: true,
        [utils.asGridCoord(2, 0)]: true,
        [utils.asGridCoord(3, 0)]: true,
        [utils.asGridCoord(4, 0)]: true,
        [utils.asGridCoord(5, 0)]: true,
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