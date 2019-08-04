class Person {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
    show() {
        return `${this.name} is ${this.sex}.`;
    }
}

let alice = new Person('alice', 'female');
// alice is female.
console.log(alice.show());


// 匿名クラス
let Person2 = class {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
    show() {
        return `${this.name} is ${this.sex}.`;
    }
}
let bob = new Person2('bob', 'man');
console.log(bob.show());


// staticメソッドを定義する
class Figure {
    static triangle(base, height) {
        return base * height / 2;
    }
}
// 25
console.log(Figure.triangle(10, 5));


// getter, setter
class Person3 {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
    show() {
        return `${this.name} is ${this.sex}. age=${this.age}`;
    }
}
let carol = new Person3('carol', 'female');
carol.age = 15;
console.log(carol.show());
