class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        return `${this.name} is eating!`;
    }

}

// Extend inherits properties/methods from base class

class Cat extends Pet {
    constructor(name, age, livesLeft = 9) {
        super(name, age)
        // Super references parent class, reusing constructor. This will allow
        // you to name have to rehash the constructor from previous class, but
        // also had your own constructors:
        this.livesLeft = livesLeft;
    }

    meow() {
        return 'MEOWWW!!';
    }
}

class Dog extends Pet {

    bark() {
        return 'WOOOF!!';
    }

    eat() {
        return `${this.name} scarfs their food down!`;
    }
}
