"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const calculator_1 = require("./src/calculator");
let resultOne = (0, calculator_1.add)(10, 10);
let resultTwo = (0, calculator_1.subtract)(30, 5);
console.log('Add', resultOne);
console.log('Subtract', resultTwo);
// Import default de classe Calculator
const calculatorObject_1 = __importDefault(require("./src/calculatorObject"));
// Création d'une instance de Calculator
const calc = new calculatorObject_1.default();
// Utilisation des méthodes de Calculator
resultOne = calc.add(10, 10);
resultTwo = calc.subtract(30, 5);
console.log('Add', resultOne);
console.log('Subtract', resultTwo);
