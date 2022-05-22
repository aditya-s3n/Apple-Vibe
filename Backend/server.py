from flask import Flask, jsonify, request
from flask_cors import CORS
import pymongo

app = Flask(__name__)
CORS(app)

###################################### MongoDB Database ######################################
local_connection = "mongodb://localhost:27017"
#Connection to Database
conn_str = "mongodb+srv://Aditya:applevibe@cluster0.ovdha.mongodb.net/Applevibe?retryWrites=true&w=majority"
# set a 5-second connection timeout
client = pymongo.MongoClient(local_connection, serverSelectionTimeoutMS=5000)
#make collections
db = client["Applevibe"]
talent_collection = db["talent"]
star_collection = db["star"]

def makeUser_talent(first_name, last_name, bio, tag: list, userNumber) -> None:
    post = {
        "_id": userNumber,
        "fullName" : {
            "firstName": first_name,
            "lastName": last_name
        },
        "biography": bio,
        "tags": tag,
        "picture": userNumber,
        "video": userNumber,
    }   

    talent_collection.insert_one(post)

def findUser_talent(post_id) -> object:
    return talent_collection.find_one({"_id": post_id})
 
def find_star() -> object:
    return star_collection.find_one()

def save_star(star_array: list):
    star_collection.update_one({}, {"$set": {"star_array": star_array}})

###################################### ROUTING ######################################
@app.route("/")
def home():
    return jsonify({"page": "Home"})

@app.route("/signup", methods=['GET', 'POST'])
def signup():
    return jsonify({"page": "Sign Up"})

@app.route("/login", methods=['GET', 'POST'])
def login():
    return jsonify({"page": "Log In"})

@app.route("/user/<userID>")
def user(userID):
    user_info = findUser_talent(userID)
    return jsonify({"page": "user", "info": user_info})

@app.route("/starinfo", methods=['GET', 'POST'])
def starInfo():
    if request.method == "GET":
        return jsonify({"favourite": [True, False, True, False, True, False, True]})

@app.route("/star")
def star():
    return jsonify({"page": "Star"})

@app.route("/feed")
def feed():
    return jsonify({"page": "Feed"})

@app.route("/UserUpdatePage")
def UserUpdatePage():
    return jsonify({"page": "UserUpdatePage"})

@app.route("/UserImage")
def UserImage():
    return jsonify({"page": "UserImage"})

@app.route("/SignupPage")
def SignupPage():
    return jsonify({"page": "SignupPage"})

@app.route("/pricing")
def pricing():
    return jsonify({"page": "Pricing"})

###################################### RUN SERVER ######################################
if __name__ == "__main__":
    app.run()