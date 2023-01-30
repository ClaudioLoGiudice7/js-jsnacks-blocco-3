// Genera un numero a caso compreso tra 1 - 100. Chiedi all’utente un numero fino a quando non indovina quello generato casualmente. Ogni volta che l'utente inserisce un numero, digli se è maggiore o minore di quello generato. Alla fine stampa il numero di tentativi che ci sono voluti per indovinare il numero generato casualmente.


// GENERA UN NUMERO A CASO COMPRESO TRA 1 E 100
let randomNumber = Math.floor(Math.random() * 100) + 1;
let guess;
let attempts = 0;

// CHIEDI ALL'UTENTE UN NUMERO FINO A QUANDO NON INDOVINA QUELLO GENERATO CASUALMENTE. OGNI VOLTA CHE L'UTENTE INSERISCE UN NUMERO, DIGLI SE È MAGGIORE O MINORE DI QUELLO GENERATO
while (guess !== randomNumber) {
    guess = parseInt(prompt("Inserisci un numero da 1 a 100"));
    attempts++;
    if (guess > randomNumber) {
        console.log("No, mi dispiace, il numero non è questo... però ti consiglio di scendere un pochino, ti potresti avvicinare...");
        alert("No, mi dispiace, il numero non è questo... però ti consiglio di scendere un pochino, ti potresti avvicinare...");
    }
    else if (guess < randomNumber) {
        console.log("No, mi dispiace, il numero non è questo... però ti consiglio di salire un pochino, ti potresti avvicinare...");
        alert("No, mi dispiace, il numero non è questo... però ti consiglio di salire un pochino, ti potresti avvicinare...");
    }
}

// ALLA FINE STAMPA IL NUMERO DI TENTATIVI CHE CI SONO VOLUTI PER INDOVINARE IL NUMERO GENERATO CASUALMENTE
console.log("Ce l'hai fatta finalmente! I tentativi che ti ci sono voluti per indovinare sono " + attempts + "!");
alert("Ce l'hai fatta finalmente! I tentativi che ti ci sono voluti per indovinare sono " + attempts + "!");