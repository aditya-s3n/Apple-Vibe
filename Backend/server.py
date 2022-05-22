from flask import Flask, jsonify, request
from flask_cors import CORS
import pymongo
import bson.json_util as json_util

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

def makeUser_talent(first_name, last_name, bio, tag: list, userNumber, pictureName, favourite) -> None:
    post = {
        "id": userNumber,
        "fullName" : {
            "firstName": first_name,
            "lastName": last_name
        },
        "biography": bio,
        "tags": tag,
        "picture": pictureName,
        "starred": favourite
    }   

    talent_collection.insert_one(post)

def make_star(userNumber, favourite):
    post = {
        "id": userNumber,
        "star": favourite
    }

    star_collection.insert_one(post)

def findUsers() -> list:
    users = []
    for x in talent_collection.find():
        users.append(x)

    return users

def findUser_talent(user_id) -> object:
    return talent_collection.find_one({"_id": user_id})
 
def find_star() -> list:
    star = []
    for x in star_collection.find():
        star.append(x)
    return star

def save_star(star_object: object):
    talent_collection.update_one({"id": star_object["id"]}, {"$set": {"starred": star_object["star"]}})





# talent_collection.delete_many({})
# aditya_bhatia_bio = "Hi I'm Aditya, I'm a student at Iroquois Ridge High school and an Operations Assistant at Planswell. At school I actively participate in many clubs such as DECA, Robotics and TU20"
# aditya_sen_bio = "Hi I'm Aditya, I'm a student at Iroquois Ridge High School and an ethusatic developer. At school I actively lead the Robotics Club and Team, and participate in clubs like Model UN, TU20 and anything to do with technology, engineering, or science"
# person3_bio = "I do good work in keeping computer architure safe and secure. I am a white-hood hacker, if you need to cybersecruity maintaince I am you gal. Cheers."
# person4_bio = "I am a congress-woman. I will keep you from getting money, you stole all the money you made off the backs of illegal immigrants. I have no developer experience, or any experience running companies. Thank you, please hire :)"
# person5_bio = "MMA Fighter and Commentator, Comedian, Father, Podcaster. I do it all. Won't find anywhere else, try DMT."
# person6_bio = "Billionaire. Former CEO of Amazon, Founder of Amazon. I just like Amazon. :)"
# person7_bio = "Hello I need a job. A job where I don't have to deal with kids vaping in the bathroom."
# makeUser_talent("Aditya", "Bhatia", aditya_bhatia_bio, ["Developer", "Marketer", "Operations", "C-Suite"], 1, "Person1.png", False)
# makeUser_talent("Aditya", "Sen", aditya_sen_bio, ["Developer", "Full-Stack", "Operations", "C-Suite"], 2, "Person2.jpg", False)
# makeUser_talent("NFT", "Hacker", person3_bio, ["Developer", "Full-Stack", "Cybersecruity"], 3, "Person3.png", False)
# makeUser_talent("Alexandria", "Ocasio-Cortez", person4_bio, ["Congress-Woman", "Democrat", "Tax the Rich"], 4, "Person4.jpg", False)
# makeUser_talent("Joe", "Rogan", person5_bio, ["Podcaster", "TEXAS", "Tech Enthusiast", "C-Suite"], 5, "Person5.jpg", False)
# makeUser_talent("Jeff", "Bezos", person6_bio, ["Developer", "Full-Stack", "Operations", "C-Suite", "Founder", "AMAZON"], 6, "Person6.jpg", False)
# makeUser_talent("John", "Steiva", person7_bio, ["Investor", "Academia", "Operations", "C-Suite"], 7, "Person7.png", False)
# print("done");
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

# @app.route("/user/<userID>")
# def user(userID):
#     user_info = findUser_talent(userID)
#     return jsonify({"page": "user", "info": user_info})

@app.route("/userinfo")
def userInfo():
    users = findUsers()
    return json_util.dumps({"user_info": users})

@app.route("/starinfo", methods=['GET', 'POST'])
def starInfo():
    if request.method == "GET":
        star = find_star()
        return json_util.dumps({"favourite": star})
    elif request.method == "POST":
        data = request.json
        print(data)
        save_star(data)
        print(find_star())
        return data

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