/*
ESERCIZIO 2 - Finta Login
Inventa una lista di email autorizzate
Chiedi all’utente la sua email, con un piccolo form.
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Cosa devo controllare esattamente?
:warning: NOTE:
- è vietato utilizzare il metodo includes()
- La mail dell'utente va raccolta tramite input  e con l'aiuto di un button , non con un prompt.
- Non è necessario usare il tag <form>, ma se lo usate, ricordate di impedire il comportamento di default dell'evento altrimenti il form ricaricherà la pagina. In alternativa, potete impostare il type="button" sul <button> .
- L'esito del controllo deve essere stampato in pagina
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



//fase di preparazione 


/*
1- creazione form in cui inserire i dati in input; 

2-creazione di una lista  di email ; 

3- inserimento mail di prova ;

4-controllo tramite ciclo for ;

5-stampare esisto in pagina ; 

*/



const emaiList = ['cirronegiorgio@gmail.com', 'francescocirrone@gmail.com', 'marcocirrone@gamil.com', 'stefanocirrone@gmail.com'];



const userInput = document.getElementById('mail');

const risultatoFinale = document.getElementById('risultato-finale')

console.log(userInput);


const button = document.getElementById('button');

//creazione evento 

//template literal 

////////////////////////////////////////////////////////////////////////////////////////////
button.addEventListener('click', function () {
    const confirMail = document.getElementById('mail').value;
    //prendiamo input dalla mail e lo mettiamo in variabile 
    /*
    const confirMail = document.getElementById('mail').value;
    let result = '';
    for (let i = 0; i < emaiList.length; i++) {

        if (emaiList[i] === confirMail) {

            result = `la mail va bene`;
            break;

        } else {

            result = `la mail non va bene`;
        }

        console.log(result);


    }




});*/
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    // creo una variabile qual ora trovassi o meno l'email e gli do preimpostato un valore falso
    emailFound = false;

    // creo un ciclo che mi controlli in automatico le email
    for (let i = 0; i < emaiList.length; i++) {
        if (emaiList[i] === confirMail) {
            emailFound = true;
            break;
        }
    }

    // se è presente nell array stampo che è stata approvata altrimenti...
    if (emailFound) {
        console.log('email approvata');
    } else {
        console.log('email non valida');
    }
})

risultatoFinale.innerHTML = `${result}`
/*

se metto result fuori ci avrei potuto operare 

 */



/*correzione marco ricorda di fare la scaletta quindi fase di raccolta dati validazione e prevent.default

form.addeventListener(''submit',function(event){

event.preventDefault (); 

const email = emailField.value.trim();


if (email.length === 0 ){


return ; // ma questa sarebbe una  forzatura 


if (!email) return ; questo è un tipo di controllo 

}





}






*/