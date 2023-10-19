// class Dog
import Animal from "./animal"

export default class Dog extends Animal{
    public bark(){
        console.log(`${this.name} aboie`)
    }

}
