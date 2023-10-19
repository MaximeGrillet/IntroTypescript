// Typage après une const, let, var avec nomVariable: type
const greeting: string = 'Salut les elfes !'
console.log(greeting)

// Utilisation de let car on redéfini la valeur de number plus tard
let number: number = 10.5
const boolean: boolean|number = true

number = 100

// typage d'un tableau type[]
const arrayNumbers: number[] = [10, 50, 100]
const arrayString: Array<string> = ["salu", "les", "elfes"]

// (number|string)[] = Tableau qui contient des entiers et/ou des chaine de caractère
const array: (number|string)[] = [10, 50, 'salut']

// interface
interface User {
    id: number
    name: string
    email?: string
    birthday?: Date
}


// Fonction classique
// Typage des paramètres et du retour de la fonction
function getUserById(id: number): User{
    return {
        id,
        name: 'Maxime',
        email: 'max@mail.com'
    }
}

// Fonction fléché
// Typage des paramètres et du retour de la fonction
const getUserByName = (name: string): {id: number, name: string} => {
    return {
        id: 1,
        name
    }
}

function getUserByID(id: number): number {
    return id
}

// Type any prend tous les types possible, utilisation à éviter
const any: any = 'salut'

const age: number = 30

// Conditions
if (age >= 18 && age < 25) {
    console.log('Majeur carte étudiante', age)
} else if (age >= 18) {
    console.log('Majeur', age)
} else {
    console.log('Mineur', age)
}

// Classique
for (let index: number = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    console.log(element)
}

const users: User[] = [
    {
        id: 10,
        name: 'Jérémy',
        email: 'jeremy@dufroy.fr',
        birthday: new Date
    },
    {
        id: 5,
        name: 'Gauthier',
        email: 'gauthier@email.fr'
    }
]

// Boucle for in
for (const key in users) {
    if (Object.prototype.hasOwnProperty.call(users, key)) {
        const element = users[key];
        console.log(element.email)
    }
}

// Boucle for of
for (const user of users) {
    console.log(user)
}

// Boucle for each
arrayString.forEach((element) => {
    console.log(element)
})