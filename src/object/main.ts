// interface Pet{
//     walk(): void
//     eat(): void
//     sleep(): void 
// }

// // Class Animal
// abstract class Animal implements Pet{
//     // Propriétés (ancienne version)
//     /*private name: string
//     private color: string
//     private race: string 
//     private age: number*/

//     // Constructeur (ancienne version)
//     /*constructor(name: string, color: string, race: string, age:number){
//         this.name = name
//         this.color = color
//         this.race = race
//         this.age = age
//     }*/

//     // Propriétés + constructeur (new version)
//     constructor(
//         protected name: string,
//         private color: string,
//         private race: string,
//         private age: number
//     ){

//     }

//     // Getter / Accesseur
//     public getColor(): string{
//         return this.color
//     }

//     // Setter / Mutateur
//     public setColor(color: string){
//         this.color = color
//     }

//     // Méthodes
//     public walk(){
//         console.log(`${this.name} marche`)
//     }
//     public eat(){
//         console.log(`${this.name} mange`)
//     }
//     public sleep(){
//         console.log(`${this.name} dort`)
//     }

//     public description(): {name: string, color: string, race: string, age: number} {
//         return {
//             name: this.name,
//             color: this.color,
//             race: this.race,
//             age: this.age
//         }
//     }
// }

// // class Dog
// class Dog extends Animal{
//     public bark(){
//         console.log(`${this.name} aboie`)
//     }

// }

// // class Cat
// class Cat extends Animal{
//     public meow(){

//     }
// }


// const myDog = new Dog("Rex", "white", "Berger Allemand", 3)
// // myDog.walk()
// // myDog.eat()
// // myDog.sleep()
// // myDog.bark()
// console.log(myDog.getColor())
// myDog.setColor('Red')
// console.log(myDog.getColor())

// const myCat = new Cat("Kiwi", "black", "Mencun", 6)
// // myCat.walk()
// // myCat.eat()
// // myCat.sleep()
// // myCat.meow()
// // console.log(myCat.description())