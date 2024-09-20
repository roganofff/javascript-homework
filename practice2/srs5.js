class Pet {

    constructor(name, age) {
        if (this.constructor == Pet) {
            console.log(new Error("Нельзя создать экземпляр абстрактного класса."));
    }
        
        this.name = name
        this.age = age
    }

    eat() {
        console.log('Животное ест')
        return this
    }

    makeSound() {
        throw new Error("Нужно реализовать абстракный метод.")
    }

}

class Dog extends Pet {

    makeSound() {
        console.log('Собака лает')
        return this
    }

    sleep() {
        console.log('Собака спит')
        return this
    }

}

class Cat extends Pet {

    makeSound() {
        console.log('Кошка мяукает')
        return this
    }

    sleep() {
        console.log('Кошка спит')
        return this
    }

}

let dog = new Dog('Пьос', 7)
let cat = new Cat('Кошк', 10)
dog.eat().sleep().makeSound()
cat.eat().sleep().makeSound()

let pet = new Pet('pet', 1)