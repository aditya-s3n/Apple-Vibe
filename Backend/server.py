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
recuriter_collection = db["recuriters"]

def makeUser_talent(first_name, last_name, bio, tag: list, pic_data, vid_data, pic_id, vid_id, userTag) -> None:
    post = {
        "fullName" : {
            "firstName": first_name,
            "lastName": last_name
        },
        "userTag": userTag,
        "biography": bio,
        "tags": tag,
        "picture": {
            "data": pic_data,
            "fileID": pic_id
        },
        "video": {
            "data": vid_data,
            "fileID": vid_id
        },
        "starred_company": []
    }   

    talent_collection.insert_one(post).inserted_id

def makeUser_recuriter(first_name, last_name, bio, tag: list, pic_data, vid_data, pic_id, vid_id, userTag) -> None:
    post = {
        "fullName" : {
            "firstName": first_name,
            "lastName": last_name
        },
        "userTag": userTag,
        "biography": bio,
        "tags": tag,
        "picture": {
            "data": pic_data,
            "fileID": pic_id
        },
        "video": {
            "data": vid_data,
            "fileID": vid_id
        },
        "starred_talent": []
    }   

    talent_collection.insert_one(post).inserted_id

def findUser_talent(post_id) -> object:
    return talent_collection.find_one({"_id": post_id})
 
def findUser_recuriter(post_id) -> object:
    return recuriter_collection.find_one({"_id": post_id})

def save_star():
    pass

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