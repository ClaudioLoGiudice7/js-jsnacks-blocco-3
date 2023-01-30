// CHIEDO ALL'UTENTE UN NUMERO MINIMO
let minNumber = parseInt(prompt("Inserisci un numero minimo"));

// VERIFICARE CHE L'UTENTE ABBIA INSERITO L'INPUT CORRETTO
while (minNumber < 0 || isNaN(minNumber)) {
    minNumber = parseInt(prompt("Ti sei sbagliat*. Inserisci un numero minimo consono!"))
}

// CHIEDO ALL'UTENTE UN NUMERO MASSIMO
let maxNumber = parseInt(prompt("Inserisci un numero massimo"));

// VERIFICARE CHE L'UTENTE ABBIA INSERITO L'INPUT CORRETTO
while (maxNumber < 0 || isNaN(maxNumber) || maxNumber <= minNumber) {
    maxNumber = parseInt(prompt("Ti sei sbagliat*. Inserisci un numero massimo consono!"))
}

// GENERO UN NUMERO COMPRESO TRA IL VALORE MINIMO ED IL VALORE MASSIMO FORNITI DALL'UTENTE
let randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
console.log(randomNumber);
alert("Il numero generato casualmente tra " + minNumber + " e " + maxNumber + " è " + randomNumber);