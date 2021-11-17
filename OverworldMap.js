class OverworldMap {
    constructor(config) {
        this.gameObjects = config.gameObjects;
        this.walls = config.walls || {}

        this.lowerImage = new Image();
        this.lowerImage.src = config.lowerSrc;

        this.upperImage = new Image();
        this.upperImage.src = config.upperSrc;
    }


    drawLowerImage(ctx, cameraPerson) {
        ctx.drawImage(
            this.lowerImage,
            utils.withGrid(10.5) - cameraPerson.x,
            utils.withGrid(6) - cameraPerson.y
        );

    }

    drawUpperImage(ctx, cameraPerson) {
        ctx.drawImage(
            this.upperImage,
            utils.withGrid(10.5) - cameraPerson.x,
            utils.withGrid(6) - cameraPerson.y
        );

    }

    isSpaceTaken(currentX, currentY, direction) {
        const { x, y } = utils.nextPosition(currentX, currentY, direction);
        return this.walls[`${x},${y}`] || false;
    }

    mountObjects() {
        Object.values(this.gameObjects).forEach(o => {
            o.mount(this);
        })
    }


    addWall(x, y) {
        this.walls[`${x},${y}`] = true;
    }

    removeWall(x, y) {
        delete this.walls[`${x},${y}`];
    }

    moveWall(wasX, wasY, direction) {
        this.removeWall(wasX, wasY);
        const { x, y } = utils.nextPosition(wasX, wasY, direction);
        this.addWall(x, y);
    }

}

window.OverworldMaps = {
    ShopRoom: {
        lowerSrc: 'images/maps/ShopLower.png',
        upperSrc: 'images/maps/ShopLower.png',
        gameObjects: {
            hero: new GameObject({ x: 5, y: 6, isPlayerControlled: true })
        }
    },
    DemoRoom: {
        lowerSrc: 'images/maps/DemoLower.png',
        upperSrc: 'images/maps/DemoUpper.png',
        gameObjects: {
            hero: new Person({ x: utils.withGrid(6), y: utils.withGrid(6), isPlayerControlled: true, src: 'images/characters/hero.png' }),
            npc: new Person({ x: utils.withGrid(3), y: utils.withGrid(6) })
        },
        walls: {

            //Table 
            [utils.asGridCoord(7, 6)]: true,
            [utils.asGridCoord(8, 6)]: true,
            [utils.asGridCoord(7, 7)]: true,
            [utils.asGridCoord(8, 7)]: true,

            //Top Wall
            [utils.asGridCoord(1, 3)]: true,
            [utils.asGridCoord(2, 3)]: true,
            [utils.asGridCoord(3, 3)]: true,
            [utils.asGridCoord(4, 3)]: true,
            [utils.asGridCoord(5, 3)]: true,
            [utils.asGridCoord(6, 4)]: true,
            [utils.asGridCoord(8, 4)]: true,
            [utils.asGridCoord(7, 2)]: true,
            [utils.asGridCoord(6, 3)]: true,
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

            //Right wall
            [utils.asGridCoord(11, 4)]: true,
            [utils.asGridCoord(11, 5)]: true,
            [utils.asGridCoord(11, 6)]: true,
            [utils.asGridCoord(11, 7)]: true,
            [utils.asGridCoord(11, 8)]: true,
            [utils.asGridCoord(11, 9)]: true,

            //Bottom Wall
            [utils.asGridCoord(1, 10)]: true,
            [utils.asGridCoord(2, 10)]: true,
            [utils.asGridCoord(3, 10)]: true,
            [utils.asGridCoord(4, 10)]: true,
            [utils.asGridCoord(6, 10)]: true,
            [utils.asGridCoord(7, 10)]: true,
            [utils.asGridCoord(8, 10)]: true,
            [utils.asGridCoord(9, 10)]: true,
            [utils.asGridCoord(10, 10)]: true,

            //Door Wall
            [utils.asGridCoord(5, 11)]: true,
            [utils.asGridCoord(2, 3)]: true,
        }
    }
}