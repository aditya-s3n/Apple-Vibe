from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

###################################### ROUTING ######################################
@app.route("/")
def home():
    return "Home";

@app.route("/signup", methods=['GET', 'POST'])
def signup():
    return ""

@app.route("/login", methods=['GET', 'POST'])
def login():
    return ""

@app.route("/feed")
def feed():
    return "Feed"


###################################### RUN SERVER ######################################
if __name__ == "__main__":
    app.run()