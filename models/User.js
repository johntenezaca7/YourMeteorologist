const mongoose = require('mongoose');
const {Schema } = mongoose;

const userSchema = new Schema({
    googleId:String,
    name: String,
    savedCities : { 
            type : Array ,
             "default" : [] 
            }
});

mongoose.model('users', userSchema);
