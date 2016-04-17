var mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    title: String,
    description: String,
    timelogs: [{
       /* _id: mongoose.Schema.Types.ObjectId,*/
        time: Number,
        date: Date
    }]
});