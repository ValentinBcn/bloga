const mongoose = require('mongoose')

var articleSchema = new mongoose.Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    comments : {type: [[String]], required:false},
    date: {type: Date, required: false}
})
module.exports = mongoose.model('Article', articleSchema);

