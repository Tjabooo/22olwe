import constants
from routes import Routes
from static.cogs.handling import LogicHandler

if __name__ == '__main__':
    Routes.app.run(
        host=constants.LOCAL_IP,
        port=constants.PORT,
        debug=True)
    LogicHandler.app.run(
        host=constants.LOCAL_IP,
        port=constants.PORT,
        debug=True)