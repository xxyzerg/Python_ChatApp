

import os
from flask import Flask, render_template, request, redirect, url_for
from flask_flatpages import FlatPages


DEBUG = True
FLATPAGES_AUTO_RELOAD = DEBUG
FLATPAGES_EXTENSION = '.md'

app = Flask(__name__)
app.config.from_object(__name__)
pages = FlatPages(app)




@app.route('/<names>/<secures>')
def form(names, secures):
    if secures == '123':
        return render_template ("login.html", names=names, secures=secures) #while you login, this page shows and it's defined here. 
    else:
        return 'Invalide action, please go to the home page and set up the username first.'
        
@app.route('/', methods=['GET', 'POST'])#define the method
def index():
    name= ""
    wrong = None
    if request.method == 'POST': 
        if request.form['username'] == None or request.form['password'] != '123':
            wrong = 'Wrong username or password, please type in any username and \'123\' as password.' #define the situation of wrong password or username
        else:
            name = request.form['username'] #pass variable
            secure = request.form['password']
            return redirect(url_for('form', names=name, secures=secure)) #pass variable between different pages
             #go to the content if the the password and username is valid.
            
    return render_template("index.html", wrong=wrong, name=name) #define the home page route


  


@app.route('/<path:path>/')
def page(path):
    return "Sorry, the page you are looking for is missing. Please contact 604-866-1378 for technical support." #define the 404 page
   

if __name__ == '__main__':
    host = os.getenv('IP', '0,0,0,0')
    port = int(os.getenv('PORT', 8080))
    app.debug =True
    app.run(host=host, port=port)