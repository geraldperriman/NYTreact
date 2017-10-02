// Dependency
let mongoose = require("mongoose");

// Create the Schema class
let Schema = mongoose.Schema;

// Instantiate a userSchema object with the Schema class we just made
let nytSchema = new Schema({
  // username is a string. We will trim any trailing whitespace. It's also required
   {
    title: "",
    date: new Date(),
    url: ""
  }

});


let newyorkTimes = mongoose.model('Articles', nytSchema );
