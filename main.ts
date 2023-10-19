import {add, subtract} from './src/calculator'

let resultOne = add(10, 10)
let resultTwo = subtract(30, 5)

console.log('Add', resultOne)
console.log('Subtract', resultTwo)

// Import default de classe Calculator
import Calculator from "./src/calculatorObject"

// Création d'une instance de Calculator
const calc = new Calculator()

// Utilisation des méthodes de Calculator
resultOne = calc.add(10, 10)
resultTwo = calc.subtract(30, 5)

console.log('Add', resultOne)
console.log('Subtract', resultTwo)