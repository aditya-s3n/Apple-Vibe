import pymongo
# Replace the uri string with your MongoDB deployment's connection string.
conn_str = "mongodb+srv://admin:kT3p4TqNcgc21JTJ@cluster0.5sghb.mongodb.net/userDB?retryWrites=true&w=majority"
# set a 5-second connection timeout
client = pymongo.MongoClient(conn_str, serverSelectionTimeoutMS=5000)

#make a schema

#make a user

#send user over to database 