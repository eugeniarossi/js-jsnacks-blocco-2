'use strict';

const p = document.querySelector('p');
let sum = 0;
/*
for (let i = 0; i < 5; i++) {
    const input = Number(prompt('Inserisci un numero'));
    console.log(input);
    sum += input;
}
console.log(sum);
*/

let x = 0;
while (x < 5) {
    const input = Number(prompt('Inserisci un numero'));
    console.log(input);
    sum += input;
    x++;
}

console.log(sum);
p.innerText= `Somma: ${sum}`;