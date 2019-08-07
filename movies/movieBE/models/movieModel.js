const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title:{ 
        type: String,
        required: true,
        unique : true
    },
    year:{
        type: Number,
        require: true
    }
    
});

module.exports = mongoose.model('Movie',movieSchema);