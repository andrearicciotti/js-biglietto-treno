// RACCOLTA DATI
const kmTrip = parseInt(prompt('Ciao! Quanti kilometri devi percorrere?'));
// console.log(kmTrip);

const eta = parseInt(prompt('E quanti anni hai?'));
// console.log(eta);

let ticketPrice = (kmTrip * 0.21).toFixed(2);
// console.log(ticketPrice);

const discounts = [0.20 , 0.40];

let disc20 = discounts.at();

let disc40 = discounts.at(1);

// console.log(disc20, disc40);


// LOGICA PROGRAMMA
if (eta < 18) {
    ticketPrice = (ticketPrice - (ticketPrice * disc20)).toFixed(2);
} else if (eta > 65) {
    ticketPrice = (ticketPrice - (ticketPrice * disc40)).toFixed(2);
}
// console.log(ticketPrice);


// OUTPUT MESSAGGIO
const finalPrice = `<div id="ticket-price" class="col-12 text-center my-4 fs-4">
<span>Your ticket price is <strong>${ticketPrice}$</span></div><div id="ticket-price" class="col-12 text-center my-4 fs-4">
<span>Enjoy your trip! :)</span>
</div>`

document.getElementById('ticket-price').innerHTML = finalPrice;
