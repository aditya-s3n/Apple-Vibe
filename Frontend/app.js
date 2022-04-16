var express = require("express");
var mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb+srv://admin:kT3p4TqNcgc21JTJ@cluster0.5sghb.mongodb.net/userDB?retryWrites=true&w=majority")


const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));