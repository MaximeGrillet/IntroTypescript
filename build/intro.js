"use strict";
// Typage après une const, let, var avec nomVariable: type
const greeting = 'Salut les elfes !';
console.log(greeting);
// Utilisation de let car on redéfini la valeur de number plus tard
let number = 10.5;
const boolean = true;
number = 100;
// typage d'un tableau type[]
const arrayNumbers = [10, 50, 100];
const arrayString = ["salu", "les", "elfes"];
// (number|string)[] = Tableau qui contient des entiers et/ou des chaine de caractère
const array = [10, 50, 'salut'];
// Fonction classique
// Typage des paramètres et du retour de la fonction
function getUserById(id) {
    return {
        id,
        name: 'Maxime',
        email: 'max@mail.com'
    };
}
// Fonction fléché
// Typage des paramètres et du retour de la fonction
const getUserByName = (name) => {
    return {
        id: 1,
        name
    };
};
function getUserByID(id) {
    return id;
}
// Type any prend tous les types possible, utilisation à éviter
const any = 'salut';
const age = 30;
// Conditions
if (age >= 18 && age < 25) {
    console.log('Majeur carte étudiante', age);
}
else if (age >= 18) {
    console.log('Majeur', age);
}
else {
    console.log('Mineur', age);
}
// Classique
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    console.log(element);
}
const users = [
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
];
// Boucle for in
for (const key in users) {
    if (Object.prototype.hasOwnProperty.call(users, key)) {
        const element = users[key];
        console.log(element.email);
    }
}
// Boucle for of
for (const user of users) {
    console.log(user);
}
// Boucle for each
arrayString.forEach((element) => {
    console.log(element);
});
