import Iterable from '../../Iterable.js';
import utils from '../../utils.js';

export default new Iterable({
    x: utils.withGrid(3),
    y: utils.withGrid(0),
    isPlayerControlled: false,
    src: 'images/objects/standard.png',
    behaviorLoop: [
        { type: 'stand', direction: 'down' },
    ]
})