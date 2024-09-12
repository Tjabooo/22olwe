import { printTicket } from "./handling.js";
import { cancelTicket } from "./handling.js"

// event hanterare för knapparna i platsbokning.html
document.getElementById('cancel_ticket').addEventListener('click', cancelTicket);
document.getElementById('print_tickets').addEventListener('click', printTicket);