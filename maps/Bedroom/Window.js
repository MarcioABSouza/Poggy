import Iterable from '../../Iterable.js';
import utils from '../../utils.js';

export default new Iterable({
    x: utils.withGrid(3),
    y: utils.withGrid(0),
    isPlayerControlled: false,
    src: 'images/objects/standard.png',
    behaviorLoop: [
        { type: 'stand', direction: 'down' },
    ],
    talking: [
        {
            required: ['TALKED_ONCE_MIRROR'],
            events: [
                { type: 'textMessage', text: 'Acho que não tem muito pra mim ver lá fora...' },
            ]
        },
        {
            events: [
                { type: 'textMessage', text: 'Nossa ta bem escuro... ' },
                { type: 'textMessage', text: 'Que dia será hoje?' },
                { type: 'textMessage', text: 'Perdi a noção do #Tempo' },
                { type: 'addStoryFlag', flag: 'TALKED_ONCE_MIRROR' }
            ]
        }
    ]
})