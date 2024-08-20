


/*

ESERCIZIO 1 - Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Stampiamo in pagina i due tiri e il risultato
-----------------------------------------------------------------

Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3. si, ma noi cosa vogliamo fare?
4.  diamoci prima una risposta in italiano!
5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
6. Il tuo codice ti sembra troppo complicato? probabilmente ti stai complicando la vita!
Buon lavoro e buon divertimento! :slightly_smiling_face:


*/



//il massimo che io posso ottenere è 4..99 quinid arrotondo per eccesso  e aggiungo fino a dove posso arrivare 
//Math.floor(Math.random()*X)+1 dove x  è il numero che voglio ottenere



//Fase di preparazione delle variabili 
const maxNumber = 6
const randomCPUNumber1 = Math.floor(Math.random() * maxNumber) + 1;
const randomCPUNumber2 = Math.floor(Math.random() * maxNumber) + 1;




/*validazione */
console.log(randomCPUNumber1, randomCPUNumber2);


if (randomCPUNumber1 === randomCPUNumber2) {

    console.log('i numeri sono uguali non ha vinto nessuno ');

}



if (randomCPUNumber1 > randomCPUNumber2) {

    console.log(`${randomCPUNumber1} è il più grande`);
} else {
    console.log(`${randomCPUNumber2} è il più grande`);


}













