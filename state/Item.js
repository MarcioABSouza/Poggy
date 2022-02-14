class Item {
    constructor({label, price = 0, amount = 1, place}) {
        this.label = label;
        this.price = price;
        this.amount = amount;
        this.place = place;
    }

    getAmount (){
        return this.amount
    }

    getItem (){
        return this.amount--;
    }

    addItem (){
        return this.amount++;
    }
}

export default Item;