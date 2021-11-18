class DirectionInput {
    constructor() {
        this.heldDirections = [];

        this.map = {
            'KeyW': 'up',
            'KeyS': 'down',
            'KeyA': 'left',
            'KeyD': 'right',
            'arrow-right': 'right',
            'arrow-left': 'left',
            'arrow-top': 'up',
            'arrow-bottom': 'down'
        };

        this.directions = document.querySelector('#directions');
    }

    get direction() {
        return this.heldDirections[0];
    }

    keyDown(e) {
        const key = e.code || e.target.id;

        if (this.heldDirections.indexOf(this.map[key]) === -1) {
            this.heldDirections.unshift(this.map[key]);
        }
    }

    keyUp(e) {
        const key = e.code || e.target.id;

        const index = this.heldDirections.indexOf(this.map[key]);
        if (index > -1) {
            this.heldDirections.splice(index, 1);
        }
    }

    init() {

        this.directions.addEventListener('touchstart', e => this.keyDown(e))

        this.directions.addEventListener('touchend', e => this.keyUp(e))

        this.directions.addEventListener('mousedown', e => this.keyDown(e))

        this.directions.addEventListener('mouseup', e => this.keyUp(e))

        document.addEventListener('keydown', e => this.keyDown(e))

        document.addEventListener('keyup', e => this.keyUp(e))
    }
}