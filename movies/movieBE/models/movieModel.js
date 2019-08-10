const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title:{ 
        type: String,
        required: true
    },
    genre:{
        type: String,
        required: true 
    },
    year:{
        type: Number,
        require: true,
    },
    plot:{
        type: String,
        required: true
    },
    imdbID:{
        type: String,
        required: true
    },
    country:{
        type: String,
        required: true
    },
    poster:{
        type: String,
        require: true
    },
    runtime:{
        type: String,
        require: true 
    },
    votes:{
        type: Number,
        require: true 
    },
    ranking:{
        type: Number,
        require: true 
    }
    
});
movieSchema.index({title: 1, year: 1},{unique: true})
module.exports = mongoose.model('Movie',movieSchema);