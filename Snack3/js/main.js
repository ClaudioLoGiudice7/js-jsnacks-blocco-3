// Fai inserire un numero, che chiameremo N, all'utente. Genera N array, ognuno formato da 10 numeri casuali da 1 a 100. Ogni volta che ne crei uno, stampalo.

// CHIEDO UN NUMERO ALL'UTENTE
let userNumber = parseInt(prompt("Inserisci un numero"));

// GENERA N ARRAY, OGNUNO FORMATO DA 10 NUMERI CASUALI DA 1 A 100

while (isNaN(userNumber) || userNumber < 0) {
    alert("Hai sbagliato! Inserisci un numero consono!");
    userNumber = parseInt(prompt("Inserisci un numero"));
}

for (let i = 0; i < userNumber; i++) {
    let array = [];
    for (let j = 0; j < 10; j++) {
        array.push(Math.floor(Math.random() * 100) + 1);
    }
    console.log("Array" + (i + 1) + ": " + array);
    alert("Array" + (i + 1) + ": " + array);
}