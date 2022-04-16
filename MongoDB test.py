import pymongo

# Replace the uri string with your MongoDB deployment's connection string.
conn_str = "mongodb+srv://Aditya:applevibe@cluster0.ovdha.mongodb.net/Applevibe?retryWrites=true&w=majority"


# set a 5-second connection timeout
client = pymongo.MongoClient(conn_str, serverSelectionTimeoutMS=5000)

db = client["Applevibe"]
collection = db["users"]

"""
#Push Data
post ={"_id":0, "name": "Aditya", "score": 5}

collection.insert_one(post)
"""

"""
#Get data
x = collection.find_one()

print(x)
"""

myquery = { "name": "Not Aditya" }

myquery = { "name": "Aditya" }
newvalues = { "$set": { "name": "Not Aditya" } }

collection.update_one(myquery, newvalues)


for x in collection.find():
  print(x)
