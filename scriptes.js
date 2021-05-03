//SNACK 1
/*A partire da un array di stringhe, crea un secondo array formattando le stringhe
 del primo array in minuscolo e con l'iniziale maiuscola.
Es: ['pippo', 'PLUTO', 'Paperino'] => ['Pippo', 'Pluto', 'Paperino']*/


const nuovoArray = ['CiaO', 'BroCCOLO', 'Pane', 'VIOLA','muccA'];

const arrayOrdinato = nuovoArray.map((element) =>{

    let ordine = element.toLowerCase()
    return ordine.charAt(0).toUpperCase() + ordine.slice(1);
})

console.log(arrayOrdinato)


///////////////////////////////////////////////

/*SNACK 2
Un oggetto rappresenta una finestra di un browser e contiene due campi: 
un array di tab aperte
un numero che indica l'indice della tab aperta nell'array:
{
    "tab": ["Facebook", "GitHub", "Gmail"],
    "activeTab": 0
}
Il software deve guardare se c'è un social aperto ed eliminarlo dalle tab.
Nel caso la tab fosse attiva, deve attivare la successiva.*/

let browser =  
         {
          "tab": ["Facebook", "GitHub", "Gmail"],
          "activeTab": 0
         };


 browser.tab.forEach((element, index, array) => {

     if(element == 'Facebook'){
         browser.tab.splice(index, 1);
     }

 });

 console.log(browser);


 /*SNACK 3  -> si potrebbe ottimizzare con una funzione separata per il capitalize
A partire da un array di stringhe, crea un secondo array formattando le stringhe 
del primo array in minuscolo e con l'iniziale maiuscola.
Es: ['pippo', 'PLUTO', 'Paperino'] => ['Pippo', 'Pluto', 'Paperino']*/

//const nuovoArray = ['CiaO', 'BroCCOLO', 'Pane', 'VIOLA','muccA'];

 const array2 = nuovoArray.map((element) => {

     return capitalize(element);

 });

 console.log(array2);

  function capitalize(element){

     return element[0].toUpperCase() + element.slice(1, element.length).toLowerCase();

 };

 /*SNACK 4 -> VUE 
Partendo da un array di oggetti con i contatti di una rubrica con nome, cognome,
numero, attivo (true,false)

Andiamo a stampare nome cognome e numero dentro una lista.

Fare in modo poi che i contatti non attivi (attivo: false) siano stampati di 
colore rosso mentre gli altri normalmente di nero. 

Cliccando sul numero della persona fate in modo che appaia in console il cognome 
della persona di cui è statocliccato il numero*/


const app = new Vue({

    el: '#app',
    data: {

        rubrica: [
            {
                nome: 'Daniel',
                cognome: 'Gamberini',
                numero: 1122345236,
                attivo: false
            },
            {
                nome: 'Marco',
                cognome: 'Battaglia',
                numero: 654576854,
                attivo: false
            },
            {
                nome: 'Francesca',
                cognome: 'Verdi',
                numero: 77680934,
                attivo: false
            },
            {
                nome: 'Giulia',
                cognome: 'Rossi',
                numero: 4634789963,
                attivo: false
            },
            {
                nome: 'Eva',
                cognome: 'Mingotti',
                numero: 4634789963,
                attivo: false
            },
        ],
    },
        methods:{
            active(index){

                    

                    this.rubrica.forEach((element) => {

                        element.active = false;

                    });

                    this.rubrica[index].active = ! this.rubrica[index].active;
            },
            numero(element){
                console.log(element.cognome);
            },

        

    },

});
