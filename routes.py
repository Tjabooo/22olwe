import constants
from static.cogs.handling import LogicHandler
from flask_cors import CORS
from flask import (
    Flask,
    render_template,
    request,
    jsonify
)

class Routes():
    def __init__(self):
        pass
    
    app=Flask(__name__,
                    static_folder=constants.STATIC_PATH,
                    template_folder=constants.TEMPLATES_PATH
    )

    CORS(app)

    @app.route('/')
    def landing_page():
        return render_template('landing_page.html')
    
    @app.route('/ldr-rating', methods=['POST'])
    def ldr_rating():
        return render_template('ldr-rating.html')
    
    @app.route('/platsbokning', methods=['POST'])
    def platsbokning():
        return render_template('platsbokning.html')
    
    @app.route('/platsbokning/book_ticket', methods=['POST'])
    def book_ticket():
        return render_template('book.html')

    @app.route('/platsbokning/make_ticket', methods=['POST'])
    def make_ticket():
        if request.method == 'POST':
            response = LogicHandler().make_ticket()
            ticket_data = LogicHandler().get_ticket_data()
        return {
            'response': response,
            'ticket_data': ticket_data
        }

    @app.route('/platsbokning/update_times', methods=['POST'])
    def update_times():
        if request.method == 'POST':
            response = LogicHandler().update_times()
        return jsonify(response)
    
    @app.route('/platsbokning/get_seats', methods=['POST'])
    def get_seats():
        if request.method == 'POST':
            response = LogicHandler().get_seats()
        return response

    @app.route('/platsbokning/get_cities', methods=['GET'])
    def get_cities():
        if request.method == 'GET':
            response = LogicHandler().get_cities()
        return jsonify(response)
    
    @app.route('/platsbokning/print_ticket', methods=['POST'])
    def print_ticket():
        if request.method == 'POST':
            response = LogicHandler().print_ticket()
        return response
    
    @app.route('/platsbokning/cancel_ticket', methods=['POST'])
    def cancel_ticket():
        if request.method == 'POST':
            response = LogicHandler().cancel_ticket()
        return response