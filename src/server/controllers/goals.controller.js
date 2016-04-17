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

    router.route('/goals/:id/timelogs/')
        .post((request, response) => {
            Goal.findById(request.params.id)
                .then(goal => {
                    goal.timelogs.push({
                        /*_id: new mongoose.Types.ObjectId,*/
                        time: request.body.time,
                        date: request.body.date
                    });
                    return goal.save();
                }).then(updatedGoal => response.json(updatedGoal))
                .catch(err => {
                    response.status(500);
                    response.send(err);
                })
        });

    router.route('/goals/:id/timelogs/:logid')
        .delete((request, response) => {
            Goal.findById(request.params.id)
                .then(goal =>{
                    goal.timelogs.id(request.params.logid).remove();
                    return goal.save();
                }).then(updatedGoal => response.json(updatedGoal))
                .catch(err => {
                    response.status(500);
                    response.send(err);
                })
        })
        .put((request, response) => {
            Goal.findById(request.params.id)
                .then(goal =>{
                    //todo find a way to edit embeded record
                    goal.timelogs.id(request.params.logid);
                    return goal.save();
                }).then(updatedGoal => response.json(updatedGoal))
                .catch(err => {
                    response.status(500);
                    response.send(err);
                })
        });


    return router;
};