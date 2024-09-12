import { validateLocation } from "./cogs.js";
import { removeTimes } from "./cogs.js";
import { selectSeat } from "./cogs.js";

var cities = [];
export var seatIds = [];
export var trainId = 0;

// Skickar en GET request till get_citites i handling.py
fetch('/skolarbete/programmering-1/platsbokning/get_cities', {
    method: 'GET'
})
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json()
})
.then(city_data => {
    cities = city_data;
})
.catch(error => {
    console.error('Fetch error', error);
});

  /**
   * Skickar en POST request till handling.py som returnerar alla
   * tillgängliga tider och lägger till dem i <select> elementet.
   */
export function updateAvailableTimes() {
    var departure = document.getElementById('departure').value;
    var destination = document.getElementById('destination').value;
    var date = document.getElementById('date').value;
    var selectTime = document.getElementById('time');
    var { valid, alertMessage } = validateLocation(departure, destination, cities);
    
    var data = {
        departure: departure,
        destination: destination,
        date: date
    };
    
    fetch('/skolarbete/programmering-1/platsbokning/update_times', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        if (valid) {
            var availableTimes = data.availableTimes;
            selectTime.innerHTML = '';
            if (destination != '' && departure != '') {
                for (var i = 0; i < availableTimes.length; i++) {
                    var option = document.createElement('option');
                    option.value = availableTimes[i];
                    option.text = availableTimes[i];
                    selectTime.appendChild(option);
                }
                if (availableTimes.length == 0) {
                    var noTimes = document.createElement('option');
                    noTimes.value = 'N/A';
                    noTimes.text = 'Inga tider hittades';
                    selectTime.appendChild(noTimes);
                }
            }
        } else {
            removeTimes(selectTime);
            alert(alertMessage);
        }
    })
    .catch(error => {
        console.error('Fetch error:', error)
    });
}

  /**
   * Skickar en POST request till handling.py som returnerar tillgänglighet för alla säten
   * som sen blir tillagda som knappar.
   */
export function openSeats() {
    const departure = document.getElementById('departure').value;
    const destination = document.getElementById('destination').value;
    const date = document.getElementById('date').value;
    var seats = document.getElementById('seats');
    var seatButton = document.getElementById('get_seats');
    const time = document.getElementById('time').value;
    const group1 = document.getElementById('group1');
    const group2 = document.getElementById('group2');

    var data = {
        departure: departure,
        destination: destination,
        date: date,
        time: time
    };
    
    fetch('/skolarbete/programmering-1/platsbokning/get_seats', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json()
    })
    .then(seatData => {
        seatData = JSON.stringify(seatData);
        seatData = JSON.parse(seatData);
        var seatDataLength = Object.keys(seatData).length - 5;
        trainId = seatData['train_id']
        
        for (let i = 0; i <= seatDataLength; i++) {
            var button = document.createElement('button');
            button.disabled = seatData[i];
            button.id = i;
            button.addEventListener('click', selectSeat);
            if (i <= 15) {
                group1.appendChild(button);
            } else {
                group2.appendChild(button);
            }
        }

        if (time) {
            seats.style.display = 'block';
            seatButton.style.display = 'none';
        }

    })
    .catch(error => {
        console.error('Fetch error: ', error)
    })
}

  /**
   * Gömmer alla säteknappar och visar 'Välj säte' knappen.
   */
export function closeSeats() {
    const seats = document.getElementById('seats');
    const seatButton = document.getElementById('get_seats');
    const group1 = document.getElementById('group1');
    const group2 = document.getElementById('group2');

    while (group1.children[0]) {
        group1.removeChild(group1.lastChild);
    }
    while (group2.children[0]) {
        group2.removeChild(group2.lastChild);
    }

    if (time) {
        seats.style.display = 'none';
        seatButton.style.display = '';
    }
}

  /**
   * Skickar en POST request till handling.py med all data för platsbokningen som skapar
   * en biljett och ändrar sätet till upptagen status.
   */
export function makeTicket() {
    const centerDiv = document.getElementById('center');
    const successDiv = document.getElementById('success');
    const departure = document.getElementById('departure').value;
    const destination = document.getElementById('destination').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value; 

    var data = {
        departure: departure,
        destination: destination,
        date: date,
        time: time,
        seat_ids: seatIds,
        train_id: trainId
    }
    
    fetch('/skolarbete/programmering-1/platsbokning/make_ticket', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json()
    })
    .then(response_data => {
        var ticket_data = response_data['ticket_data'];
        var lines = ticket_data.split('\n');
        var tickets = [];
        
        for (let i = 0; i < lines.length; i += 6) {
            var ticket = lines.slice(i, i + 6).join('\n');
            tickets.push(ticket);
        }

        tickets.forEach(function(ticketText, index) {
            var ticketDiv = document.createElement('div');
            ticketDiv.classList.add('ticket');
            ticketDiv.innerHTML = ticketText.replace(/\n/g, "<br><br>");
            successDiv.appendChild(ticketDiv);
        });        
        centerDiv.style.display = 'none';
        successDiv.style.display = 'block';
    })
    .catch(error => {
        console.error('Fetch error:', error);
    })
}

  /**
   * Skickar en POST request till handling.py som läser och 
   * returnerar biljetten där den sedan blir utskriven.
   */
export function printTicket() {
    var ticketId = prompt('ANGE DIN BILJETT ID:');

    fetch('/skolarbete/programmering-1/platsbokning/print_ticket', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: ticketId
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok")
        }
        return response.json()
    })
    .then(ticketData => {
        if (ticketData['statusCode'] == '204') {
            alert('ANGE EN GILTIG BILJETT ID.');
        } else if (ticketData['statusCode'] == '200') {
            var printWindow = window.open('', '_blank');
            printWindow.document.open();
            
            var formattedTicketData = ticketData['ticketData'].replace(/\n/g, '<br>');
            
            printWindow.document.write('<html><body style="font-size: 30px;">' + formattedTicketData + '</body></html');
            printWindow.document.close();
            printWindow.print();
        }
        
    })
    .catch(error => {
        console.error('Fetch error: ', error)
    });
}

  /**
   * Skickar en POST request till handling.py som avbokar
   * biljetten och ändrar sätet(erna) till tillgängliga.
   */
export function cancelTicket() {
    var ticketId = prompt('ANGE DIN BILJETT ID:');

    fetch('/skolarbete/programmering-1/platsbokning/cancel_ticket', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: ticketId
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok")
        }
        return response.json()
    })
    .then(responseData => {
        if (responseData['statusCode'] == 204) {
            alert('ANGE EN GILTIG BILJETT ID.');
        } else if (responseData['statusCode'] == 200) {
            alert(responseData['status']);
        }
    })
    .catch(error => {
        console.error('Fetch error: ', error)
    });
} 