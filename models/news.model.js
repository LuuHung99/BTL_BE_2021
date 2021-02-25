const mongoose = require('mongoose');

const newSchema = mongoose.Schema({
    name: String,
    description: String,
    date: Date,
    tag: String,
    image: String
})

newSchema.statics.getAll = function(){
    return this.find();
}

module.exports = mongoose.model('News', newSchema);