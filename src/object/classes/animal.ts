

// Class Animal

import Pet from "../interfaces/pet"

export default abstract class Animal implements Pet{
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
    constructor(
        protected name: string,
        private color: string,
        private race: string,
        private age: number
    ){

    }

    // Getter / Accesseur
    public getColor(): string{
        return this.color
    }

    // Setter / Mutateur
    public setColor(color: string){
        this.color = color
    }

    // Méthodes
    public walk(){
        console.log(`${this.name} marche`)
    }
    public eat(){
        console.log(`${this.name} mange`)
    }
    public sleep(){
        console.log(`${this.name} dort`)
    }

    public description(): {name: string, color: string, race: string, age: number} {
        return {
            name: this.name,
            color: this.color,
            race: this.race,
            age: this.age
        }
    }
}