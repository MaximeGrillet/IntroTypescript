"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// class Dog
const animal_1 = __importDefault(require("./animal"));
class Dog extends animal_1.default {
    bark() {
        console.log(`${this.name} aboie`);
    }
}
exports.default = Dog;
