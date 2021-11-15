class OverworldMap {
    constructor(config) {
        this.gameObjects = config.gameObjects;

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
            hero: new Person({ x: utils.withGrid(5), y: utils.withGrid(6), isPlayerControlled: true, src: 'images/characters/hero.png' }),
            npc: new Person({ x: utils.withGrid(3), y: utils.withGrid(6) })
        }
    }
}