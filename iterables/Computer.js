import Sprite from '../Sprite.js';
import GameObject from '../GameObject.js';
import utils from '../utils.js';

class Computer extends GameObject {
    constructor(config) {
        super(config);
        this.sprite = new Sprite({
            gameObject: this,
            src: 'images/objects/computer.png',
            animations: {
                'on-down': [
                    [0, 0]
                ],
                'off-down': [
                    [0, 1]
                ],
                'warning-down': [
                    [0, 2]
                ]
            },
            currentAnimation: 'off-down'
        });
    };
};

export default Computer;