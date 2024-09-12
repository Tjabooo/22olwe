import constants
import json
import os
import random
from urllib.parse import unquote
from flask_cors import CORS
from flask import (
    Flask,
    request
)

class LogicHandler():
    """
    Hanterar bokningen, avbokningen, och lagringen av säten
    """
    def __init__(self):
        self.seat_file = open(file=constants.SEATS_FILE, mode='r+', encoding='utf-8')
        self.seats = json.load(self.seat_file)

        self.cities_file = open(file=constants.CITIES_FILE, mode='r', encoding='utf-8')
        self.cities = json.load(self.cities_file)

    app=Flask(__name__,
                static_folder=constants.STATIC_PATH,
                template_folder=constants.TEMPLATES_PATH)
    
    CORS(app)

    def update_times(self):
        """
        Hämtar tiderna för tågresan och uppdaterar listan
        """
        departure = request.json.get('departure').title()
        destination = request.json.get('destination').title()
        date = request.json.get('date')

        available_times = []

        for train in self.seats.keys():
            train_data = self.seats.get(train, {})
            empty_departures = 0

            for time, time_data in train_data.items():
                train_departure = time_data.get('departure', '').title()
                train_destination = time_data.get('destination', '').title()
                train_date = time_data.get('date', '')

                if all([train_departure == departure, train_destination == destination, train_date == date]):
                    for time in train_data:
                        if time_data.get(time) == '':
                            empty_departures += 1
                        available_times.append(time) if time not in available_times else print(time)

            if empty_departures >= 3:
                response_data = {
                        'availableTimes': sorted(available_times),
                         'train': train
                }
                return response_data

        if not len(available_times):
            for train in self.seats.keys():
                train_data = self.seats.get(train, {})
                all_departures_empty = all(time_data.get('departure', '') == '' for time_data in train_data.values())

                if all_departures_empty:
                    response_data = {
                            'availableTimes': sorted(train_data.keys()),
                            'train': train
                    }
                    return response_data

        response_data = {
                'availableTimes': sorted(available_times),
                'train': train
        }
        return response_data

    def get_seats(self):
        """
        Hämtar datan för säterna
        """
        data = request.get_json()
        time = data.get('time')

        seat_data = None

        for train in self.seats.keys():
            train_data = self.seats.get(train, {})

            for train_time in train_data.keys():
                if train_time == time:
                    seat_data = train_data[train_time]
                    break
            if seat_data:
                break

        if seat_data:
            return seat_data

    def get_cities(self):
        """
        Hämtar datan för städerna/stationerna tillgängliga
        """
        response_data = self.cities.get('cities')
        return response_data

    def make_ticket(self):
        """
        Skapar en biljett och lagrar den i datasetet
        """
        data = request.get_json()
        departure = data.get('departure', '').title()
        destination = data.get('destination', '').title()
        date = data.get('date')
        time = data.get('time')
        seat_ids = data.get('seat_ids')
        train_id = data.get('train_id')

        for train_data in self.seats.values():
            for _, time_data in train_data.items():
                if (time_data.get('train_id') == train_id):
                    for seat_id in seat_ids:
                        if seat_id in time_data:
                            time_data['departure'] = departure
                            time_data['destination'] = destination
                            time_data['date'] = date
                            time_data[seat_id] = True
                    self.seat_file.seek(0)
                    self.seat_file.truncate(0)
                    self.seat_file.close()
                    with open(constants.SEATS_FILE, 'r+') as f:
                        json.dump(self.seats, f, indent=2)
                    for seat_id in seat_ids:
                        with open(file=f'{constants.TICKETS_PATH}/ticket_{str(seat_id)+str(train_id)}.txt', mode='w', encoding='utf-8') as ticket:
                            ticket.write(f'SJ TÅGBILJETT - ID: {random.randint(0, 61771520)}\n')
                            ticket.write(f'{departure.upper()} - {destination.upper()}\n')
                            ticket.write(f'{date} {time}\n')
                            ticket.write(f'TÅG NR. {train_id} - PLATS {seat_id}\n')
                            ticket.write(f'{"RÖKARE" if int(seat_id) <= 15 else "ICKE RÖKARE"}\n')
                            ticket.write(f'{"MITTGÅNG SÄTE" if (int(seat_id) <= 15 and int(seat_id) % 2 != 0) or (int(seat_id) > 15 and int(seat_id) % 2 == 0) else "FÖNSTER SÄTE"}')
                            print(f'{ticket.name} has successfully been made.')
                    return data
        return data

    def get_ticket_data(self):
        """
        Hämtar biljett data utifrån biljett ID
        """
        data = request.get_json()
        seat_ids = data.get('seat_ids')
        train_id = data.get('train_id')
        tickets = []
        for seat_id in seat_ids:
            with open(file=f'{constants.TICKETS_PATH}/ticket_{seat_id}{train_id}.txt', mode='r', encoding='utf-8') as ticket_file:
                ticket = ticket_file.read()
                tickets.append(ticket)
        ticket_data = '\n'.join(tickets)
        return ticket_data
    
    def print_ticket(self):
        """
        Skriver ut biljetten utifrån biljett ID
        """
        dir = f'./{constants.TICKETS_PATH}'
        id = unquote(request.get_data())
    
        ticket_data = None
        for ticket_name in os.listdir(dir):
            with open(file=f'{constants.TICKETS_PATH}/{ticket_name}', mode='r', encoding='utf-8') as ticket:
                ticket_data = ticket.read()
                ticket_id = ticket_data.split("\n")[0].split(":")[1].strip()
                if id == ticket_id:
                    break
                else:
                    ticket_data = ''
    
        if ticket_data:
            return { 'ticketData': ticket_data, 'statusCode': 200 }
        else:
            return { 'ticketData': ticket_data, 'statusCode': 204 }

        
    def cancel_ticket(self):
        """
        Avbokar biljetten utifrån biljett ID
        """
        dir = f'./{constants.TICKETS_PATH}'
        id = unquote(request.get_data())
        status = ''

        for ticket_name in os.listdir(dir):
            with open(file=f'{constants.TICKETS_PATH}/{ticket_name}', mode='r', encoding='utf-8') as ticket:
                ticket_data = ticket.read().split('\n')
                ticket_id = ticket_data[0].split(':')[1].strip()
                if id == ticket_id:
                    train_id = ticket_data[3].split(' ')[2].strip()
                    seat_id = ticket_data[3].split(' ')[5].strip()

                    for train_data in self.seats.values():
                        for train_time, time_data in train_data.items():
                            if (time_data.get('train_id') == int(train_id)):
                                if seat_id in time_data:
                                    time_data[seat_id] = False
                                self.seat_file.seek(0)
                                self.seat_file.truncate(0)
                                self.seat_file.close()
                                with open(constants.SEATS_FILE, 'r+') as f:
                                    json.dump(self.seats, f, indent=2)

                    os.remove(f'./{constants.TICKETS_PATH}/{ticket_name}')
                    status = f'AVBOKADE BILJETT MED ID {id}'
                    break

        if status != '':
            return {'status': status, 'statusCode': 200}
        else:
            return {'statusCode': 204}