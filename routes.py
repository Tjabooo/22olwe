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

    app = Flask(__name__,
                    static_folder=constants.STATIC_PATH,
                    template_folder=constants.TEMPLATES_PATH)

    CORS(app)

    @app.route('/')
    def landing_page():
        return render_template('landing_page.html')
    
    @app.route('/ldr-rating', methods=['POST'])
    def ldr_rating():
        return render_template('/LDR/ldr-rating.html')
    
    @app.route('/skolarbete', methods=['POST'])
    def skolprojekt():
        return render_template('/Skolarbete/skolarbete.html')
    
    @app.route('/skolarbete/programmering-1', methods=['POST'])
    def programmering_1():
        return render_template('/Skolarbete/Programmering 1/prog1.html')
    
    @app.route('/skolarbete/webbutveckling', methods=['POST'])
    def webbutveckling():
        return render_template('/Skolarbete/Webbutveckling/webbutveckling.html')
        
    @app.route('/skolarbete/webbutveckling/html-intro', methods=['POST'])
    def html_intro():
        return render_template('/Skolarbete/Webbutveckling/HTML/html-intro.html')    
    
    @app.route('/skolarbete/webbutveckling/html-intro/html-uppgift-1', methods=['POST'])
    def html_uppgift_1():
        return render_template('/Skolarbete/Webbutveckling/HTML/Uppgifter/html-uppgift-1.html')

    @app.route('/skolarbete/webbutveckling/html-intro/html-uppgift-2', methods=['POST'])
    def html_uppgift_2():
        return render_template('/Skolarbete/Webbutveckling/HTML/Uppgifter/html-uppgift-2.html')
    
    @app.route('/skolarbete/webbutveckling/html-intro/html-uppgift-3', methods=['POST'])
    def html_uppgift_3():
        return render_template('/Skolarbete/Webbutveckling/HTML/Uppgifter/html-uppgift-3.html')

    @app.route('/skolarbete/webbutveckling/html-intro/html-uppgift-4', methods=['POST'])
    def html_uppgift_4():
        return render_template('/Skolarbete/Webbutveckling/HTML/Uppgifter/html-uppgift-4.html')
    
    @app.route('/skolarbete/webbutveckling/html-intro/html-uppgift-5', methods=['POST'])
    def html_uppgift_5():
        return render_template('/Skolarbete/Webbutveckling/HTML/Uppgifter/html-uppgift-5.html')

    @app.route('/skolarbete/webbutveckling/html-intro/html-uppgift-6', methods=['POST'])
    def html_uppgift_6():
        return render_template('/Skolarbete/Webbutveckling/HTML/Uppgifter/html-uppgift-6.html')
        
    @app.route('/skolarbete/webbutveckling/css-intro', methods=['POST'], strict_slashes=False)
    def css_intro():
        return render_template('/Skolarbete/Webbutveckling/CSS/css-intro.html')
    
    @app.route('/skolarbete/webbutveckling/css-intro/css-uppgift-1', methods=['POST'])
    def css_uppgift_1():
        return render_template('/Skolarbete/Webbutveckling/CSS/Uppgifter/css-uppgift-1.html')

    @app.route('/skolarbete/webbutveckling/css-intro/css-uppgift-2', methods=['POST'])
    def css_uppgift_2():
        return render_template('/Skolarbete/Webbutveckling/CSS/Uppgifter/css-uppgift-2.html')

    @app.route('/skolarbete/webbutveckling/inlamningar', methods=['POST'])
    def inlamningar():
        return render_template('/Skolarbete/Webbutveckling/Inlämningar/inlamningar.html')
    
    @app.route('/skolarbete/webbutveckling/inlamningar/boxmodellen', methods=['POST', 'GET'])
    def boxmodellen():
        return render_template('/Skolarbete/Webbutveckling/Inlämningar/Uppgifter/boxmodellen.html')
    
    @app.route('/skolarbete/webbutveckling/inlamningar/frukttabell', methods=['POST', 'GET'])
    def frukttabell():
        return render_template('/Skolarbete/Webbutveckling/Inlämningar/Uppgifter/frukttabell.html')

    @app.route('/skolarbete/webbutveckling/inlamningar/uppgifter/mango')
    def mango():
        return render_template('/Skolarbete/Webbutveckling/Inlämningar/Uppgifter/mango.html')

    @app.route('/skolarbete/webbutveckling/inlamningar/uppgifter/apelsin')
    def apelsin():
        return render_template('/Skolarbete/Webbutveckling/Inlämningar/Uppgifter/apelsin.html')
    
    @app.route('/skolarbete/webbutveckling/inlamningar/uppgifter/kiwi')
    def kiwi():
        return render_template('/Skolarbete/Webbutveckling/Inlämningar/Uppgifter/kiwi.html')

    @app.route('/skolarbete/webbutveckling/inlamningar/uppgifter/turistsida')
    def turistsida():
        return render_template('/Skolarbete/Webbutveckling/Inlämningar/Turistsida/index.html')  

    @app.route('/skolarbete/programmering-1/bevy', methods=['POST'])
    def bevy():
        return render_template('/Skolarbete/Programmering 1/Bevy/bevy.html')

    @app.route('/skolarbete/programmering-1/platsbokning', methods=['POST'])
    def platsbokning():
        return render_template('/Skolarbete/Programmering 1/SJ Platsbokning/platsbokning.html')
    
    @app.route('/skolarbete/programmering-1/platsbokning/book_ticket', methods=['POST'])
    def book_ticket():
        return render_template('/Skolarbete/Programmering 1/SJ Platsbokning/book.html')

    @app.route('/skolarbete/programmering-1/platsbokning/make_ticket', methods=['POST'])
    def make_ticket():
        if request.method == 'POST':
            response = LogicHandler().make_ticket()
            ticket_data = LogicHandler().get_ticket_data()
        return {
            'response': response,
            'ticket_data': ticket_data
        }

    @app.route('/skolarbete/programmering-1/platsbokning/update_times', methods=['POST'])
    def update_times():
        if request.method == 'POST':
            response = LogicHandler().update_times()
        return jsonify(response)
    
    @app.route('/skolarbete/programmering-1/platsbokning/get_seats', methods=['POST'])
    def get_seats():
        if request.method == 'POST':
            response = LogicHandler().get_seats()
        return response

    @app.route('/skolarbete/programmering-1/platsbokning/get_cities', methods=['GET'])
    def get_cities():
        if request.method == 'GET':
            response = LogicHandler().get_cities()
        return jsonify(response)
    
    @app.route('/skolarbete/programmering-1/platsbokning/print_ticket', methods=['POST'])
    def print_ticket():
        if request.method == 'POST':
            response = LogicHandler().print_ticket()
        return response
    
    @app.route('/skolarbete/programmering-1/platsbokning/cancel_ticket', methods=['POST'])
    def cancel_ticket():
        if request.method == 'POST':
            response = LogicHandler().cancel_ticket()
        return response