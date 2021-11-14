class Overworld {
    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector('.game-canvas');
        this.ctx = this.canvas.getContext('2d')
    }


    init() {
        const image = new Image();
        image.onload = () => {
            this.ctx.drawImage(image, 0, 0);
        }
        image.src = 'images/maps/ShopLower.png';

        //Placing some characteres
        const hero = new GameObject({
            x: 6,
            y: 8
        })


        setTimeout(() => {
            hero.sprite.draw(this.ctx)
        }, 300)
    }
}