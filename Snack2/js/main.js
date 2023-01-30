// Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.

// CREA UN ARRAY VUOTO
let numbers = [];

// METTO LA SOMMA A 0
let sum = 0

// CONTINUA A CHIEDERE I NUMERI ALL'UTENTE E AD INSERIRLI NELL'ARRAY FINO A QUANDO LA SOMMA DEGLI ELEMENTI È MINORE DI 50
while (sum < 50) {
    let userNumber = parseInt(prompt("Inserisci un numero"));
    if (!isNaN(userNumber) && userNumber < 50 && userNumber > 0) {
        userNumber = parseInt(userNumber);
        numbers.push(userNumber);
        sum += userNumber;
    }
    else {
        alert("Inserisci un numero valido!");
    }
}

console.log("I numeri che hai inserito sono: " + numbers);
alert("I numeri che hai inserito sono: " + numbers);

console.log("La somma di tutti i numeri ammonta a: " + sum);
alert("La somma di tutti i numeri ammonta a: " + sum);