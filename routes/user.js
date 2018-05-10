const express = require('express');
const axiosRq = require('../util/util');
const router = express.Router();

router.get('/:id', function(req, res) {
    let userID = req.path;
    axiosRq('GET', '/v1/user' + userID)
        .then(result => {
            res.send(result);
        }).catch(error => {
            res.send(error);
        })
});
module.exports = router;