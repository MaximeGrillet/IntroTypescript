"use strict";
// Class Animal
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.default = Animal;
