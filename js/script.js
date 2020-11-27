// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà;
// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome;
// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

$(document).ready(function() {
  var studente = {
    "nome" : 'Matteo',
    "cognome" : 'Pirovano',
    "eta" : 24
  };

  for (var chiave in studente) {
    var informazioniStudente = studente[chiave];
    document.getElementById('studente').innerHTML += informazioniStudente + " ";
    console.log(studente[chiave]);
  };


var elencoStudenti = [
  {
    "nome": 'Francesco',
    "cognome": 'Santero',
    eta: 30,
  },
  {
    "nome": 'Manuel',
    "cognome": 'Lambruschi',
    eta: 22,
  },
  {
    "nome": 'Mattia',
    "cognome": 'Salemi',
    eta: 21
  }
];

for (var i = 0; i < elencoStudenti.length; i++) {
  var studenti= elencoStudenti[i];
  var nome = studenti["nome"];
  var cognome = studenti["cognome"];
  document.getElementById('nomi_cognomi').innerHTML+= nome + ' '+ cognome + '<br>' ;
};


});


// var etaTotale = 0;
// for(var i = 0; i < classe22.length; i++) {
//   var studente = classe22[i];
//   console.log(studente);
//
//   var eta = studenti["eta"];
//   console.log(eta);
//
//   etaTotale = etaTotale + eta;
// }
