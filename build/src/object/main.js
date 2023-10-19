"use strict";
// Class Animal
class Animal {
    // Propriétés (ancienne version)
    /*private name: string
    private color: string
    private race: string
    private age: number*/
    // Constructeur (ancienne version)
    /*constructor(name: string, color: string, race: string, age:number){
        this.name = name
        this.color = color
        this.race = race
        this.age = age
    }*/
    // Propriétés + constructeur (new version)
    constructor(name, color, race, age) {
        this.name = name;
        this.color = color;
        this.race = race;
        this.age = age;
    }
    // Getter / Accesseur
    getColor() {
        return this.color;
    }
    // Setter / Mutateur
    setColor(color) {
        this.color = color;
    }
    // Méthodes
    walk() {
        console.log(`${this.name} marche`);
    }
    eat() {
        console.log(`${this.name} mange`);
    }
    sleep() {
        console.log(`${this.name} dort`);
    }
    description() {
        return {
            name: this.name,
            color: this.color,
            race: this.race,
            age: this.age
        };
    }
}
// class Dog
class Dog extends Animal {
    bark() {
        console.log(`${this.name} aboie`);
    }
}
// class Cat
class Cat extends Animal {
    meow() {
    }
}
const myDog = new Dog("Rex", "white", "Berger Allemand", 3);
// myDog.walk()
// myDog.eat()
// myDog.sleep()
// myDog.bark()
console.log(myDog.getColor());
myDog.setColor('Red');
console.log(myDog.getColor());
const myCat = new Cat("Kiwi", "black", "Mencun", 6);
// myCat.walk()
// myCat.eat()
// myCat.sleep()
// myCat.meow()
// console.log(myCat.description())
