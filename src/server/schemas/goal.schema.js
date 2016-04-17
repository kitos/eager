var mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    title: String,
    description: String,
    timelogs: [{
        time: Number,
        date: Date,
        plannedDailyTime: Number
    }]
});