const express = require('express');
const axiosRq = require('../util/util');
const router = express.Router();

router.get('/', function(req, res) {
    const data = {
        page_size: req.query.page_size || 20,
        oid: req.query.oid || 'recommend',
        page: req.query.page || 1
    }
    axiosRq("GET", "/v2/homefeed/notes", data)
        .then(result => {
            console.log(result);
            res.send(result);
        }).catch(error => {
            console.log(error);
            res.send(error);
        })
});

module.exports = router;