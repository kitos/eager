var express = require('express');
var mongoose = require('mongoose');

var GoalSchema = require('./../schemas/goal.schema');

var Goal = mongoose.model('goals', GoalSchema);

module.exports = () => {
    var router = express.Router();

    router.route('/goals')
        // get all goals
        .get((request, response) => Goal.find().exec()
            .then(goals => response.json(goals)))
        // add new goal
        .post((request, response) => {
            (new Goal({
                title: request.body.title,
                description: request.body.description
            }).save())
                .then(goal => response.json(goal))
                .catch(err => {
                    response.status(500);
                    response.send(err);
                });
        });

    router.route('/goals/:id')
        // get goal by id
        .get((request, response) => Goal.findById(request.params.id)
            .then(goal => response.json(goal))
            .catch(err => {
                response.status(500);
                response.send(err);
            })
        )
        // update goal
        .put((request, response) => {
            Goal.findById(request.params.id)
                .then(goal => {
                    goal.title = request.body.title;
                    goal.description = request.body.description;
                    return goal.save();
                })
                .then(updatedGoal => response.json(updatedGoal))
                .catch(err => {
                    response.status(500);
                    response.send(err);
                })
        })
        .delete((request, response) => Goal.findByIdAndRemove(request.params.id).exec()
            .then(goal => response.json(goal))
            .catch(err => {
                response.status(500);
                response.send(err);
            }));

    return router;
};