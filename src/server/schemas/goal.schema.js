var mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    title: String,
    description: String,
    plannedDailyTime: Number,
    timelogs: [{
        time: Number,
        date: Date
    }]
});