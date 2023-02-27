'use strict';

// prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

// prendendo una lista di nomi e una lista di cognomi
const names = ['Luca', 'Giorgia', 'Sara', 'Marco', 'Fabio'];
const lastNames = ['Selvi', 'Bianchi', 'Gramaccioni', 'Conti', 'Iero'];

// generare una falsa lista di 3 invitati
let invited = [];

for (let i = 0; i <= 2; i++) {

    const randomName = Math.floor(Math.random() * names.length);
    const randomLastName = Math.floor(Math.random() * lastNames.length);

    const invitedName = `${names[randomName]} ${lastNames[randomLastName]}`;
    invited.push(invitedName);
}

console.log(invited);