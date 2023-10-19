import Dog from "./classes/dog"
import Cat from "./classes/cat"

const myDog = new Dog("Rex", "white", "Berger Allemand", 3)
myDog.walk()
myDog.eat()
myDog.sleep()
myDog.bark()
console.log(myDog.getColor())
myDog.setColor('Red')
console.log(myDog.getColor())

const myCat = new Cat("Kiwi", "black", "Mencun", 6)
myCat.walk()
myCat.eat()
myCat.sleep()
myCat.meow()
console.log(myCat.description())