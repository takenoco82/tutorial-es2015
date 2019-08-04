let book = {
    title: 'タイトル',
    price: 3700,
    toString() {
        console.log(`${this.title}, ${this.price}`);
    }
};

book.toString();
