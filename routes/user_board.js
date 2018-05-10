const express = require('express');
const axiosRq = require('../util/util');
const router = express.Router();

router.get('/:id', function(req, res) {
    let userID = req.path;
    console.log(req);
    let data = {
        page: req.query.page || 1,
        page_size: req.query.page_size || 20
    }
    axiosRq('GET', '/v1/user' + userID + '/board', data)
        .then(result => {
            console.log(result);
            res.send(result)
        }).catch(error => {
            console.log(error);
            res.send(error)
        })
});
module.exports = router;