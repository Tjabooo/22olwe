import constants
from routes import Routes
from static.cogs.handling import LogicHandler

def main():
    """
    Kör alla appar på port 8000
    """
    Routes.app.run(
        host=constants.LOCAL_IP,
        port=constants.PORT,
        debug=True)
    LogicHandler.app.run(
        host=constants.LOCAL_IP,
        port=constants.PORT,
        debug=True)

if __name__ == "__main__":
    main()
