import { seatIds } from "./handling.js";
import { makeTicket } from "./handling.js";

  /**
   * @param  {String} departure  Avgången användaren har matat in
   * @param {String}  destination  Ankomsten användaren har matat in
   * @param {Array}  cities  Array med alla giltiga platser
   * @returns  True/False & Alert meddelande
   */
export function validateLocation(departure, destination, cities) {
    /** 
     * @returns  Avgången och ankomsten i ett titel format
     */
    function capitalizeWords(str) {
        return str.split(' ').map(function(word) {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }).join(' ');
    }
    
    var departureTitle = capitalizeWords(departure);
    var destinationTitle = capitalizeWords(destination);    
    
    var valid = (
        departure != destination &&
        (departure == '' || cities.includes(departureTitle)) &&
        (destination == '' || cities.includes(destinationTitle))
    );
    
    var alertMessage = departure == destination ? 'Ange olika städer' : 'Ange en giltig stad';

    if (departure == '' && destination == '') { removeTimes() } else { return { valid, alertMessage } }
}

  /**
   * Tar bort alla tider från selectTime elementet i book.html
   * @param  {String} selectTime  select element från book.html
   * @returns  None
   */
export function removeTimes(selectTime) {
    while (selectTime.lastChild) {
        selectTime.removeChild(selectTime.lastChild);
    }
}

  /**
   * Avmarkerar ett markerat säte
   * @param  {String} event  Event objekt från event listener i events.js
   * @returns  None
   */
export function unselectSeats(event) {
    var limit = document.getElementById('limit').value;
    var amount = 0;
    for (let i = 0; i <= 31; i++) {
        var seat = document.getElementById(i);
        if (seat.getAttribute('class') == 'selected') { amount += 1 };
    }
    if (amount > limit) { 
        alert('För många valda säten.')
        for (let i = 0; i <= 31; i++) {
            var seat = document.getElementById(i);
            seatIds.splice(seatIds.indexOf(event.currentTarget.id), 1);
            seat.classList.remove('selected');
        }
    }
}

  /**
   * Markerar ett omarkerat säte
   * @param  {String} event  Event objekt från event listener i events.js
   * @returns  None
   */
export function selectSeat(event) {
    var selectedSeat = document.getElementById(event.currentTarget.id);
    var limit = document.getElementById('limit').value;
    var amount = 0;
    for (let i = 0; i <= 31; i++) {
        var seat = document.getElementById(i);
        if (amount > limit) { break };
        if (seat.getAttribute('class') == 'selected') {
            amount += 1;
        }
    } 
    if (selectedSeat.className == 'selected') {
        seatIds.splice(seatIds.indexOf(event.currentTarget.id), 1);
        selectedSeat.classList.remove('selected');
    } else {
        if (!(seatIds.includes(event.currentTarget.id)) && seatIds.length < limit) {
            seatIds.push(event.currentTarget.id);
        }
         if (amount < limit) { selectedSeat.className = 'selected' }
         else { alert('Max antal säten valda.') };
    }
}

  /**
   * Ger en prompt till användaren om de inte har tillräckligt med säten valda
   * @returns  None
   */
export function prompt() {
    var limit = document.getElementById('limit').value;
    var amount = 0;
    for (let i = 0; i <= 31; i++) {
        var seat = document.getElementById(i);
        if (seat.className == 'selected') {
            amount += 1
        }
    }
    switch (true) {
        case amount > 0 && amount < limit:
            var prompt = confirm(`Är du säker på att du vill byta till ${amount} säten?`);
            if (prompt) { limit = amount; makeTicket() };
            break;
        case amount == limit:
            makeTicket();
            break;
        default:
            alert('Du måste välja säten.');
    }
}

// Mitt flatpickr objekt (datum-väljare)
flatpickr("#date", {
    dateFormat: "d/M/Y",
    minDate: new Date().fp_incr(1),
    maxDate: new Date().fp_incr(14),
    defaultDate: new Date().fp_incr(1)
});