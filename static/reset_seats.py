import json
from datetime import datetime, timedelta
import random

start_time = datetime.strptime("08:00", "%H:%M")

seats = {}
used_train_ids = set()

# ett skript som återställer och tar bort alla bokade platser i seats.json
for i in range(30):
    train_info = {}
    for _ in range(3):
        while True:
            time_offset = timedelta(hours=random.randint(0, 23), minutes=random.randint(0, 59))
            minute = round(time_offset.total_seconds() / 60 / 5) * 5
            departure_time = start_time + time_offset - timedelta(minutes=time_offset.seconds // 60 % 5) + timedelta(minutes=minute)
            
            if departure_time < start_time + timedelta(hours=24):
                seat_data = {}
                seat_data["departure"] = ""
                seat_data["destination"] = ""
                seat_data["date"] = ""

                train_id = random.randint(1, 1000)
                while train_id in used_train_ids:
                    train_id = random.randint(1, 1000)
                used_train_ids.add(train_id)

                seat_data["train_id"] = train_id
                seat_data.update({str(j): False for j in range(32)})
                train_info[departure_time.strftime("%H:%M")] = seat_data
                break

    seats[str(i)] = train_info

with open('static/seats.json', 'w') as file:
    json.dump(seats, file, indent=2)

print("'static/seats.json' reset successfully.")