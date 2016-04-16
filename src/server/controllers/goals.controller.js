var express = require('express');

module.exports = () => {
    var router = express.Router();

    router.route('/goals')
        .get((request, response) => response.json([
            {id: 1, description: 'my first goal'},
            {id: 2, description: 'my second goal'}
        ]));

    return router;
};