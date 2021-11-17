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

    init() {


        this.directions.addEventListener('mousedown', e => {
            const key = e.target.id;

            if (this.heldDirections.indexOf(this.map[key]) === -1) {
                this.heldDirections.unshift(this.map[key]);
            }
        })

        this.directions.addEventListener('mouseup', e => {
            const key = e.target.id;

            const index = this.heldDirections.indexOf(this.map[key]);
            if (index > -1) {
                this.heldDirections.splice(index, 1);
            }
        })


        document.addEventListener('keydown', e => {
            const dir = this.map[e.code];
            if (dir && this.heldDirections.indexOf(dir) === -1) {
                this.heldDirections.unshift(dir);

            }
        })

        document.addEventListener('keyup', e => {
            const dir = this.map[e.code];
            const index = this.heldDirections.indexOf(dir);
            if (index > -1) {
                this.heldDirections.splice(index, 1);

            }
        })
    }
}