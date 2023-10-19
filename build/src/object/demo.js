"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dog_1 = __importDefault(require("./classes/dog"));
const cat_1 = __importDefault(require("./classes/cat"));
const myDog = new dog_1.default("Rex", "white", "Berger Allemand", 3);
myDog.walk();
myDog.eat();
myDog.sleep();
myDog.bark();
console.log(myDog.getColor());
myDog.setColor('Red');
console.log(myDog.getColor());
const myCat = new cat_1.default("Kiwi", "black", "Mencun", 6);
myCat.walk();
myCat.eat();
myCat.sleep();
myCat.meow();
console.log(myCat.description());
