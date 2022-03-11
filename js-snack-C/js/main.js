/**
 * 
   A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l'iniziale maiuscola.

   Es: ['pippo', 'PLUTO', 'Paperino'] => ['Pippo', 'Pluto', 'Paperino']

 * 
 */

   const stringArray = ["giovanni","emanuele", "giuseppe", "antonio", "legolas","GESUALDO", "aLFONSO", "Gertrude"];

   let newFormat = stringArray.map((elemento) => { 
      
      return elemento.charAt(0).toUpperCase() +
      elemento.substring(1).toLowerCase();

} )
   console.table(newFormat)