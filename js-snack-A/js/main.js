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
        Nome : Giovanni ,
        Cognome : petruzzi,
        Età : 58,
        mediaPuntiPartita : Math.floor(math.random()* 50),
        percSuccessPuntiTre : Math.floor(math.random()* 100),
    };


const charArray = ["a" ,"b", "c","d","e", "f", "g", "h","i", "l", "m","n","o", "p", "q", "r", "s","t","u", "v","z"];
let codeChar = [];
let codeNumber = [];

    function playerCodeGenerator(charArray , pushArray){
        for(let i = 0; i < 3; i++){
            pushArray.push(charArray[math.floor(math.random()* charArray.lengt)])
        }
    }