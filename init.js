import PlayerState from './state/PlayerState.js';
import GameState from './state/GameState.js';
import EventState from './state/EventState.js';


window.playerState = new PlayerState();
window.gameState = new GameState();
window.eventState = new EventState();


import Overworld from './Overworld.js';


(function() {
    const overworld = new Overworld({
        element: document.querySelector('.game-container')
    });
    overworld.init();
})()