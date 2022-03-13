/**
    Creare un oggetto che rappresenti un giocatore di basket, con le seguenti proprietà:
    Codice giocatore, Nome, Cognome, Età,  Media punti fatti per partita, Percentuale di successo per tiri da 3 punti

    Generare casualmente le statistiche di gioco, secondo queste regole:

    A - il codice giocatore deve essere formato da 3 lettere maiuscole casuali e 3 cifre casuali

    B - la media punti fatti per partita deve essere compresa tra 0 e 50
    
    C - la percentuale di successo per da 3 punti deve essere compresa tra 0 e 100
 */

    const basketPlayer = {
        CodiceGiocatore : "",
        Nome : "Giovanni" ,
        Cognome : "petruzzi",
        Età : 58,
        mediaPuntiPartita : Math.floor( Math.random()* 50),
        percSuccessPuntiTre : Math.floor( Math.random()* 100),
    };

// ? la mia soluzione
/* const charArray = ["a" ,"b", "c","d","e", "f", "g", "h","i", "l", "m","n","o", "p", "q", "r", "s","t","u", "v","z"];
let codeChar = [];
let codeNumber = [];

    function playerCodeGenerator(charArray , pushCharArray, pushIntArray){
        for(let i = 0; i < 3; i++){
            let randomInex = Math.floor(Math.random()* charArray.length)
            pushCharArray.push(charArray[randomInex]);
            pushIntArray.push(Math.floor(Math.random()* 10));
        }
        
    }
    playerCodeGenerator(charArray,codeChar,codeNumber);
    
    codeNumber.toString()
    basketPlayer.CodiceGiocatore = codeChar.join("") + codeNumber.join("");

    console.table(basketPlayer.CodiceGiocatore); */
    

//? correzione

function charPartId(length) {
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * 
        charactersLength));
    }
    return result;
}

function numericPartId(length) {
    let result           = '';
    let characters       = '0123456789';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
    charactersLength));
    }
    return result;
}

basketPlayer.CodiceGiocatore = charPartId(3) + numericPartId(3);
console.log(basketPlayer.CodiceGiocatore)

