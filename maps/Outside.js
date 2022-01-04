import Iterable from '../Iterable.js';
import utils from '../utils.js';


export default {
    lowerSrc: 'images/maps/OutsideLower.png',
    upperSrc: 'images/maps/OutsideUpper.png',
    gameObjects: {
        hero: new Iterable({ x: utils.withGrid(15), y: utils.withGrid(9), isPlayerControlled: true, src: 'images/characters/hero.png' })

    },
    walls: {

        [utils.asGridCoord(13, 9)]: true,
        [utils.asGridCoord(14, 9)]: true,
        [utils.asGridCoord(16, 9)]: true,
        [utils.asGridCoord(17, 9)]: true,

        [utils.asGridCoord(13, 8)]: true,
        [utils.asGridCoord(13, 7)]: true,
        [utils.asGridCoord(13, 6)]: true,
        [utils.asGridCoord(13, 5)]: true,
        [utils.asGridCoord(13, 4)]: true,
        [utils.asGridCoord(14, 4)]: true,
        [utils.asGridCoord(15, 4)]: true,
        [utils.asGridCoord(16, 4)]: true,


        [utils.asGridCoord(17, 8)]: true,
        [utils.asGridCoord(17, 7)]: true,
        [utils.asGridCoord(17, 6)]: true,
        [utils.asGridCoord(17, 5)]: true,
        [utils.asGridCoord(17, 4)]: true,


        [utils.asGridCoord(1, 0)]: true,
        [utils.asGridCoord(1, 1)]: true,
        [utils.asGridCoord(1, 2)]: true,
        [utils.asGridCoord(1, 3)]: true,
        [utils.asGridCoord(1, 4)]: true,
        [utils.asGridCoord(1, 5)]: true,
        [utils.asGridCoord(1, 6)]: true,
        [utils.asGridCoord(1, 7)]: true,
        [utils.asGridCoord(1, 8)]: true,
        [utils.asGridCoord(1, 9)]: true,
        [utils.asGridCoord(1, 10)]: true,
        [utils.asGridCoord(1, 11)]: true,

        [utils.asGridCoord(2, 12)]: true,
        [utils.asGridCoord(3, 12)]: true,
        [utils.asGridCoord(4, 12)]: true,
        [utils.asGridCoord(5, 12)]: true,
        [utils.asGridCoord(6, 12)]: true,
        [utils.asGridCoord(7, 12)]: true,
        [utils.asGridCoord(8, 12)]: true,
        [utils.asGridCoord(9, 12)]: true,
        [utils.asGridCoord(10, 12)]: true,
        [utils.asGridCoord(11, 12)]: true,
        [utils.asGridCoord(12, 12)]: true,
        [utils.asGridCoord(13, 12)]: true,
        [utils.asGridCoord(14, 12)]: true,
        [utils.asGridCoord(15, 12)]: true,
        [utils.asGridCoord(16, 12)]: true,
        [utils.asGridCoord(17, 12)]: true,
        [utils.asGridCoord(18, 12)]: true,
        [utils.asGridCoord(19, 12)]: true,
        [utils.asGridCoord(20, 12)]: true,
        [utils.asGridCoord(21, 12)]: true,
        [utils.asGridCoord(22, 12)]: true,
        [utils.asGridCoord(23, 12)]: true,
        [utils.asGridCoord(24, 12)]: true,
        [utils.asGridCoord(25, 12)]: true,
        [utils.asGridCoord(26, 12)]: true,
        [utils.asGridCoord(27, 12)]: true,

        [utils.asGridCoord(28, 0)]: true,
        [utils.asGridCoord(28, 1)]: true,
        [utils.asGridCoord(28, 2)]: true,
        [utils.asGridCoord(28, 3)]: true,
        [utils.asGridCoord(28, 4)]: true,
        [utils.asGridCoord(28, 5)]: true,
        [utils.asGridCoord(28, 6)]: true,
        [utils.asGridCoord(28, 7)]: true,
        [utils.asGridCoord(28, 8)]: true,
        [utils.asGridCoord(28, 9)]: true,
        [utils.asGridCoord(28, 10)]: true,
        [utils.asGridCoord(28, 11)]: true,

        [utils.asGridCoord(2, -1)]: true,
        [utils.asGridCoord(3, -1)]: true,
        [utils.asGridCoord(4, -1)]: true,
        [utils.asGridCoord(5, -1)]: true,
        [utils.asGridCoord(6, -1)]: true,
        [utils.asGridCoord(7, -1)]: true,
        [utils.asGridCoord(8, -1)]: true,
        [utils.asGridCoord(9, -1)]: true,
        [utils.asGridCoord(10, -1)]: true,
        [utils.asGridCoord(11, -1)]: true,
        [utils.asGridCoord(12, -1)]: true,
        [utils.asGridCoord(13, -1)]: true,
        [utils.asGridCoord(14, -1)]: true,
        [utils.asGridCoord(15, -1)]: true,
        [utils.asGridCoord(16, -1)]: true,
        [utils.asGridCoord(17, -1)]: true,
        [utils.asGridCoord(18, -1)]: true,
        [utils.asGridCoord(19, -1)]: true,
        [utils.asGridCoord(20, -1)]: true,
        [utils.asGridCoord(21, -1)]: true,
        [utils.asGridCoord(22, -1)]: true,
        [utils.asGridCoord(23, -1)]: true,
        [utils.asGridCoord(24, -1)]: true,
        [utils.asGridCoord(25, -1)]: true,
        [utils.asGridCoord(26, -1)]: true,
        [utils.asGridCoord(27, -1)]: true,


    },
    cutsceneSpaces: {
        [utils.asGridCoord(15, 8)]: [{
            events: [
                { type: 'changeMap', map: 'BedRoom' },
            ]
        }]
    }
};