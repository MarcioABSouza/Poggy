class OverworldMap {
    constructor(config) {
        this.gameObjects = config.gameObjects;

        this.lowerImage = new Image();
        this.lowerImage.src = config.lowerSrc;

        this.upperImage = new Image();
        this.upperImage.src = config.upperSrc;
    }


    drawLowerImage(ctx) {
        ctx.drawImage(this.lowerImage, 0, 0)

    }

    drawUpperImage(ctx) {
        ctx.drawImage(this.upperImage, 0, 0)

    }

}

window.OverworldMaps = {
    ShopRoom: {
        lowerSrc: 'images/maps/ShopLower.png',
        upperSrc: 'images/maps/ShopLower.png',
        gameObjects: {
            hero: new GameObject({ x: 5, y: 6 })
        }
    },
    DemoRoom: {
        lowerSrc: 'images/maps/DemoLower.png',
        upperSrc: 'images/maps/DemoUpper.png',
        gameObjects: {
            hero: new GameObject({ x: 5, y: 6 })
        }
    }
}