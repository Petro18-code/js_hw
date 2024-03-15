/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* 
Ecco alcuni tipi di oggetti che puoi trovare nella "scatola" JavaScript:

1.Stringhe:
    Semplicemente è una lettera o un numero, e possono essere messe insieme per formare
    parole o frasi. 

2.Numeri:
    Possono essere grandi o piccoli e possono essere usati per contare o misurare cose.

3.Booleani:
    I booleani sono come interruttori che possono essere accesi o spenti. 
    Possono essere solo due: vero o falso. 

4.Array:
    Gli array sono come scatole di giocattoli con molti scomparti. 
    Ogni scomparto può contenere un oggetto diverso.

5.Oggetti:
    Gli oggetti sono come personaggi in una storia. 
    Ogni personaggio ha il proprio nome e una serie di cose che può fare.

 */

/* ESERCIZIO 2
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let result = 12 + 20

/* ESERCIZIO 3
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12

/* ESERCIZIO 4
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name = 'Petro Sota'

/* ESERCIZIO 5
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let e5result = 4 - x

/* ESERCIZIO 6
 Crea un oggetto di Javascript che ti rappresenti(come proprietà usa nome, cognome e hobby)
*/

let presentation = {
    nome: "Petro",
    cognome: "Sota",
    hobby: "Gym"
};

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = 'john'
let name2 = 'John'
console.log(name1 === name2)
console.log(name1.toLowerCase() === name2.toLowerCase())