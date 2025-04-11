import socket

def get_ip():
    """
    Hämtar lokala IP addressen om den finns, annars sätts den till 127.0.0.1
    """
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    try:
        s.connect(('192.255.255.255', 1))
        ip = s.getsockname()[0]
    except:
        ip = '127.0.0.1'
    finally:
        s.close()
    return ip

LOCAL_IP = get_ip()
PORT = 8000
SEATS_FILE = 'static/seats.json'
CITIES_FILE = 'static/cities.json'
STATIC_PATH = 'static'
TEMPLATES_PATH = 'templates'
TICKETS_PATH = 'platsbokning/tickets'
