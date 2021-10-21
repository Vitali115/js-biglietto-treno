
console.log('Inizio acquisto biglietto del treno.')

// dati
const priceForKm = 0.21;
let priceforAge = 0;

// dati inseriti dall'utente
const customerAge = parseInt(prompt("Inserisci la tua età."));
const kmTot = parseInt(prompt("Quanti Km devi percorrere?."));
console.log('il Cliente ha',customerAge,'anni e deve percorrere',kmTot,'Km.')


// dati concatenati
if(customerAge < 18){
    priceforAge = priceForKm * kmTot * 0.80;
  }else if (customerAge >= 65){
    priceforAge = priceForKm * kmTot * 0.60;
  }else{  
    priceforAge = priceForKm * kmTot;
  }
  
  priceforAge = priceforAge.toFixed(2);
console.log('Importo dovuto è di:',priceforAge,"€");