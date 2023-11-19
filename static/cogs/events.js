import { updateAvailableTimes } from "./handling.js";
import { openSeats } from "./handling.js";
import { closeSeats } from "./handling.js";
import { unselectSeats } from "./cogs.js";
import { prompt } from "./cogs.js";


// event hanterare för knapparna i book.html
document.getElementById('departure').addEventListener('change', updateAvailableTimes);
document.getElementById('destination').addEventListener('change', updateAvailableTimes);
document.getElementById('date').addEventListener('change', updateAvailableTimes);
document.getElementById('get_seats').addEventListener('click', openSeats);
document.getElementById('date').addEventListener('change', closeSeats);
document.getElementById('departure').addEventListener('change', closeSeats);
document.getElementById('destination').addEventListener('change', closeSeats);
document.getElementById('time').addEventListener('change', closeSeats);
document.getElementById('limit').addEventListener('change', unselectSeats);
document.getElementById('make_ticket').addEventListener('click', prompt);